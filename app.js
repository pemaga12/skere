const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
var prefix = config.prefix;
var soundPrefix = config.soundPrefix;
var namePrefix = config.namePrefix;
var pollPrefix = config.pollPrefix;


client.on("ready", () => {
    console.log("venga crack, skere funciona!");
    client.user.setStatus("PLAYING");
    client.user.setActivity('Acariciar Gatitos')
    /*client.user.setPresence({
        game: {
            name: 'Perreo del duro',
            type: "STREAMING",
            url: "https://www.twitch.tv/monstercat"
        }
    }); */
 });

 client.on("message", (message) => {                            //Deteccion de mensajes
    
    if (message.author.bot) return;                             //Prevencion bucle infinito
   //if (!message.content.startsWith(prefix)) return;           //Prevencion bucle infinito
   
    unPrefixed(message);                                        //Conj unto de comandos que no necesitan prefijo

    if(message.author.tag == "Chocapic#4309" || message.author.tag == "pemaga12#3068"){             //Comandos policía  
        estebaranz(message);   
    } 
    
    if(message.content.startsWith(soundPrefix)){                    //Conjunto de comandos que empiezan con !sound
        sound(message);
    }

    else if(message.content.startsWith(namePrefix)){                     //Conjunto de comandos que empiezan con !name
        name(message);
    }

    else if(message.content.startsWith(pollPrefix)){
        poll(message);
    }

    else if (message.content.startsWith(prefix)){                        //Conjunto de comandos que comienzan con !prefix
        if (message.content.startsWith(prefix + "help")){
            const embed = new Discord.RichEmbed() 
            .setTitle("Lista de comandos generales")
            .setColor(0x00AE86)
            .setFooter("Desarrollado por pollazo S.L. ©", client.user.avatarURL)
            .addField("!canta", "Conjunto de comandos relacionados con sonidos.\n!sound help para más informacion.", true)
            .addField("!name", "Conjunto de comandos relacionados con los miembros del servidor.\n!name help para más información.", true)
            .addField("!skere vete", "En caso de que quieras privacidad.\nEl bot abandonará el canal de voz.", true)
            .addField("!skere donate", "Dame un euro, soy pobre.", true)
            message.channel.send({embed});
        }

        else if (message.content.startsWith(prefix + "donate")){
            var title = "Donaciones"; var desc = "Si me ha costado programar algunas partes del bot estás tu que voy a ser capaz de meter un apartado de donaciones";
            var foott = "(Si alguien quiere invitarme a un monster lo acepto :S) pollazo S.L. ©";
            sendMessage(message, title, desc, foott, null, null);
        }

        else if (message.content.startsWith(prefix + "vete")) { 
            let Canalvoz = message.member.voiceChannel;
            if (!Canalvoz) {
                message.channel.send('No estoy en un canal de voz, tonto. :unamused:');
            } else {
                message.channel.send(':unamused: | Me voy, pero ahora pienso montar mi propio servidor, con casinos, y furcias!').then(() => {
                Canalvoz.leave();
                }).catch(error => message.channel.send(error));
            }   
        }
    } 

 });
 
function estebaranz(message){                       //Comandos pertenecientes al rol "Policia"
    if(message.content.includes("detenido")){
            
        const embed = new Discord.RichEmbed() 
        .setTitle("Alto, policía")
        //.setColor(0xFABADA)
        .setDescription("Quedas detenido")
        .setFooter("Mensaje enviado por el alguacil", message.author.avatarURL)

        message.channel.send({embed});
        message.channel.send({
            file: "http://i.imgur.com/1jqqZa5.jpg" //Imagen
        }); 
        
        message.channel.send({
            file: "http://i.imgur.com/JDSsFn0.jpg" //Imagen
        }); 
    }

    else if(message.content.includes("la mejor")){
            
        const embed = new Discord.RichEmbed() 
        .setTitle("Es mi BAE")
        .setColor(0xFABADA)
        .setFooter("Mensaje enviado por el alguacil", message.author.avatarURL)

        message.channel.send({embed});
        message.channel.send({
            file: "http://i.imgur.com/uCohXG8.jpg" //Imagen
        }); 

    }

    else if(message.content.includes("ricardo")){
            
        const embed = new Discord.RichEmbed() 
        .setTitle("Alguien me ha llamado?")
        .setColor(0xFABADA)
        .setFooter("Mensaje enviado por el alguacil", message.author.avatarURL)

        message.channel.send({embed});
        message.channel.send({
            file: "https://media.tenor.com/images/ccf3069a295be08b371a9097841e4ec9/tenor.gif" //Imagen
        }); 

    }

    else if (message.content.startsWith(prefix + "fbi")) {
        var route = `C:/Users/pedro/Documents/Programacion/Skere/fuente/fbi.mp3`;
        var dialog = ':police_car:  | OPEN UP';
        connectVoice(message, route, dialog);
    }

    return null;
}

