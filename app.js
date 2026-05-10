const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('<h1>Hello from AWS CI/CD Pipeline using Root Account!</h1>');
});
app.listen(8080, () => console.log('App running on port 8080'));