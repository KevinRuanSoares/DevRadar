const { Router } = require("express"); 
const DevController = require("./controllers/DevController");
const SearchCrontroller = require("./controllers/SearchCrontroller");
const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchCrontroller.index);

module.exports = routes;