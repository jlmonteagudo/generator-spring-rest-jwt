# generator-spring-rest-jwt
> Creates the skeleton of an API REST developed with Spring Boot, that uses JWT to protect the API

**Note:** I have created this generator based on this demo (https://github.com/szerhusenBC/jwt-spring-security-demo) of Stephan Zerhusen. Thanks Stephan.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-spring-rest-jwt using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-spring-rest-jwt
```

Then generate your new project:

```bash
yo spring-rest-jwt
```

## Usage

Once you have created your project you can get an access token for the following accounts:

```
Admin - admin:admin
User - user:password
Disabled - disabled:password (this user is disabled)
```

There are two endpoints that creates this generator:
```
/auth - authentication endpoint with unrestricted access
/admin - an example endpoint that is restricted to authorized users with the role 'ROLE_ADMIN' (a valid JWT token must be present in the request header)
```

If you want to get a token for admin, you have to send a POST request to the endpoint **/auth** with the following JSON in the body request:
```
{
    "username": "admin",
    "password": "admin"
}
```

Then you will get a token and you can use it passing it in your requests header:
```
Authorization: eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiYXVkaWVuY2UiOiJ3ZWIiLCJjcmVhdGVkIjoxNDg0OTE4NjA2ODMwLCJleHAiOjE0ODU1MjM0MDZ9.ghLIqZM0wgWmL_a6_OGYjuwtaDUDbQaBFGndkfy2DNwDgu05vuoW_d6aS9iCNsi6Ajxjr8rOEYlV7QFALA9seQ
```

## Creating new endpoints

If you want to create new endpoints then you can run the following command inside the project folder:
```bash
yo spring-rest-jwt:resource
```

This will generate a basic Entity, a JPA Repository and a REST Controller with CRUD operations.

**Note:** Currently, the code that is being generated is very basic and must be improved. For example, the generator is not handling exceptions, is not returning proper request codes, etc. It is very easy to improve it. You can fork this generator an adapat it to your needs, or you can send a pull request if you want.


## License

MIT © [Jose Luis Monteagudo](http://www.jlmonteagudo.com)
