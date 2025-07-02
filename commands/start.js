module.exports = (message, client) => {
  if (message.body === '/start') {
    client.sendMessage(message.from, '👋 أهلاً بك في azeddine_tech.\nأرسل لي رابط لتحميل الملف.');
  }
};
