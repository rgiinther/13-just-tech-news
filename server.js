const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
<<<<<<< HEAD
sequelize.sync({ force: false }).then(() => {
=======
sequelize.sync({ force: true }).then(() => {
>>>>>>> develop
  app.listen(PORT, () => console.log('Now listening'));
});