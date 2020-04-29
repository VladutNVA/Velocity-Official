cons Discord = requirel('discord.js');
cost client = new discord.client();

Client.on('ready',(0 =>{
   console.log('I am ready!');
});

client.on('message',message => {
   If(message.content === 'ping') {
      message.reply('pong');
    }
});

//THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
