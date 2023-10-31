const server = require("./app.js");

const port = 5000;
// Iniciar el servidor
server.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
