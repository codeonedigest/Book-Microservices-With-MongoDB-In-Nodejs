![BookMicroserviceWithMongoDBInNodeJs-High Level Design](https://github.com/codeonedigest/Book-Microservices-With-MongoDB-In-Nodejs/assets/116933916/6a233bc1-91e3-44b3-8cc7-ec5baf85a924)

![BookMicroserviceWithMongoDBInNodeJs-Low Level Design](https://github.com/codeonedigest/Book-Microservices-With-MongoDB-In-Nodejs/assets/116933916/7daa5f72-b9ac-4be6-bcbc-3e77f8803603)


# Microservices 

A basic application to demonstrate the microservices architecture with mongodb in nodejs using books store management.

# Prerequisites before run the project 
- install latest version of [nodejs](https://nodejs.org/en/download)
- install latest version of [mongodb](https://www.mongodb.com/try/download/community?tck=docs_server)
- Good to have [postman](https://www.postman.com/downloads/) installed to test the microservices.

## Commands

| Name | Description |
--- | --- |
| npm run startbookserver| Starts book server|

# How to test
import postman collection in postman and test.
you can find the postman collections here. 
https://github.com/codeonedigest/Book-Microservices-With-MongoDB-In-Nodejs/tree/master/test/postman


## Books API
| API | Method| Description |
|--- | --- |--- |
| /api/v1/book/add |POST| Add new book |
|/api/v1/books|GET|Get all the books|
| /api/v1/book/:uuid |GET| Get book by id |
| /api/v1/book/:uuid |PUT| Update book by id |
| /api/v1/book/:uuid |DELETE| Delete book by id |

