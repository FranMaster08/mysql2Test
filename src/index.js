const config = require("./config");
const app = require("./app");
app.listen(config.port, () => console.log("listening on port " + config.port));
