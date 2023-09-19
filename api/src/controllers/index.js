const postUser = require('./userControllers/postUser');
const getUsers = require('./userControllers/getUsers');
const loginUser = require('./userControllers/loginUser');
const getUserById = require('./userControllers/getUserById');
const updateUser = require('./userControllers/updateUser');

const getMessages = require('./messageControllers/getMessages');
const postMessage = require('./messageControllers/postMessage');
const deleteMessage = require('./messageControllers/deleteMessage');


module.exports = {
  //Users
  // ------------
  postUser,
  getUsers,
  loginUser,
  getUserById,
  updateUser,

  //Messages
  // -------------
  getMessages,
  postMessage,
  deleteMessage,
}