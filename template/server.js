require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
var router = express.Router();

/* routes */
var PublicRoutes = require("./routes/public.routes");
var PrivateRoutes = require("./routes/private.routes");
/* extra */
var logger = require("morgan");

app.use(logger(process.env.MORGANLEVEL));

// Serve the static files from the React app
app.use(express.static(path.resolve(__dirname, "./build")));

/* GESTIONE ROUTING REACT E VARI REFRESH RICHIESTI DAL BROWSER */
router.get("*", function (req, res, next) {
  var i = path.resolve(__dirname, "./build/index.html");
  res.sendFile(i, function (err) {
    if (err) {
      console.log("INDEX.HTML NOT FOUND ERROR!");
      res.status(500).send(err);
    }
  });
});

/* Routes */
app.use(router);
app.use(PublicRoutes);
app.use(PrivateRoutes);

var port = Number(process.env.PORT) || 5000;
app.listen(port);

console.log("Server running at http://localhost:%d", port);
console.log("Serving:", path.resolve(__dirname, "build"));
