const express = require("express");
const route = express.Router();

const services = require("../services/render");
const controller = require('../controller/controller');

//Root Route
//Method - GET /
route.get("/", services.homeRoutes);


//add users route
//Method - GET /add-user
route.get("/add-user", services.add_user);


//update users route
//Method - GET /update-user
route.get("/update-user", services.update_user);

//API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);

module.exports = route;
