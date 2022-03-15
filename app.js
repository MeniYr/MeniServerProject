const express = require("express");
const path = require("path");
const http = require("http");
const {routesInit, corsAccessControl} = require("./routes/config_routes.js");
require("./db/mongoConenct"); 

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

routesInit(app);
corsAccessControl(app);

const server = http.createServer(app);
let port = process.env.PORT || 3000;
server.listen(port);