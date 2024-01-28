const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require("./src/middlewares/errorHandler");
const librosRouter = require("./src/Routes/index");

const app = express();
const autenticacion = auth({
  audience: "http://localhost:3000/api/productos",
  issuerBaseURL: "https://dev-utn-frc-iaew.auth0.com/",
  tokenSigningAlg: "RS256",
});

app.use(express.json());
// app.use("/libros", librosRouter);
app.use("/libros", autenticacion, librosRouter);
app.use(errorHandler);

app.listen(3001, () => {
  console.log("Servidor iniciado en el puerto 3001");
});
