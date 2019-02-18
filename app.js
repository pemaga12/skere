const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");
//Prefijo
var prefix = config.prefix;



client.on("ready", () => {
    console.log("venga crack, skere funciona!");
    //client.user.setStatus("STREAMING");
    //client.user.setActivity('Acariciar Gatitos')
    client.user.setPresence({
        game: {
            name: 'Perreo del duro',
            type: "STREAMING",
            url: "https://www.twitch.tv/monstercat"
        }
    }); 
 });

 client.on("message", (message) => {                            //Deteccion de mensajes
    
    
    if (!message.content.startsWith(prefix)) return;            //Prevencion bucle infinito
    if (message.author.bot) return;                             //Prevencion bucle infinito
    
    if (message.content.startsWith(prefix)){

        if (message.content.startsWith(prefix + "help")){
            const embed = new Discord.RichEmbed() 
            .setTitle("Lista de comandos")
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
            .addBlankField(true)
            .addField("canta", "Reproduce una bella cancion", true)
            .addBlankField(true)
            .addBlankField(true)
            .addField("?", "hizo pum", true)
            .addBlankField(true)
            .addField("?", "ustedes escucharon ese rempalago?", true)



            message.channel.send({embed});
        }

        else if(message.content.startsWith(prefix + "mauri")){
            
            const embed = new Discord.RichEmbed() 
            .setTitle("Comando de mauri todopoderoso")
            .setColor(0xFABADA)
            .setDescription("Quien osa llamar al dios.\nComo penitencia deberás adorar su rastrillo o serás castigado...")
            .setFooter("Este mensaje ha sido creado tipo por tipo pollazo S.L. ©, sabes?", client.user.avatarURL)
    
            message.channel.send({embed});
            message.channel.send({
                file: "http://i.imgur.com/mEPISi0.png" //Imagen
            });

        }

        else if(message.content.startsWith(prefix + "alvaro")){
            
            const embed = new Discord.RichEmbed() 
            .setTitle("Comando de Alvaro, un chico tranquilo")
            .setColor(0xFABADA)
            .setDescription("Capaz de robar carteles de mastercard.\nTiene un master en asistencia a clases de redes.\nAdemás, como se puede observar en la imagen es un chico muy tranquilo.")
            .setFooter("Mensaje generado por pollazo S.L. ©", client.user.avatarURL)
    
            message.channel.send({embed});
            message.channel.send({
                file: "http://i.imgur.com/sQ4tvB0.jpg" //Imagen
            });

        }

        else if (message.content.startsWith(prefix + "pedro")){
            const embed = new Discord.RichEmbed() 
            .setTitle("Comando de pedro, el dictador")
            .setColor(0xFABADA)
            .setDescription("Cuidado con este hombre.\nPuedes perder mucho ELO y acabar fusilado...")
            .setFooter("Send nudes a pollazo S.L. ©", client.user.avatarURL)
    
            message.channel.send({embed});

            message.channel.send({
                file: "http://i.imgur.com/bJrYHr5.jpg" //Imagen
            });
        }

        else if (message.content.startsWith(prefix + "dani")){
            const embed = new Discord.RichEmbed() 
            .setTitle("Comando de dani, amante del fortnite")
            .setColor(0xFABADA)
            .setDescription("Agregadle al fortnite, ambos lo disfrutaréis")
            .setFooter("Usad el codigo DANIOLO69HD. By pollazo S.L. ©", client.user.avatarURL)
    
            message.channel.send({embed});

            message.channel.send({
                file: "http://i.imgur.com/psokPUQ.png" //Imagen
            });
        }

        else if (message.content.startsWith(prefix + "raquel")){
            const embed = new Discord.RichEmbed() 
            .setTitle("Comando de raquel, la waifu")
            .setColor(0x616814)
            .setDescription("Pintora de la corte. Encargada de representar al dictador.\nBellas artes no daba para mucho mas.")
            .setFooter("Era bromi, no me dejes sin sexo by pollazo S.L. ©", client.user.avatarURL)
    
            message.channel.send({embed});

            message.channel.send({
                file: "http://i.imgur.com/sOHtEud.jpg" //Imagen
            });
        }

        else if (message.content.startsWith(prefix + "estebaranz")){
            const embed = new Discord.RichEmbed() 
            .setTitle("Comando de estebaranz, alias Laurita69HD")
            .setColor(0x328457)
            .setDescription("Si tienes algun documento que escanear mándaselo.\nAmante de Laurita69HD.")
            .setFooter("Afiliado con Epson. By pollazo S.L. ©", client.user.avatarURL)
    
            message.channel.send({embed});

            message.channel.send({
                file: "http://i.imgur.com/DZ2m8CS.jpg" //Imagen
            });
        }

        else if (message.content.startsWith(prefix + "adri")){
            const embed = new Discord.RichEmbed() 
            .setTitle("Comando de adri")
            .setColor(0x243523)
            .setDescription("COMEDLE LOS HUEVOS.\nHIJOS DE PUTA.")
            .setFooter("Le gusta que le coman los huevos pero no el pollazo S.L. ©", client.user.avatarURL)
    
            message.channel.send({embed});
            message.channel.send({
                file: "http://i.imgur.com/cSJ8KBm.jpg" //Imagen
            });
        }

        else if (message.content.startsWith(prefix + "canta")) { 
            let Canalvoz = message.member.voiceChannel;
            if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
            } else if (message.guild.voiceConnection) {
                const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/skere.mp3`);
                message.channel.send(':japanese_goblin:  | SKEREEEEEEEEE');
            } else {
             message.channel.send('Conectando...').then(m => {
                  Canalvoz.join().then(() => {
                       m.edit(':japanese_goblin:  | SKEREEEEEEEEE').catch(error => message.channel.send(error));
                        const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/skere.mp3`);
                 }).catch(error => message.channel.send(error));
             }).catch(error => message.channel.send(error));
            }
        }

        else if (message.content.startsWith(prefix + "rempalago")) { 
            let Canalvoz = message.member.voiceChannel;
            if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
            } else if (message.guild.voiceConnection) {
                const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/rempalago.mp3`);
                message.channel.send(':zap:  | Lo escucharon?');
            } else {
             message.channel.send('Conectando...').then(m => {
                  Canalvoz.join().then(() => {
                       m.edit(':zap:  | Lo escucharon?').catch(error => message.channel.send(error));
                        const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/rempalago.mp3`);
                 }).catch(error => message.channel.send(error));
             }).catch(error => message.channel.send(error));
            }
        }

        else if (message.content.startsWith(prefix + "pum")) { 
            let Canalvoz = message.member.voiceChannel;
            if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
            } else if (message.guild.voiceConnection) {
                const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/resplandor.mp3`);
                message.channel.send(':bomb: | Y hizo PUM!');
            } else {
             message.channel.send('Conectando...').then(m => {
                  Canalvoz.join().then(() => {
                       m.edit(':bomb: | Y hizo PUM!').catch(error => message.channel.send(error));
                        const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/resplandor.mp3`);
                 }).catch(error => message.channel.send(error));
             }).catch(error => message.channel.send(error));
            }
        }

        else if (message.content.startsWith(prefix + "sad")) { 
            let Canalvoz = message.member.voiceChannel;
            if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
            } else if (message.guild.voiceConnection) {
                const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/sad.mp3`);
                message.channel.send(':sob: | Tocaré mi violín invisible');
            } else {
             message.channel.send('Conectando...').then(m => {
                  Canalvoz.join().then(() => {
                       m.edit(':sob: | Tocaré mi violín invisible').catch(error => message.channel.send(error));
                        const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/sad.mp3`);
                 }).catch(error => message.channel.send(error));
             }).catch(error => message.channel.send(error));
            }
        }

        else if (message.content.startsWith(prefix + "huevos")) { 
            let Canalvoz = message.member.voiceChannel;
            if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
            } else if (message.guild.voiceConnection) {
                const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/huevos.mp3`);
                message.channel.send(':egg: | Adri, no me cobres copyright plz :(');
            } else {
             message.channel.send('Conectando...').then(m => {
                  Canalvoz.join().then(() => {
                       m.edit(':egg: | Adri, no me cobres copyright plz :(').catch(error => message.channel.send(error));
                        const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/huevos.mp3`);
                 }).catch(error => message.channel.send(error));
             }).catch(error => message.channel.send(error));
            }
        }

        else if (message.content.startsWith(prefix + "roblox")) { 
            let Canalvoz = message.member.voiceChannel;
            if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
            } else if (message.guild.voiceConnection) {
                const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/roblox.mp3`);
                message.channel.send(':robot: | UHHHH');
            } else {
             message.channel.send('Conectando...').then(m => {
                  Canalvoz.join().then(() => {
                       m.edit(':robot: | UHHHH').catch(error => message.channel.send(error));
                        const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/roblox.mp3`);
                 }).catch(error => message.channel.send(error));
             }).catch(error => message.channel.send(error));
            }
        }

        
        else if (message.content.startsWith(prefix + "lazy")) { 
            let Canalvoz = message.member.voiceChannel;
            if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
            } else if (message.guild.voiceConnection) {
                const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/lazy.mp3`);
                message.channel.send(':one: | We are number one!!');
            } else {
             message.channel.send('Conectando...').then(m => {
                  Canalvoz.join().then(() => {
                       m.edit(':one: | We are number one!!').catch(error => message.channel.send(error));
                        const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/lazy.mp3`);
                 }).catch(error => message.channel.send(error));
             }).catch(error => message.channel.send(error));
            }
        }

        else if (message.content.startsWith(prefix + "wii")) { 
            let Canalvoz = message.member.voiceChannel;
            if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
            } else if (message.guild.voiceConnection) {
                const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/wii.mp3`);
                message.channel.send(':video_game: | Back to 2006');
            } else {
             message.channel.send('Conectando...').then(m => {
                  Canalvoz.join().then(() => {
                       m.edit(':video_game: | Back to 2006').catch(error => message.channel.send(error));
                        const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/wii.mp3`);
                 }).catch(error => message.channel.send(error));
             }).catch(error => message.channel.send(error));
            }
        }

        else if (message.content.startsWith(prefix + "papada")) { 
            let Canalvoz = message.member.voiceChannel;
            if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
            } else if (message.guild.voiceConnection) {
                const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/papada.mp3`);
                message.channel.send(':no_good: | El podeeer de la papadaaa');
            } else {
             message.channel.send('Conectando...').then(m => {
                  Canalvoz.join().then(() => {
                       m.edit(':no_good: | El podeeer de la papadaaa').catch(error => message.channel.send(error));
                        const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/papada.mp3`);
                 }).catch(error => message.channel.send(error));
             }).catch(error => message.channel.send(error));
            }
        }


        else if (message.content.startsWith(prefix + "derp")) { 
            let Canalvoz = message.member.voiceChannel;
            if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
            } else if (message.guild.voiceConnection) {
                const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/derp.mp3`);
                message.channel.send(':no_good: | derp');
            } else {
             message.channel.send('Conectando...').then(m => {
                  Canalvoz.join().then(() => {
                       m.edit(':no_good: | derp').catch(error => message.channel.send(error));
                        const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/derp.mp3`);
                 }).catch(error => message.channel.send(error));
             }).catch(error => message.channel.send(error));
            }
        }

        
        else if (message.content.startsWith(prefix + "malacaton")) { 
            let Canalvoz = message.member.voiceChannel;
            if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
            } else if (message.guild.voiceConnection) {
                const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/malacaton.mp3`);
                message.channel.send(':peach: | Wellington quiu');
            } else {
             message.channel.send('Conectando...').then(m => {
                  Canalvoz.join().then(() => {
                       m.edit(':peach: | Wellington quiu').catch(error => message.channel.send(error));
                        const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/malacaton.mp3`);
                 }).catch(error => message.channel.send(error));
             }).catch(error => message.channel.send(error));
            }
        }

        else if (message.content.startsWith(prefix + "perdon")) { 
            let Canalvoz = message.member.voiceChannel;
            if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
            } else if (message.guild.voiceConnection) {
                const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/perdonas.mp3`);
                message.channel.send(':cat: | Me perdonas?');
            } else {
             message.channel.send('Conectando...').then(m => {
                  Canalvoz.join().then(() => {
                       m.edit(':cat: | Me perdonas?').catch(error => message.channel.send(error));
                        const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/perdonas.mp3`);
                 }).catch(error => message.channel.send(error));
             }).catch(error => message.channel.send(error));
            }
        }
        
        else if (message.content.startsWith(prefix + "fortnite")) { 
            let Canalvoz = message.member.voiceChannel;
            if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
            } else if (message.guild.voiceConnection) {
                const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/fortnite.mp3`);
                message.channel.send(':bus: | Saltemos');
            } else {
             message.channel.send('Conectando...').then(m => {
                  Canalvoz.join().then(() => {
                       m.edit(':bus: | Saltemos').catch(error => message.channel.send(error));
                        const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/fortnite.mp3`);
                 }).catch(error => message.channel.send(error));
             }).catch(error => message.channel.send(error));
            }
        }

        else if (message.content.startsWith(prefix + "fbi")) { 
            let Canalvoz = message.member.voiceChannel;
            if (!Canalvoz || Canalvoz.type !== 'voice') {
            message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
            } else if (message.guild.voiceConnection) {
                const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/fbi.mp3`);
                message.channel.send(':police_car:  | OPEN UP');
                message.channel.send({
                    file: "http://i.imgur.com/HpGOuYV.mp4" //Imagen
                });
            } else {
             message.channel.send('Conectando...').then(m => {
                  Canalvoz.join().then(() => {
                       m.edit(':police_car:  | OPEN UP').catch(error => message.channel.send(error));
                        const dispatcher = message.guild.voiceConnection.playFile(`C:/Users/pedro/Documents/Programacion/Skere/fuente/fbi.mp3`);
                        message.channel.send({
                            file: "http://i.imgur.com/HpGOuYV.mp4" //Imagen
                        });
                 }).catch(error => message.channel.send(error));
             }).catch(error => message.channel.send(error));
            }
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

        else if (message.content.startsWith(prefix + "?")){
            const embed = new Discord.RichEmbed() 
            .setTitle("Tonto")
            .setColor(0x1B95E0)
            .setDescription("Si has puesto el ? porque lo has visto el comando help, ? quiere decir que tienes que averiguar el comando.\nMenudo crack estás hecho.")
            .setFooter("Ya me jodería no haberme dado cuenta. By pollazo S.L. ©", client.user.avatarURL)
    
            message.channel.send({embed});
        }
    } 

 });
 
 client.login(config.token); 

//1.0 en documentos