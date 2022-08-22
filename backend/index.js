const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// Utilisation de variable d'environnement pour dissimuler les infos de connexion
require("dotenv").config();

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "Vue Mailer Application ?? ",
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

require("./api/config/db")(app);
require('../backend/api/routeHandler')(app);
