const discord = require('discord.js');
const fs = require('fs');

const client = new discord.Client();
const keepAlive = require('./server.js');
const config = require('./config.json');

const events = fs.readdirSync('./events/');
events.forEach(file => {
    const eventname = file.split('.')[0];
    const event = require(`./events/${file}`);
    client.on(eventname, event.bind(null, client));
});

keepAlive();
client.login("Token Của Bạn");
console.log("ĐANG ĐĂNG NHẬP BẰNG TOKEN ");
