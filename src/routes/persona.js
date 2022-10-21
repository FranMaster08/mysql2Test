const { Router } = require("express");
const { persona } = require("../controller");

const routes = Router();

routes.get("/", persona.findAll);
routes.post("/", persona.create);
routes.put("/:id", persona.update);
routes.delete("/:id", persona.destroy);

module.exports = routes;
