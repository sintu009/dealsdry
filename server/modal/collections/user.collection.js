const { model } = require('mongoose');
const t_user = require('../schema/t_user.schema');
const t_designation = require('../schema/t_designation.schema');
const t_login = require('../schema/t_login.schema');

// const userModel_login = model('login', t_login);
// const userModel_designation = model('degignation', t_designation);
const userModel = model('users', t_user);


module.exports = userModel;
// { userModel, userModel_login, userModel_designation };