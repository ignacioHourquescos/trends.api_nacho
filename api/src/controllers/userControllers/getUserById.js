const { User } = require('../../../db');

const getUserById = async (id) => {
  const userFound = await User.findOne({ where: { id }});
  if(userFound){
    return userFound
  } else {
    const error = new Error ("Usuario no encontrado");
    error.statusCode = 404;
    throw error;
  }
};

module.exports = getUserById;