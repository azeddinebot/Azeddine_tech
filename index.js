const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// استيراد الأوامر
const startCommand = require('./commands/start');
const fbCommand = require('./commands/fb');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  }
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('✅ تم تشغيل بوت azeddine_tech');
});

client.on('message', async message => {
  if (message.body.startsWith('/start')) {
    startCommand(message, client);
  } else if (message.body.startsWith('.fb')) {
    fbCommand(message, client);
  }
});

client.initialize();
```

✅ الإضافة المهمة:
```js
puppeteer: {
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox']
}
