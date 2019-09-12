const commando = require('discord.js-commando');
const discord = require('discord.js');

class CommandsHelpCommand extends commando.Command{
    constructor(client)
    {
        super(client,{
            name: 'hc',
            group: 'simple',
            memberName: 'hc',
            description: 'It helps you when you need help.'
        })
    }

    async run(message, args)
    {          var myInfo = new discord.RichEmbed()
               .setTitle("Commands Help")
               .addField("Coin Flip","`$flip` - Flip the coin.", true)
               .addField("Dice Roll","`$dice` - Roll the dice until you die.", true)
               .addField("Help","`$help` - Helps you when you need help.", true)
               .addField("Join voice channel","`$invocation` - Joins the channel you are.", true)
               .addField("Play","`$play` - Also join the channel you are, but playing music", true)
               .addField("Leave voice channel","`$pute a fraier` - Leaves the channel", true)
               .addField("WORKING AT","`$slots` - If you are lucky, play at slots.", )
               .setColor('GOLD')

            message.channel.send(myInfo);
    }
}

module.exports = CommandsHelpCommand;