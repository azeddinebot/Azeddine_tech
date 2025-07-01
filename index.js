const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('✅ بوت azeddine_tech جاهز للعمل!');
});

client.on('message', async message => {
  if (message.body === '/start') {
    message.reply('مرحباً! هذا هو بوت azeddine_tech. أرسل لي رابط لتحميل الملف.');
  }
});

client.initialize();
