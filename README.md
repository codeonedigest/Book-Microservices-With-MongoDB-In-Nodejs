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
you can find the postman collections here. https://github.com/codeonedigest/Book-Microservices-With-MongoDB-In-Nodejs/test/postman/


## Books API
| API | Method| Description |
|--- | --- |--- |
| /api/v1/book/add |POST| Add new book |
|/api/v1/books|GET|Get all the books|
| /api/v1/book/:uuid |GET| Get book by id |
| /api/v1/book/:uuid |PUT| Update book by id |
| /api/v1/book/:uuid |DELETE| Delete book by id |

