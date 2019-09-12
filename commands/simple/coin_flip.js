 const commando = require('discord.js-commando');

 class CoinFlipCommand extends commando.Command{
     constructor(client)
     {
         super(client,{
             name: 'flip',
             group: 'simple',
             memberName: 'flip',
             description: 'Flip the coin.'
         })
     }

     async run(message, args)
     {
         var chance= Math.floor(Math.random() * 2);
         if(chance == 0){
             message.channel.send("A căzut cap!");
         }
         else
         {
             message.channel.send("A căzut pajura!");
         }
     }
 }


module.exports = CoinFlipCommand;