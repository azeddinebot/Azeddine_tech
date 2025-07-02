const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

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
    if (message.body === '/start') {
        message.reply('مرحباً هذا هو بوت azeddine_tech.\nأرسل لي رابط لتحميل الملف.');
    }
});

client.initialize();
