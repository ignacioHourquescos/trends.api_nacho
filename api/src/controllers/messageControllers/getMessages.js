const { Message, User } = require('../../../db');

const getMessages = async () => {
  const messages = await Message.findAll({
    include:[User]
  });

  return messages;
};

module.exports = getMessages;