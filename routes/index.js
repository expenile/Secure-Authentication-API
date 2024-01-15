const express = require("express");
const { registerUser, loginUser, getUsers } = require("../userController"); // Make sure to import getUsers
const { userRegisterValidate, userLoginValidate } = require("../utils/userValidation");
const { ensureAuthenticated } = require("../utils/Auth");
const routes = express.Router();

routes.post('/register', userRegisterValidate, registerUser);
routes.post('/login', userLoginValidate, loginUser);
routes.get('/users', ensureAuthenticated, getUsers); // Assuming getUsers is a valid function

module.exports = routes;
