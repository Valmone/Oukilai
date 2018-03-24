
const Discord = require("discord.js");
const bot = new Discord.Client();
var fs = require("fs");

eval(fs.readFileSync('tools.js')+'');

var request = require("request"),
    cheerio = require("cheerio"),
    urlid = ".ogame.gameforge.com/api/players.xml";
    urlcolo = ".ogame.gameforge.com/api/playerData.xml?id=";






bot.on("ready", () => {
  console.log("I am ready!");
  bot.user.setActivity('rien du tout | _help');
});

const prefix = "_";

bot.on("message", (message) => {

	if (!message.content.startsWith(prefix)) return;

  	if (message.content.startsWith(prefix + "ping"))	{
	    	message.channel.send("pong!");
		} else	

	if (message.content.startsWith(prefix + "help"))	{
	    	message.reply("```\n_ping\n_ogame```");//\nSupport: https://discord.gg/BZgWM5v
		} else

	if (message.content.startsWith(prefix + "ogame"))
		{

			var split = message.content.split(" "),
	        name = split[1],
	        uni = split[2],
	        pays = split[3];

	        setTimeout(rien, 1000);
	        function rien(){
	        	console.log('première pause');
	        }
	        

		    if((uni === '1') || (uni === '10') || (uni === '40') || (uni === '50') || (uni === '67') || (uni === '79') || (uni === '82'))
		    	{uni = uni;}
	        else if (((uni !== '1') || (uni !== '10') || (uni !== '67')) && (pays === 'fr'))
		        {uni = unifr(uni);}
		    else if (((uni !== '1')) && (pays === 'dk'))
		        {uni = unidk(uni);}
		    else if (((uni !== '1') || (uni !== '79') || (uni !== '82')) && (pays === 'de'))
		        {uni = unide(uni);}
		    else if (((uni !== '1') || (uni !== '50')) && (pays === 'es'))
		        {uni = unies(uni);}
		    else if (((uni !== '1') || (uni !== '40')) && (pays === 'it'))
		        {uni = uniit(uni);}
		    else if (((uni !== '3')) && (pays === 'nl'))
		        {uni = uninl(uni);}
		    else if (((uni !== '68')) && (pays === 'pl'))
		        {uni = unipl(uni);}
		    else if (((uni !== '25')) && (pays === 'pt'))
		        {uni = unipt(uni);}
		    else if (((uni !== '1')) && (pays === 'ro'))
		        {uni = uniro(uni);}
		    else if (((uni !== '1') || (uni !== '50')) && (pays === 'tr'))
		        {uni = unitr(uni);}
		    else if (((uni !== '1')) && (pays === 'us'))
		        {uni = unius(uni);}
		    else if (((uni !== '1')) && (pays === 'gr'))
		        {uni = unigr(uni);}
		    else if (((uni !== '1')) && (pays === 'ru'))
		        {uni = uniru(uni);}
		    else if (((uni !== '1')) && (pays === 'en'))
		        {uni = unien(uni);}
		    else if (pays === 'ar')
		        {uni = uniar(uni);}
		    else if (pays === 'br')
		        {uni = unibr(uni);}
		    else if (pays === 'hr')
		        {uni = unihr(uni);}
		    else if (pays === 'hu')
		        {uni = unihu(uni);}
		    else if (pays === 'mx')
		        {uni = unimx(uni);}
		    else if (pays === 'no')
		        {uni = unino(uni);}
		    else if (pays === 'si')
		        {uni = unisi(uni);}
		    else if (pays === 'sk')
		        {uni = unisk(uni);}
		    else if (pays === 'fi')
		        {uni = unifi(uni);}
		    else if (pays === 'tw')
		        {uni = unitw(uni);}
		    else if (pays === 'jp')
		        {uni = unijp(uni);}
		    else {}

		    setTimeout(rien2, 1000);
	        function rien2(){
	        	console.log('deuxième pause');
	        }

	        urlid = 'https://s' + uni + '-' + pays + ".ogame.gameforge.com/api/players.xml",
	        urlcolo = 'https://s' + uni + '-' + pays + ".ogame.gameforge.com/api/playerData.xml?id=";
			
			if ((name) && (uni !== 'error') && (pays))
				{
					request(urlid, function (error, response, html) {
					    if (!error)
					    	{
					            var $ = cheerio.load(html),
						       	data = $("[name^=" + name + "]").attr('id'),
						       	status = $("[name^=" + name + "]").attr('status');
						       	if (status === 'a') {status = 'Administrateur';}
						       	else if (status === 'i') {status = ' -> Inactif 7 jours <-';}
						       	else if (status === 'I') {status = ' -> Inactif 28 jours <-';}
						       	else if (status === 'v') {status = ' -> Mode Vacances <-';}
						       	else if (status === 'b') {status = ' -> Bloqué <-';}
						       	else if (status === 'vi') {status = ' -> Mode Vacances | Inactif 7 jours <-';}
						       	else if (status === 'vI') {status = ' -> Mode Vacances | Inactif 28 jours <-';}
						       	else if (status === 'vib') {status = ' -> Bloqué | Mode Vacances | Inactif 7 jours <-';}
						       	else if (status === 'vIb') {status = ' -> Bloqué | Mode Vacances | Inactif 28 jours <-';}
						       	else{status = '';}
						        					        
						        if (data)
						        	{
								        data = urlcolo + data;
								        request(data, function (error, response, html) {
										    if (!error) 
										   		{
											    	var $ = cheerio.load(html),
											    	taille = $('planets planet').length,
											    	toppoint = $("position").eq('0').text(),
											        topeco = $("position").eq('1').text(),
											        toptechno = $("position").eq('2').text(),
											        topmili = $("position").eq('3').text(),
											        nbrfleet = $("position").eq('3').attr('ships');
											    	i = 0;
											    	result = '';

											    	if (nbrfleet)
												    	{
												    		taillenbrfleet = nbrfleet.length;
															if (taillenbrfleet > 6)
															    {
															    	nbrfleet1 = nbrfleet.slice(-3);
															    	nbrfleet2 = nbrfleet.slice(-6, -3);
															    	nbrfleet3 = nbrfleet.slice(-99, -6);
															        nbrfleet = nbrfleet3 + '.' + nbrfleet2 + '.' + nbrfleet1;
															    }
														    else if (taillenbrfleet > 3)
															    {
															       	nbrfleet1 = nbrfleet.slice(-3);
															    	nbrfleet2 = nbrfleet.slice(-6, -3);
															        nbrfleet = nbrfleet2 + '.' + nbrfleet1;
														    	}
														    else {}
												    	}
											    	else {}
											    	
											    	if (nbrfleet !== '')
												    	{
												    		while(i < taille)
														    	{
														    		result1 = $("planet").eq(i).attr('name'); 
															        result2 = $("planet").eq(i).attr('coords');
															        result_a = 'Planète: \t' + result2 + ' ->  ' + result1 + '\n';

															        result3 = $("planet").eq(i).children('moon').attr('name'); 
															        result4 = $("planet").eq(i).children('moon').attr('size');
															        if (result3)
																        {
																        	result_b = 'Lune:    \t' + result2 + ' ->  ' + result3 + ' (' + result4 + ' km)\n\n';
																        }
																	else{ result_b = '\n';}
															        i++;
															        result = result + result_a + result_b;
														    	}
												    	}
												    else{}
											    	
													message.channel.send('```' + 'Liste des Planètes et Lunes de \'' + name + '\'' + status + '\n\tTop ' + toppoint + ' General\n' + '\tTop ' + topeco + ' Eco\n' + '\tTop ' + toptechno + ' Recherche\n' + '\tTop ' + topmili + ' Militaire\t-> ' + nbrfleet + ' Vaisseaux\n' + '\n\n' + result + '```');
												}
											else
												{
											        console.log("Erreur : " + error);
												}
										});
									}
						    	else if(!data)
						    		{
						    			message.channel.send("```Erreur, le joueur n'existe pas\n_help pour plus d\'informations```");
						    		}
						    	else {}

					        //console.log(data);
			    			}
			    		else
					    	{
						        console.log("Erreur : " + error);
					    	}
					});		
				}
			else if (uni === 'error')
				{
					message.channel.send('```_help pour plus d\'informations```')
				}
			else
				{  
					message.channel.send("```\n_ogame [pseudo] [uni] [pays]\n\n[pseudo] -> uniquement le premier mot si il contient des espaces\n[uni]    -> en toute lettre sauf pour les uni à chiffre où seulement ce dernier suffit\n[pays]   -> fr, en, us, ...```");
				}
		}

});

bot.login(process.env.TOKEN);