function forbidden(){                               //Se enviara un mensaje en caso de que un usuario use un comando al que no está autorizado
    const embed = new Discord.RichEmbed() 
            .setTitle("Ooops, parece que no puedes usar este comando")
            .setColor(0x328457)
            .setDescription("Si quieres crees que no es justo habla con " + config.IdOwner)
    
    return embed;
}

function unPrefixed(message){                       //Comandos sin prefijar
    if(message.content.includes("potoo")){
       
        const embed = new Discord.RichEmbed() 
        .setTitle("Ahi te va un pajarito cocainómano")
        .setColor(0xFABADA)
        .setDescription("")
        .setFooter("Los pajaros potoo y pollazo S.L. © dominarán el mundo", client.user.avatarURL)

        message.channel.send({embed});
        message.channel.send({
            file: "http://i.imgur.com/t7v7PlV.jpg" //Imagen
        });

    }

    if(message.content.includes("titi")){
            
        const embed = new Discord.RichEmbed() 
        .setTitle("Titis a la venta")
        .setColor(0xFABADA)
        .setDescription("Compra un titi, el mejor animal a la venta")
        .setFooter("Titi es vendido por pollazo S.L. ©", client.user.avatarURL)

        message.channel.send({embed});
        message.channel.send({
            file: "http://i.imgur.com/590SeEm.jpg" //Imagen
        });

    }
}

function sound(message){                            //Comandos encargados de reproducir sonidos
  
    
    if (message.content.startsWith(soundPrefix + "help")){
        
        const embed = new Discord.RichEmbed() 
        .setTitle("Lista de comandos para !canta ")
        .setColor(0x00AE86)
        .setFooter("Desarrollado por pollazo S.L. ©", client.user.avatarURL)
        .addField("skere", "Reproduce una bella cancion", true)
        .addBlankField(true)
        .addBlankField(true)
        .addField("pum", "Hizo pum", true)
        .addBlankField(true)
        .addField("rempalago", "Ustedes escucharon ese rempalago?", true)
        .addBlankField(true)
        .addField("sad","Solo apta para momentos tristes", true)
        .addBlankField(true)
        .addBlankField(true)
        .addField("roblox","UH", true)
        .addBlankField(true)
        .addBlankField(true)
        .addField("perdon","Me perdonas?", true)
        .addBlankField(true)
        .addBlankField(true)
        .addField("lazy","We are number one!", true)
        .addBlankField(true)
        .addBlankField(true)
        .addField("wii","Chill sound", true)
        .addBlankField(true)
        .addBlankField(true)
        .addField("malacaton",":peach: :peach:", true)
        .addField("mas comandos...","Además de estos existen aun más comandos, pero tendrás que encontrarlos!", true)
        message.channel.send({embed});
    }

    else if (message.content.startsWith(soundPrefix + "skere")){
        var route = `C:/Users/pedro/Documents/Programacion/Skere/fuente/skere.mp3`;
        var dialog = ':japanese_goblin:  | SKEREEEEEEEEE';
        connectVoice(message, route, dialog);
    }

    else if (message.content.startsWith(soundPrefix + "rempalago")) { 
            
        var route = `C:/Users/pedro/Documents/Programacion/Skere/fuente/rempalago.mp3`;
        var dialog =':zap: | Lo escucharon?';
        connectVoice(message, route, dialog);
    }

    else if (message.content.startsWith(soundPrefix + "pum")) { 
        
        var route = `C:/Users/pedro/Documents/Programacion/Skere/fuente/resplandor.mp3`;
        var dialog =':bomb: | Y hizo PUM!';
        connectVoice(message, route, dialog);
    }

    else if (message.content.startsWith(soundPrefix + "sad")) { 
       
        var route = `C:/Users/pedro/Documents/Programacion/Skere/fuente/sad.mp3`;
        var dialog =':sob: | Tocaré mi violín invisible';
        connectVoice(message, route, dialog);
    }

    else if (message.content.startsWith(soundPrefix + "huevos")) { 
    
        var route = `C:/Users/pedro/Documents/Programacion/Skere/fuente/huevos.mp3`;
        var dialog = ':egg: | Adri, no me cobres copyright plz :(';
        connectVoice(message, route, dialog);     
    }

    else if (message.content.startsWith(soundPrefix + "roblox")) { 
        
        var route = `C:/Users/pedro/Documents/Programacion/Skere/fuente/roblox.mp3`;
        var dialog = ':robot: | UHHHH';
        connectVoice(message, route, dialog);
    }

    else if (message.content.startsWith(soundPrefix + "lazy")) { 
        var route = `C:/Users/pedro/Documents/Programacion/Skere/fuente/lazy.mp3`;
        var dialog = ':one: | We are number one!!';
        connectVoice(message, route, dialog);
    }

    else if (message.content.startsWith(soundPrefix + "wii")) { 
        var route = `C:/Users/pedro/Documents/Programacion/Skere/fuente/wii.mp3`;
        var dialog = ':video_game: | Back to 2006';
        connectVoice(message, route, dialog);
    }

    else if (message.content.startsWith(soundPrefix + "papada")) { 
                   
        var route = `C:/Users/pedro/Documents/Programacion/Skere/fuente/papada.mp3`;
        var dialog = ':no_good: | El podeeer de la papadaaa';
        connectVoice(message, route, dialog);
    }


    else if (message.content.startsWith(soundPrefix + "derp")) { 
        
        var route = `C:/Users/pedro/Documents/Programacion/Skere/fuente/derp.mp3`;
        var dialog = ':no_good: | derp';
        connectVoice(message, route, dialog);
    }

    else if (message.content.startsWith(soundPrefix + "malacaton")) { 
        
        var route = `C:/Users/pedro/Documents/Programacion/Skere/fuente/malacaton.mp3`;
        var dialog = ':peach: | Wellington quiu';
        connectVoice(message, route, dialog);
    }

    else if (message.content.startsWith(soundPrefix + "perdon")) { 
        
        var route = `C:/Users/pedro/Documents/Programacion/Skere/fuente/perdonas.mp3`;
        var dialog = ':cat: | Me perdonas?';
        connectVoice(message, route, dialog);
    }
    
    else if (message.content.startsWith(soundPrefix + "fortnite")) { 

        var route = `C:/Users/pedro/Documents/Programacion/Skere/fuente/fortnite.mp3`;
        var dialog = ':bus: | Saltemos';
        connectVoice(message, route, dialog);
    }
}

