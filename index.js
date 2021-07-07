require("dotenv").config();
const low = require("lowdb");
// const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const discount_code_router = require("./src/routes/discount-codes");
const swaggerUI = require("swagger-ui-express");
const { swaggerOptions } = require("./src/config/general");
const mongoose = require("mongoose");

const { MONGO_USER,MONGO_IP,MONGO_PORT,MONGO_PASS } = require("./dev-ops-config/config");

const PORT = process.env.PORT || 4000;

const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("./src/db/db.json");
const db = low(adapter);

db.defaults({ discount_codes: [] }).write();

const specs = swaggerJsDoc(swaggerOptions);
const mongoURL =`mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
const app = express();
mongoose.connect(mongoURL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
 )
  .then(() => { console.log("Connected to MongoDB."); })
  .catch((err) => { console.log(err); });

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.db = db;

// app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/discount_code", discount_code_router);

app.get('/', (req, res) => {
  res.sendFile('./src/pages/home.html', { root: __dirname });
});

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));