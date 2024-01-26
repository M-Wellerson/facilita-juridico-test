# Teste de Programação Desenvolvedor Facilita Jurídico

## Software Versions
- Nginx: 1.25
- Node: 21.6.0
- PostgresSQL: 16
- React: 18.2.0

**Necessário Docker/composer versão acima de 24**

## Instalação

### Linux usando Makefile
1. Execute o camando `make install`.

2. Agora visite http://localhost:8000/ e o site estará de pé.

### Comandos para o gereciamento do ambiente

`make up`: Inicializa o ambiente de desenvolvimento, levantando os contêineres.

`make down`: Desliga o ambiente de desenvolvimento, interrompendo os contêineres.

`make logs`: Exibe os registros dos contêineres em execução, incluindo logs do servidor web e do servidor nginx.

## Outros sistemas
1. Execute os comandos nesta sequência:
`docker compose up -d`
`docker compose exec front-end npm install`
`docker compose exec back-end npm install`
`docker compose exec db psql -U postgres -d postgres -a -f /var/lib/postgresql/data/initial.sql; \`

2. Agora visite http://localhost:8000/ e o site estará de pé.

### Comandos para o gereciamento do ambiente

`docker compose up -d`: Inicializa o ambiente de desenvolvimento, levantando os contêineres.

`docker compose down`: Desliga o ambiente de desenvolvimento, interrompendo os contêineres.

`docker compose logs -f`: Exibe os registros dos contêineres em execução, incluindo os logs dos servidores web e nginx.
