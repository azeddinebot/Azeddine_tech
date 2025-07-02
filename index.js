const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// استيراد أوامر
const handleStart = require('./commands/start');

const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('✅ تم تشغيل بوت azeddine_tech');
});

client.on('message', async message => {
  handleStart(message, client);
});

client.initialize();
