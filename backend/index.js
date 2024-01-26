import express from "express";
import pg from "pg";

const { Client } = pg;
const client = new Client({
  user: "postgres",
  host: "db",
  database: "postgres",
  password: "1234",
  port: 5432,
});
client.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/clients", async (req, res) => {
  try {
    const response = await client.query(`SELECT * FROM clients`);
    if (response) {
      res.status(200).send(response.rows);
    }
  } catch (error) {
    res.status(500).send("Error");
    console.log(error);
  }
});

app.post("/api/clients", async (req, res) => {
  try {
    const { name, email, cellphone, coordinate_x, coordinate_y } = req.body;

    if (!name || !email || !cellphone || !coordinate_x || !coordinate_y) {
      return res.status(400).send({ error: "Campo obrigatório!" });
    }

    const response = await client.query(
      `INSERT INTO clients(name, email, cellphone, coordinate_x, coordinate_y) VALUES ($1, $2, $3, $4, $5) RETURNING id;`,
      [name, email, cellphone, coordinate_x, coordinate_y]
    );

    if (response) {
      res.status(200).send({ message: "Cliente salvo com suceso", id: response.rows[0].id });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error", details: error.message });
  }
});

function calculateDistance(clientA, clientB) {
  const deltaX = clientA.coordinate_x - clientB.coordinate_x;
  const deltaY = clientA.coordinate_y - clientB.coordinate_y;

  return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

function findClosestClient(currentClient, unvisitedClients) {
  let closestClient;
  let shortestDistance = Number.MAX_VALUE;

  for (const client of unvisitedClients) {
    const distance = calculateDistance(currentClient, client);
    if (distance < shortestDistance) {
      shortestDistance = distance;
      closestClient = client;
    }
  }

  return closestClient;
}

function calculateOptimizedRoute(clients) {
  const numberOfClients = clients.length;
  const optimizedRoute = [{ coordinate_x: 0, coordinate_y: 0 }];
  const unvisitedClients = [...clients];

  while (optimizedRoute.length < numberOfClients + 1) {
    const currentClient = optimizedRoute[optimizedRoute.length - 1];
    const closestClient = findClosestClient(
      currentClient,
      unvisitedClients,
    );

    optimizedRoute.push(closestClient);
    unvisitedClients.splice(
      unvisitedClients.indexOf(closestClient),
      1,
    );
  }

  return optimizedRoute;
}


app.get("/api/optimized-routes", async (req, res) => {
  try {
    const clients = await client.query(`SELECT * FROM clients`);
    const optimizedRoutes = calculateOptimizedRoute(clients.rows);
    const routes = optimizedRoutes.filter(route => route.id !== undefined);

    res.send(JSON.stringify(routes));
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

app.listen(3000, () => console.log(`App running on port 3000.`));
