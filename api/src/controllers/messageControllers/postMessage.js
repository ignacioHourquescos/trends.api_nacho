const { Message } = require('../../../db');

const postMessage = async(user_id, content) => {
  const newMessage = await Message.create({
    content,
    user_id,
  })
  return newMessage;
};

module.exports = postMessage;