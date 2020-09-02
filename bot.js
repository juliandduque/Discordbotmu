const qs = require("querystring");
const Discord = require('discord.js');
const bot = new Discord.Client();
const Table = require('cli-table');
const fechaCS = new Date("May 26, 2020 20:00:00-05:00");
const fechaArkaWar = new Date("May 27, 2020 21:00:00-05:00");
const fechaIWC = new Date("May 31, 2020 20:00:00-05:00");

var picabot = [
    "https://media.discordapp.net/attachments/621481989945425922/723576706870280242/image0.png",
    "ok",
    "si",
    "?",
    "no gracias",
    "Picahielo entered the game",
    "Porque hablan tanto sobre mi?",
    "hay dias que si",
    "Tu comentario mato a RuIer de reflejo",
    "Tu comentario hizo que banearan a BoaHancock",
    "Tu comentario hizo que banearan a Charmander",
    "Tu comentario hizo que squirtle tepeara",
    "Picabot killed BrianV in ferea",
    "Asi como perder el arka en 1 minuto",
    "Ahora vete y has un nuevo comienzo luego unete a voga",
    "mas bien, preguntate porque nuestro master abusa de nuestro bienestar",
    "como entro chou a la guild?"
]
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

//const lickingeggplant = bot.emojis.get("746928250328186981");
//const laura = bot.emojis.get("746928289473363968");

bot.on("ready", function () {
	console.log("Ready to begin!")
});

bot.on("message", message => {
    if (message.author.bot) return;

    if (message.content.toLowerCase().includes('picabot')){ message.reply(picabot[Math.floor(Math.random() * picabot.length)]);
    } 
    if (message.content.indexOf('?') !== 0) return;
	
    let args = message.content.substring(1).split(' ')
    let command = args[0].toLowerCase();

    if (command.includes('esmarika')){
        message.reply(esmarika[Math.floor(Math.random() * esmarika.length)]); 
	}
	
    switch (command) 
    {
        case 'ping':
            message.reply("pong");
            break;

        case 'pong':
            message.reply("Pongi me lo mama");
            break;
	
	case 'bye':
	    message.reply("https://tenor.com/view/bye-slide-baby-later-peace-out-gif-12999722"); 
	    break
		    

        case 'help':
            var helpresponse = "\n```- ping, pong, help, ayuda, bye \
                            \n- tiempoCS, tiempoArka, tiempoIWC //reporta cuanto falta para el evento \
                            \n- darkness {server} //reporta la muerte del god y en 4 horas notifica \
                            \n- elite {server} //reporta la muerte de los elite y en 11 horas 55 min notifica```"
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

        case 'tiempoiwc':
            message.reply(showRemaining(fechaIWC, 604800*1000));
            break;
		    
        case 'darkness':
            
            let darknessserver = 1
            
            if (args.length > 1) darknessserver = args[1]
            
            message.reply('Muerte de God of Darkness reportada en server: ' + darknessserver);

            setTimeout(function () 
            {
		let darknessreturner = 'Ventana del GOD abierta por 2 horas @here';
                message.reply(darknessreturner);
            }, 14400000);
            
            break;
            
        case 'elite':
            
            let eliteserver = 1
            
            if (args.length > 1) eliteserver = args[1]

            message.reply('Muerte de Elites reportada en server: ' + eliteserver);


            setTimeout(function () 
            {
         	let elitereturner = 'Elites salen en 5 minutos @here'
                message.reply(elitereturner);
            }, 43500000);
            
            break; 
        
      
});
            
           
bot.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
