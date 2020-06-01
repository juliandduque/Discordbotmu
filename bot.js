
const Discord = require('discord.js');

const bot = new Discord.Client();

bot.on("ready", function () {
	console.log("Ready to begin! Serving in " + bot.channels.length + " channels")
    console.log("checking for unfinished jobs");



});

bot.on("message", message => 
{
    if (message.author.bot) return;
	
    // The process.env.PREFIX is your bot's prefix in this case.
    if (message.content.indexOf('?') !== 0) return;
    
    var args = message.content.substring(1).split(' ')
    var command = args[0];
    
    switch (command) 
    {
        case 'ping':
            message.reply("pong");
            break;
        case 'goodbot':
            message.reply("la geta pirobo");
            break;
        case 'darkness':
            
            var server = 1
            
            if (args.length > 1)
            {
                server = args[1]
            }
            
             message.reply('Muerte de God of Darkness reportada en server: ' + server);

            setTimeout(function () 
            {
                message.reply(message, 'Ventana del god of darkness esta abierta por 2 horas en el server ' + server + ' @here');
            }, 14400000);
            
            break;
            
        case 'elite':
            
            var server = 1
            
            if (args.length > 1)
            {
                server = args[1]
            }
            
            message.reply('Muerte de God of Darkness reportada en server: ' + server);

            setTimeout(function () 
            {
                message.reply('Boss elite salen en 5 minutos en el server ' + server + ' @here');
            }, 43500000);
            
            break;  
            
    }
});

bot.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
