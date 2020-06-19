const qs = require("querystring");
const Discord = require('discord.js');
const bot = new Discord.Client();
const Table = require('cli-table');
const fechaCS = new Date("May 26, 2020 20:00:00-05:00");
const fechaArkaWar = new Date("May 27, 2020 21:00:00-05:00");
const fechaIWC = new Date("May 31, 2020 20:00:00-05:00");
const unban = new Date("June 30, 2020 00:00:00-05:00");
var razas = [ "SM", "BK", "ELF", "MG", "DL", "SUM", "RF", "RW", "SL", "GL" ]
var guilds = [ "GAMEOVER", "GREMORY", "GOLDCLAN"]
var esmarika = [
    "Si lo fuera me lo como",
    "la geta pirobo!",
    "y pollo, porque nuestros bks no pegan como los de alla?",
    "Si pero solo le gusta dar a los claymore",
    "xd",
    "no tan marika como perder el arka faltando 1 minuto",
    "no tan marika como usted",
    "rico",
    "ve a leviar pollo",
    "te has visto en el espejo?",
    "y lo tiene asi: (_o_)",
    "Si el es marika todos aca somos unas floresitas hermosas",
    "Tu comentario mato a sebasvarg de reflejo",
    "Mas marika que matar pollos en crywolf y que te baneen?",
    "ok, dense un beso"
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

bot.on("ready", function () {
	console.log("Ready to begin!")
});

bot.on("message", message => {

    if (message.author.bot) return;
    if (message.content.indexOf('?') !== 0) return;
    
    let args = message.content.substring(1).split(' ')
    let command = args[0].toLowerCase();

    if (command.includes('esmarika')){
        message.reply(esmarika[Math.floor(Math.random() * esmarika.length)]); 
	}
    if (command.includes('bye')){
	message.reply("https://tenor.com/view/bye-slide-baby-later-peace-out-gif-12999722"); 
	}
    switch (command) 
    {
        case 'ping':
            message.reply("pong");
            break;

        case 'pong':
            message.reply("pongi me lo mama");
            break;
		    
	case 'smfiru':
	    message.reply("Si nuestra alianza fuera un hombre, el seria el pene y las huevas.");
	    break
		    
        case 'comoingresargremory':
            message.reply("3 cm o menos bb");
            break;

        case 'help':
            var helpresponse = "\n```- ping, pong, help, ayuda, goodbot, comoingresargremory, *esmarika // me obliga a decir huevadas \
                            \n- tiempoCS, tiempoArka, tiempoIWC //reporta cuanto falta para el evento \
                            \n- lista {evento} // lista los participantes registrados para el evento \
                            \n- registrar {evento} {personaje} {raza} {radiance} {guild} // registra tu usuario al evento \
                            \n- darkness {server} //reporta la muerte del god y en 4 horas notifica \
                            \n- elite {server} //reporta la muerte de los elite y en 11 horas 55 min notifica```"
            message.reply(helpresponse); 
            break;
        
        case 'ayuda':
            message.reply("Te ayudare a aprender ingles, insecto.");
            break;

        case 'goodbot':
            message.reply("la geta pirobo");
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
		    
	case 'unbanthos':
            message.reply(showRemaining(unban, 12096e5));
            break;
	
	case 'unbanqueen':
            message.reply(showRemaining(unban, 12096e5));
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
        
        case 'lista':
	    message.reply('Enlisteme este pirobo} ');
	    return;
		    
            if (args.length < 2){
                message.reply('Usa este formato: lista {evento (cs, arka, iwc)} ');
                break;
            }

            let lista = args[1]
            let tabla = ''
            let body = '';
            let http = ''

            if (lista === 'cs') tabla = 'aadfacd'
            else if (lista === 'arka') tabla = 'abbfdfe'
            else if (lista === 'iwc') tabla = 'adedaff'
            else{
                message.reply('Solo se permite lista cs, arka, o iwc ');
                break;
            }

            http = require('http');

            let listarequest= http.get({
                host: 'extendsclass.com',
                path: '/jsonStorage.php?bin=' + tabla + ''+'?stuff='+ Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 8),
                headers: 
                { 
                    'security-key': 'JorgeEsGay'
                }
            }, function(response) {
                // Continuously update stream with data
                response.on('data', function(chunk) {
                    body += chunk;
                });
                response.on('end', function() {

                    // Data reception is done, do whatever with it!
                    console.log(body)
                    let parsedResponse = JSON.parse(body)
                    let tables = []

                    var table = ''
                    let counter = 0
                    for(let listkey in parsedResponse) 
                    {      
                        if(counter%10 === 0)
                        {
                            if (table)
                            {
                                tables.push(table.toString())
                            }

                            table = new Table({
                                head: ['Piloto', 'Personaje', 'Raza', 'Radiance', 'Guild']
                              , colWidths: [15, 15, 10, 15, 15]
                            });
						}

                        let personaje = parsedResponse[listkey]['personaje']
                        let raza = parsedResponse[listkey]['raza']
                        let guild = parsedResponse[listkey]['guild']
                        let radiance = parsedResponse[listkey]['radiance']
					    
                        table.push([listkey, personaje, raza, radiance, guild])
                        counter++;
				    }

                    tables.push(table.toString())

                    for(var responsetable in tables)
                    {
                        console.log(tables[responsetable])
                        message.reply("```" + tables[responsetable] + "```");
					}
                     message.reply("Total registrados: " + counter)
                });
            });
            listarequest.shouldKeepAlive = false
            break;
    
        case 'registrar':
            message.reply('en este momento estamos bajo mantenimiento');
	    return;
		    
            if (args.length < 6){
                console.log(args.length)
                message.reply('Usa este formato: registrar {evento} {personaje} {raza} {radiance} {guild}');
                break
            }
            
            let tabla2 = ''

            let lista2 = args[1].toLowerCase()
            if (lista2 === 'cs') tabla2 = 'aadfacd'
            else if (lista2 === 'arka') tabla2 = 'abbfdfe'
            else if (lista2 === 'iwc') tabla2 = 'adedaff'
            else{
                message.reply('Solo se permiten estos eventos: cs, arka, o iwc ');
                break;
            }

            let sender2 = message.author.username 
            let personaje2 = args[2]
            let raza2 = args[3].toUpperCase()
            let radiance2 = args[4].toLowerCase()
            let guild2 = args[5].toUpperCase()

            if( !razas.includes(raza2) ){
                message.reply('Solo se permiten estas razas: ' + razas.toString()) 
                break;
			}

            if( !guilds.includes(guild2) ){
                message.reply('Solo se permiten estas guilds: ' + guilds.toString())  
                break;
			}
            let options = {
                "method": "PATCH",
                "hostname": "extendsclass.com",
                "path": '/api/json-storage/bin/' + tabla2,
                "headers": 
                { 
                    'security-key': 'JorgeEsGay',
                    'Cache-Control': 'no-cache, no-store'
                }
            };
            let http2 = require('http');
            let req = http2.request(options, function (res) {

                let chunks = '';

                res.on("data", function (chunk) {
                    chunks += chunk;
                });

                res.on("end", function () {
                        console.log(chunks)
                        message.reply("Inscrito al evento: " + lista2);
                });
            });
            let randomdict = {}
            randomdict[sender2] = {
                "personaje": personaje2,
                "raza": raza2,
                "guild": guild2,
                "radiance": radiance2
			}

            req.write(JSON.stringify(randomdict));

            req.shouldKeepAlive = false;
            req.end();
    }
});
            
           
bot.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
