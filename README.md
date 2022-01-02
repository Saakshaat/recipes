# Recipes
A small application for maintaining recipes that I've liked. 


Recipes can be added through webpage links or added manually.

## Components
- Backend Service
    - Scraper
    - TypeGraph server
        - TypeORM
    - Auth
    - Logging
- Web App
- SQLite database
    - Container Volume

## Microservices
### Scraper
Python/Java service to scrape a given webpage for recipe fields and data such as
- Completion Time
- Ingredients
- Steps

This is exposed as an RPC to be called by the Tyepscript GraphQL server.

### TypeGraphQL Server
Main API used by clients for adding new recipes, querying added recipes, and so on.

Also involves a containerized SQLite database which is used by the resolver. The main `Recipe` resolver also involves a small cache to save queries.

This uses the `TypeORM` for working with TypeScript models.

### Auth
Authentication microservice used by the TypeGraphQL server

### Nginx
Not exactly a microservice but the main the main service is exposed through an Nginx reverese proxy using SSL certs from letsencrypt.

> Only needed if the webapp is served remotely and not as a container.

## Roadmap
### Logging 
A logging service stood up as a microservice that logs user queries and maintains analytics for most queried cuisines and so on.


### Lambda
Containerized lambda for logging.
