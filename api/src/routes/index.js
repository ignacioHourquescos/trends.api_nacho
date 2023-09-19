const express = require('express');
const usersRouter = require('./usersRouter');
const messagesRouter = require('./messagesRouter');

function routerApi(server) {
  const router = express.Router();
  //Ruta padre con versión
  server.use("/api/v1", router);
  router.use("/users", usersRouter);
  router.use("/messages", messagesRouter);
};

module.exports = routerApi;