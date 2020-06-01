
const Discord = require('discord.js');
const request = require("request");
const bot = new Discord.Client();
var fechaCS = new Date("May 26, 2020 20:00:00-05:00");
var fechaArkaWar = new Date("May 27, 2020 21:00:00-05:00");
var fechaIWC = new Date("May 31, 2020 20:00:00-05:00");

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

function getList(key, list) {
    var options = { method: 'GET',
    url: 'https://extendsclass.com/api/json-storage/bin/' + list,

    headers: 
    { 
        'cache-control': 'no-cache',
        'security-key': key,
        'content-type': 'application/x-www-form-urlencoded' } 
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

    return body;
}

bot.on("ready", function () {
	console.log("Ready to begin!")
    console.log(getList(bdadcec, JorgeEsGay))
});

bot.on("message", message => {
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

        case 'pong':
            message.reply("pongi me lo mama");
            break;

        case 'comoingresargremory':
            message.reply("3 cm o menos bb");
            break;

        case 'help':
            var response = "\n```- ping, pong, ayuda, goodbot, comoingresargremory, duqueesmarika, amyesmarika, ruleresmarika, arkanthosesmarika, rulozeroesmarika, magaoscuraesmarika // me obliga a decir huevadas\
                            \n- tiempoCS //reporta cuanto falta para el CS\
                            \n- tiempoArka //reporta cuanto falta para el Arka\
                            \n- tiempoIWC //reporta cuanto falta para el Ice Wind Castle \
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

        case 'arkanthosesmarika':
            message.reply("xd");
            break;

        case 'amyesmarika':
            message.reply("Si pero solo le gusta dar a los claymore.");
            break
            ;
        case 'rulozeroesmarika':
            message.reply("Si el es marika todos aca somos unas floresitas hermosas.");
            break;
        
        case 'magaoscuraesmarika':
            message.reply("Y tiene pene");
            break;

        case 'ruleresmarika':
            message.reply("Tu comentario mato a sebasvarg de reflejo");
            break;

        case 'tiempoCS':
            message.reply(showRemaining(fechaCS, 12096e5));
            break;

        case 'tiempoArka':
            message.reply(showRemaining(fechaArkaWar, 604800*1000));
            break;

        case 'tiempoIWC':
            message.reply(showRemaining(fechaIWC, 604800*1000));
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
