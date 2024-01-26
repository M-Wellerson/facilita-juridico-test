// optimizedRoute.js

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
  
  module.exports = calculateOptimizedRoute;
  