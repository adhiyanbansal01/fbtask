require('dotenv').config()
const express = require('express');
const mysql=require('mysql')
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

require('./config/connection');

app.use(express.json());
var apiRoutes =require("./routes/routes");
app.use('/api',apiRoutes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(process.env.PORT);
