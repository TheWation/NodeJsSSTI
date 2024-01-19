const express = require('express');
const pug = require('pug');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    // Get the username from the query string
    const username = req.query.username || 'Guest';

    // Vulnerable Implementation
    const templateString = `| Welcome ${username}!`;

    // Safe Implementation
    // const templateString = `| Welcome #{'${username}'}!`;

    // Render the template without compiling
    const output = pug.render(templateString);

    // Send the rendered HTML as the response
    res.send(output);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});