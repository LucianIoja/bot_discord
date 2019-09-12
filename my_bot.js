const Commando = require('discord.js-commando');
const bot = new Commando.Client({
  commandPrefix : "$"
});
const youtube = require('ytdl-core');
const token = 'NTU3MjMwOTM2MDYwNTkyMTQ5.D3FmdA.0EpTxcZhH_cd8tKXy9bxLZk7eP4';
//const botconfig = require("./botconfig.js");
const Discord = require("discord.js");


bot.registry.registerGroup('simple', 'Simple');
//bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('complex', 'Complex');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');


bot.on('ready', async () => {
  // console.log('Smigal is online');
  bot.user.setStatus('online')
  // bot.user.setPresence({ game: { name: 'with my balls', type: 3 } });
  
});

bot.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  bot.user.setActivity(`on ${bot.guilds.size} servers`);
});

bot.on('message', message => {
  if (message.content === "csgo") {
    message.channel.send('@everyone hai la cs faaaaaaaaaaaaaaa');
  }
  if(message.content === "smiege") {
    message.channel.send("<@299977606730743811> hai la smiege fraiere");
  }
  if(message.content === "fortnite" || message.content === "fortnait") {
    message.channel.send("<@261563356018769920> hai la fortnait virgine")
  }
});


bot.on('message', message => {
  if (message.context === "test"){
    console.log(bot.guilds.userid)
  }
})

bot.on(`message`, function(message){
  if(message.content == `Salut`|| message.content == `salut`|| message.context == `Sall`)
    {
      message.channel.send('sal clan, azi sunt supi');
    }
})

bot.on(`message`, function(message){
  if(message.content == `Hello`|| message.content == `hello`|| message.context == `Hi` || message.content == "hi" )
    {
      message.channel.send('hi clan');
    }
})

bot.on(`message`, function(message){
  if(message.content == '$money' )
    {
      message.channel.send(moneys);
    }
})





bot.login(token);