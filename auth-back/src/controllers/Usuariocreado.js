const { User } = require('../models/User'); // Importa el modelo de usuario desde tu archivo de definición de modelos

async function usernameExists(username) {
  try {
    const user = await User.findOne({
      where: {
        username: username
      }
    });
    return user !== null;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  usernameExists
};