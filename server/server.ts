const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const serverDefaults = jsonServer.defaults();

 server.use(serverDefaults);
 server.use(jsonServer.bodyParser);
server.use(router);

const PORT = 3000
server.listen(PORT, () => {
  console.log('JSON Server is running at PORT: '+PORT);
});




