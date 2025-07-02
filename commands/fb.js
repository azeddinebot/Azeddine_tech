const axios = require('axios');
const fs = require('fs');
const { MessageMedia } = require('whatsapp-web.js');

module.exports = async (message, client) => {
  if (message.body.startsWith('.fb ')) {
    const url = message.body.split(' ')[1];
    if (!url) return message.reply('❌ يرجى إرسال رابط الفيديو بعد الأمر .fb');

    try {
      message.reply('⏳ جاري التحميل من فيسبوك...');

      const api = `https://api.dham7.com/fb?url=${encodeURIComponent(url)}`;
      const res = await axios.get(api);
      const videoUrl = res.data?.url;

      if (!videoUrl) return message.reply('❌ لم يتم العثور على الفيديو.');

      const videoRes = await axios.get(videoUrl, { responseType: 'arraybuffer' });
      const media = new MessageMedia('video/mp4', videoRes.data.toString('base64'));

      client.sendMessage(message.from, media, { caption: '📥 تم التحميل من فيسبوك' });
    } catch (e) {
      message.reply('❌ حدث خطأ أثناء تحميل الفيديو.');
      console.error(e.message);
    }
  }
};
