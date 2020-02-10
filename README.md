## Overview
POC project to test project structure and separation of concerns for [gRPC](https://grpc.io/) based services.

Models a simple service that repeats (echos) the received message.

## Guidelines
- API separate from Implementation
- Business logic separate from transport details

## Project Structure
- api: Contains api definitions
  - echo: Contains the object oriented api for the service. 
          This module is responsible for defining the object oriented api to be used by the business logic implementation. 
  - proto: Contains the gRPC api defined by proto files.
           This module is responsible for defining the gRPC api for the service.        
           This artifact is the one that is referenced by someone that needs to know about the api. 
- impls: Contains implementations
  - echo: Implements the business logic for the echo service. Implements the object oriented api of the service. 
  - grpc: Exposes the echo service via gRPC. Implements the gRPC api of the service.
          This module is responsible for handling how the gRPC service is mapped to the service business logic.
          It should handle mostly protocol / transport issues such as how a business service error is mapped to a
          gRPC error. No business logic should be implemented in this module.
- dev: Contains supporting classes to play "test" the POC.

## Testing
1. Run the GrpcServer.main() from the dev module.
2. Run the GrpcClient.main() from the dev module.

## Missing
- REST service
  - via `google.api.http` options in proto files. https://github.com/grpc-ecosystem/grpc-gateway
  - via direct implementation with jaxrs annotations
- JS client for gRPC service https://github.com/grpc/grpc-web

## Open Questions
- Should we generate a separate artifact with just the java code generation of the gRPC service? 
  In the current version the code is being generated in the module that implements the gRPC service.
  If another module wants to provide a different gRPC implementation, or generate the client, 
  then the current approach would require encapsulation of the generated classes between modules. 
  JPMS and OSGi provide this.   
- Should we define the REST api as...
  - options in the gRPC api then generate the OpenAPI definition from it?
  - an OpenAPI spec and generate another implementation from there?
  - jaxrs annotations and generate the OpenAPI definition from it?