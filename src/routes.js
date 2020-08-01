const express = require('express')

const routes = express.Router()

const UserController = require('../src/controllers/UserController')
const addressController = require('../src/controllers/AddressController')
const TechController = require('../src/controllers/TechController')
const ReportController = require('../src/controllers/ReportController')

routes.post('/users', UserController.store)
routes.get('/users', UserController.index)

routes.post('/users/:user_id/addresses', addressController.store)
routes.get('/users/:user_id/addresses', addressController.index)

routes.post('/users/:user_id/techs', TechController.store)
routes.get('/users/:user_id/techs', TechController.index)
routes.delete('/users/:user_id/techs', TechController.delete)

routes.get('/report', ReportController.show)

module.exports = routes;