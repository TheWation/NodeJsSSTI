# Express with Pug SSTI Example

[![made-with-python](http://forthebadge.com/images/badges/made-with-python.svg)](https://www.python.org/)
[![built-with-love](http://forthebadge.com/images/badges/built-with-love.svg)](https://gitHub.com/TheWation/)

This repository provides an example Express application using Pug templates to illustrate Server-Side Template Injection (SSTI) vulnerabilities and a safe implementation.

## Installation

1. Clone this repository:

```bash
git clone https://github.com/TheWation/NodeJsSSTI.git
cd NodeJsSSTI
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Run the Application

Start the Express application:

```bash
npm start
```

The application will be running at `http://localhost:8000/`.

### Test SSTI Vulnerability
Visit the application in your browser or through tools like `curl` or `Postman`, providing the `username` parameter in the query string. For example:

`http://localhost:8000/?username=%23{10 * 10}`

Output:

```
Welcome 100!
```

Note: The default implementation is vulnerable to SSTI.

## Test Safe Implementation

To test the safe implementation, uncomment the safe template string and comment out the vulnerable one in the `app.get` route handler in `index.js`. Restart the application:

```bash
npm start
```

Visit the application again with different `username` parameters to observe the difference.

## Disclaimer

This application is intentionally vulnerable to demonstrate SSTI. Do not use it in a production environment. Always validate and sanitize user input.

## License

`NodeJsSSTI` is made with ♥  by [Wation](https://github.com/TheWation) and it's released under the `MIT` license.