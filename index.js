const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello from Jenkins CI/CD!</h1><p>Our Docker build pipeline worked perfectly.</p>');
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
