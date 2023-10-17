const express = require("express");
const router = require("./routes/routes");

const app = express();

app.use(express.json());
app.use(router);

app.listen(8080, () => {
	console.log("Servidor rodando na porta 8080");
});
