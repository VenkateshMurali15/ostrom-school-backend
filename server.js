const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./database/connection");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

dotenv.config();

const app = express();

// DB Connectivity
dbConnection();

// cors
app.use(cors());

// request payload middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/v1/student", require("./routes/student-route"));

app.get("/", (req, res, next) => {
  res.send("Hello from Nod APi e Server");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Error Handler middleware
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({
    status: 500,
    message: err.message,
    body: {},
  });
});
