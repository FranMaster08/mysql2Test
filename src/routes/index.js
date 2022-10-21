const { Router } = require("express");
const persona = require("./persona");
const routes = Router();

routes.get("/", async (req, res ,next) => {
  try {
    throw "Prueba de error";
  } catch (error) {
    next(error);
  }
});

routes.use("/persona", persona);

module.exports = routes;
