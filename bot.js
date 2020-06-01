var Discord = require('discord.io');

// Initialize Discord Bot
var bot = new Discord.Client();

bot.on("ready", function () {
	console.log("Ready to begin! Serving in " + bot.channels.length + " channels");
});

client.on("message", message => 
{
    if (message.author.bot) return;

    // The process.env.PREFIX is your bot's prefix in this case.
    if (message.content.indexOf('!') !== 0) return;
    
    var args = message.content.substring(1).split(' ')
    var command = args[0];
    
    switch (command) 
    {
        case 'ping':
            bot.reply(message, "pong");
            break;
            
        case 'god of darkness':
            
            var server = 1
            
            if (args.length > 2)
            {
                server = args[1]
            }
            
            bot.reply(message, 'Muerte de God of Darkness reportada en server: ' + server);

            setTimeout(function () 
            {
                bot.reply(message, 'Ventana del god of darkness esta abierta por 2 horas en el server ' + server + ' @here');
            }, 14400000);
            
            break;
            
        case 'elite':
            
            var server = 1
            
            if (args.length > 2)
            {
                server = args[1]
            }
            
            bot.reply(message, 'Muerte de God of Darkness reportada en server: ' + server);

            setTimeout(function () 
            {
                bot.reply(message, 'Mounstros elite salen en 5 minutos en el server ' + server + ' @here');
            }, 43500000);
            
            break;  
            
    }
});

client.login();
