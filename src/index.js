const express = require('express');
const chalk = require('chalk');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/health', (req, res) => {
  res.send({ message: 'I am healthy!' });
});

app.listen(PORT, () => {
  console.log(chalk.green(`Application is now listening on PORT: ${PORT}`));
});
