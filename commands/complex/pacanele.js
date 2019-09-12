const commando = require('discord.js-commando');
const discord = require('discord.js');
const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    commandPrefix : "$"
  });

class SlotsCommand extends commando.Command{
    constructor(client)
    {
        super(client,{
            name: 'slots',
            group: 'complex',
            memberName: 'slots',
            description: 'If you feel lucky, play slots ' 
        })
    }
    
    async run(message, args)
    {      
           var emojis = [":eggplant:",":poop:",":ok_hand:",":yum:",":fork_and_knife:",":money_mouth:",":rage:",":metal:",":tangerine:",":banana:"]
           var parts = [];
           var emoji1 =  Math.floor(Math.random() * emojis.length) ;
           var emoji2 = Math.floor(Math.random() * emojis.length) ;
           var emoji3 = Math.floor(Math.random() * emojis.length) ;
           var emoji4 =  Math.floor(Math.random() * emojis.length) ;
           var emoji5 =  Math.floor(Math.random() * emojis.length) ;
           var emoji6 =  Math.floor(Math.random() * emojis.length) ;
           var counter = Math.floor(Math.random() * 100);
           var moneys = 100; ;
           console.log(counter)
            if(counter == 0 || counter == 1)
             {
                var part =":slot_machine:  :slot_machine:  :slot_machine:" + " \n---------------\n " + emojis[emoji1] + ":" + emojis[emoji2] + ":" + emojis[emoji3] + " \n---------------\n " + ":banana: :banana: :banana: <" + " \n---------------\n " + emojis[emoji4] + ":" + emojis[emoji5]+  ":" + emojis[emoji6] + " \n---------------\n ";
                message.channel.send(part)
             }
            else if(counter == 69)
             {
                var part1 =":slot_machine:  :slot_machine:  :slot_machine:" + " \n---------------\n " + emojis[emoji1] + ":" + emojis[emoji2] + ":" + emojis[emoji3] + " \n---------------\n " + ":tangerine: :banana: :tangerine: <" + " \n---------------\n " + emojis[emoji4] + ":" + emojis[emoji5]+  ":" + emojis[emoji6] + " \n---------------\n ";
                message.channel.send(part1)
             } else if(counter == 54 || counter == 29 || counter == 48 || counter == 65){
                var part2 = ":slot_machine:  :slot_machine:  :slot_machine:" + " \n---------------\n " + emojis[emoji1] + ":" + emojis[emoji2] + ":" + emojis[emoji3] + " \n---------------\n " + ":poop: :poop: :poop: <" + " \n---------------\n " + emojis[emoji4] + ":" + emojis[emoji5]+  ":" + emojis[emoji6] + " \n---------------\n ";
                message.channel.send(part2)
             } else {   for(var i1=1 ; i1<=3 ; i1++)
            {           
               var aux = Math.floor(Math.random() * emojis.length) ;
               var aux2 = Math.floor(Math.random() * emojis.length) ;
               var aux3 = Math.floor(Math.random() * emojis.length) ;
               parts[i1]=" \n---------------\n " + emojis[aux] + ":" + emojis[aux2]+ ":" + emojis[aux3];
            }
            message.channel.send(":slot_machine:  :slot_machine:  :slot_machine:" + parts[1] + parts[2] + "<" + parts[3] + "\n---------------")
            moneys=moneys-50;
        }

    }
}

module.exports = SlotsCommand;