
const Discord = require('discord.js');
const bot = new Discord.Client();
var fechaCS = new Date("June 9, 2020 21:00:00");

 function showRemaining(timeto) {
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;
    var now = new Date();
    var distance = fechaCS - now;

    if (distance < 0) {
        return 'expired'
    }

    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    return days + " dias, " + hours + " horas, " + minutes + " minutos, " + seconds + " segundos"
 }


bot.on("ready", function () {
	console.log("Ready to begin! Serving in " + bot.channels.length + " channels")
    console.log("checking for unfinished jobs");
    console.log(showRemaining(fechaCS));

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

        case 'help':
            var response = "\n```- ping, ayuda, goodbot,duqueesmarika // me obliga a decir huevadas\
                            \n- darkness {server} //reporta la muerte del god y en 4 horas sale mensaje de ventana abierta\
                            \n- elite {server} //reporta la muerte de los elite y en 11 horas 55 min horas avisa que van a salir```"
            message.reply(response); 
            break;
        
        case 'ayuda':
            message.reply("Te ayudare a aprender ingles, insecto.");
            break;

        case 'goodbot':
            message.reply("la geta pirobo");
            break;

        case 'duqueesmarika':
            message.reply("Si lo fuera me lo como.");
            break;

        case 'amyesmarika':
            message.reply("Si pero solo le gusta dar a los claymore.");
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
            
            message.reply('Muerte de Elites reportada en server: ' + server);

            setTimeout(function () 
            {
                message.reply('Elites salen en 5 minutos en el server ' + server + ' @here');
            }, 43500000);
            
            break;  
            
    }
});

bot.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