function connectVoice(message, route, dialog){      //Función encargada de reproducir un sonido almacenado en el ordenador
    let Canalvoz = message.member.voiceChannel;
            if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
            } else if (message.guild.voiceConnection) {
                const dispatcher = message.guild.voiceConnection.playFile(route);
                message.channel.send(dialog);
            } else {
             message.channel.send('Conectando...').then(m => {
                  Canalvoz.join().then(() => {
                       m.edit(dialog).catch(error => message.channel.send(error));
                        const dispatcher = message.guild.voiceConnection.playFile(route);
                 }).catch(error => message.channel.send(error));
             }).catch(error => message.channel.send(error));
            }
}

function sendMessage(message, title, description, footer, col, footerIcon){     //Función encargada del envío de embeds
    if(col == null) col = ("0xFABADA");
    if(footerIcon == null) footerIcon = client.user.avatarURL;
    const embed = new Discord.RichEmbed() 
    .setTitle(title)
    .setColor(col)
    .setDescription(description)
    .setFooter(footer, footerIcon)
    message.channel.send({embed});   
}

function sendImage (message, fil){                                              //Función encargada del envío de archivos
    message.channel.send({
        file: fil //Imagen
    });
}

function name(message){                             //Comandos encargados de los nombres
    if(message.content.startsWith(namePrefix + "help")){
        const embed = new Discord.RichEmbed() 
        .setTitle("Lista de comandos para !name")
        .setColor(0x00AE86)
        .setFooter("Desarrollado por pollazo S.L. ©", client.user.avatarURL)
        .addField("pedro", "El amado dictador", true)
        .addBlankField(true)
        .addBlankField(true)
        .addField("raquel", "Mi waifu <3", true)
        .addBlankField(true)
        .addField("mauri", "Cuidado con este comando, es peligroso", true)
        .addBlankField(true) 
        .addField("dani", "Amante del fortnite, agregadle", true)
        .addBlankField(true)
        .addBlankField(true)
        .addField("estebaranz", "Escáner del grupo", true) 
        .addBlankField(true)
        .addBlankField(true)
        .addField("adri", "Tiene una extraña obsesión", true)
        .addBlankField(true)
        .addBlankField(true)
        .addField("alvaro", "El maestro", true)
        .addBlankField(true)
        .addField("?", "Existen más comandos (y aun faltan por venir), pero tendrás que averiguarlos")
        message.channel.send({embed});
    }
     
    else if(message.content.startsWith(namePrefix + "mauri")){
            
        var titulo = "Comando de mauri todopoderoso"; var desc = "Quien osa llamar al dios.\nComo penitencia deberás adorar su rastrillo o serás castigado..."; 
        var foot = "Este mensaje ha sido creado tipo por tipo pollazo S.L. ©, sabes?";
        sendMessage(message, titulo, desc, foot, null, null);
       
        var url = "http://i.imgur.com/mEPISi0.png";
        sendImage(message, url);
    }

    else if(message.content.startsWith(namePrefix + "alvaro")){
        
        var titulo = "Comando de Alvaro, un chico tranquilo"; var desc = "Capaz de robar carteles de mastercard.\nTiene un master en asistencia a clases de redes.\nAdemás, como se puede observar en la imagen es un chico muy tranquilo."; 
        var foot = "Mensaje generado por pollazo S.L. ©";
        sendMessage(message, titulo, desc, foot, null, null);
       
        var url = "http://i.imgur.com/sQ4tvB0.jpg";
        sendImage(message, url);
    }

    else if (message.content.startsWith(namePrefix + "pedro")){
        
        var titulo = "Comando de pedro, el dictador"; var desc = "Cuidado con este hombre.\nPuedes perder mucho ELO y acabar fusilado..."; 
        var foot = "Send nudes a pollazo S.L. ©";
        sendMessage(message, titulo, desc, foot, null, null);
       
        var url = "http://i.imgur.com/bJrYHr5.jpg";
        sendImage(message, url);
    }

    else if (message.content.startsWith(namePrefix + "dani")){
       
        var titulo = "Comando de dani, amante del fortnite"; var desc = "Agregadle al fortnite, ambos lo disfrutaréis"; 
        var foot = "Usad el codigo DANIOLO69HD. By pollazo S.L. ©"; var col = "0xFABADA";
        sendMessage(message, titulo, desc, foot, col, null);
       
        var url = "http://i.imgur.com/psokPUQ.png";
        sendImage(message, url);
    }

    else if (message.content.startsWith(namePrefix + "raquel")){
       
        var titulo = "Comando de raquel, la waifu"; var desc = "Pintora de la corte. Encargada de representar al dictador.\nBellas artes no daba para mucho mas."; 
        var foot = "Era bromi, no me dejes sin sexo by pollazo S.L. ©"; var col = "0x616814";
        sendMessage(message, titulo, desc, foot, col, null);
       
        var url = "http://i.imgur.com/sOHtEud.jpg";
        sendImage(message, url);
    }

    else if (message.content.startsWith(namePrefix + "estebaranz")){
        
        var titulo = "Comando de estebaranz, alias Laurita69HD"; var desc = "Si tienes algun documento que escanear mándaselo.\nAmante de Laurita69HD."; 
        var foot = "Afiliado con Epson. By pollazo S.L. ©"; var col = "0x328457";
        sendMessage(message, titulo, desc, foot, col, null);

        var url = "http://i.imgur.com/DZ2m8CS.jpg";
        sendImage(message, url);
    }

    else if (message.content.startsWith(namePrefix + "adri")){
        
        var titulo = "Comando de Adri"; var desc = "COMEDLE LOS HUEVOS.\nHIJOS DE PUTA."; 
        var col = "0x243523"; var foot = "Le gusta que le coman los huevos pero no el pollazo S.L. ©";
        sendMessage(message, titulo, desc, foot, col, null);

        var url = "http://i.imgur.com/cSJ8KBm.jpg";
        sendImage(message, url);
    }
    
    else if (message.content.startsWith(namePrefix + "?")){
        var titulo = "Tonto"; var desc = "Si has puesto el ? porque lo has visto el comando help, ? quiere decir que tienes que averiguar el comando.\nMenudo crack estás hecho.";
        var col = "0x1B95E0"; var foot = "Ya me jodería no haberme dado cuenta. By pollazo S.L. ©";
        sendMessage(message, titulo, desc, foot, col, null);
    }
}

function poll(message){                                  //Creación de encuestas

    const embed = new Discord.RichEmbed() 
    .setTitle("Encuesta:")
    .setColor("0xFF4500")
    .setDescription("\n" + message.content.split("!poll").pop() + "\n")
    .setFooter("Ecuesta creada por " + message.author.username, message.author.avatarURL)
    message.channel.send({embed})
    .then(function (message) {
        message.react("👍")
        message.react("👎")
        message.react("🤷")
        message.pin()
        //message.delete()
      }).catch(function() {
        console.log("Algo ha fallado al crear la encuesta");
       });

}

 client.login(config.token);                        

