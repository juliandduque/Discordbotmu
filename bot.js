const qs = require("querystring");
const Discord = require('discord.js');
const bot = new Discord.Client();
const Table = require('cli-table');
const fechaCS = new Date("March 20, 2022 18:00:00-05:00");
const fechaArkaWar = new Date("March 19, 2022 18:30:00-05:00");

function showRemaining(timeto, frequency) {

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

    var now = new Date();
    var distance = timeto - now;

    while (distance < 0) {
        distance += frequency  // + 2 weeks
    }

    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    return days + " dias, " + hours + " horas, " + minutes + " minutos, " + seconds + " segundos"
}

bot.on("ready", function () {
	console.log("Ready to begin!")
});

bot.on("message", message => {
    if (message.author.bot) return;

    if (message.content.indexOf('?') !== 0) return;
	
    let args = message.content.substring(1).split(' ')
    let command = args[0].toLowerCase();
	
    switch (command) 
    {
        case 'ping':
            message.reply("pong");
            break;
	    
	case 'bye':
	    message.reply("https://tenor.com/view/bye-slide-baby-later-peace-out-gif-12999722"); 
	    break

        case 'help':
            var helpresponse = "\n```- ping, pong, help, ayuda \
                            \n- tiempoCS, tiempoArka // reporta cuanto falta para el evento \
                            \n- darkness {server} // reporta la muerte del god y en 4 horas notifica \
                            \n- elite {server} // reporta la muerte de los elite y en 11 horas 55 min notifica```"
            message.reply(helpresponse); 
            break;
        
        case 'ayuda':
            message.reply("No, dilo en ingles");
            break;

        case 'tiempocs':
            message.reply(showRemaining(fechaCS, 12096e5));
            break;

        case 'tiempoarka':
            message.reply(showRemaining(fechaArkaWar, 604800*1000));
            break;
		    
        case 'darkness':
            
            let darknessserver = 1
            
            if (args.length > 1) darknessserver = args[1]
            
            message.reply('Muerte de God of Darkness reportada en server: ' + darknessserver);

            setTimeout(function () 
            {
		let darknessreturner = 'Ventana del God of darkness abierta por 2 horas @here';
                message.reply(darknessreturner);
            }, 14400000);
            
            break;
            
        case 'elite':
            
            let eliteserver = 1
            
            if (args.length > 1) eliteserver = args[1]

            message.reply('Muerte de Elites reportada en server: ' + eliteserver);

            setTimeout(function () 
            {
         	let elitereturner = 'Elites salen en 2 minutos @here'
                message.reply(elitereturner);
            }, 86400000);
            
            break; 
    }
      
});
            
           
bot.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
