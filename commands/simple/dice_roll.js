const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command{
    constructor(client)
    {
        super(client,{
            name: 'dice',
            group: 'simple',
            memberName: 'dice',
            description: 'Roll the dice until you die.'
        })
    }

    async run(message, args)
    {
        var diceRoll = Math.floor(Math.random() * 6) + 1;
        //message.reply(" a picat " + diceRoll);
        switch (diceRoll) {
            case 1: message.channel.send("A picat 1",{
             file:'./images/dice_1-512.png'
            })
            break;
            case 2: message.channel.send("A picat 2",{
                file:'./images/dice_2-512.png'
               })
            break;
            case 3: message.channel.send("A picat 3",{
                file:'./images/dice_3-512.png'
               })
            break;
            case 4: message.channel.send("A picat 4",{
                file:'./images/dice_4-512.png'
               })
            break;
            case 5: message.channel.send("A picat 5",{
                file:'./images/dice_5-512.png'
               })
            break;
            case 6: message.channel.send("A picat 6",{
                file:'./images/dice_6-512.png'
               })
            break;
        
        }
    }
}


module.exports = DiceRollCommand;