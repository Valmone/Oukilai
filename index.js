



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

	if (!message.author.bot)
		{
			
			if (message.mentions.users.first() === bot.users.get('426421711152349185'))	{
			  		message.delete();
			  		message.channel.send({embed: {
						color: 	2551650,
						title: 'Oukilai',
						description: 'Merci de m\'avoir invité sur votre chan discord.\nPour avoir la liste des commandes: _help\nMerci aussi de faire remonter le moindre problème avec _support.'
					}});
				} else

			if (message.content.startsWith(prefix + "ping"))	{
			    	message.channel.send("pong!");
				} else	

			if (message.content.startsWith(prefix + "support"))	{
			    	message.delete();
			    	message.channel.send({embed: {
						color: 	2551650,
						title: 'Support',
						description: 'Merci de faire remonter le moindre problème.\nSi vous souhaitez participer au développement du bot, vous êtes aussi les bienvenus\nhttps://discord.gg/BZgWM5v'
					}});
				} else	

			if (message.content.startsWith(prefix + "help"))	{
					message.delete();
			    	message.reply({embed: {
						color: 	2551650,
						title: 'Commandes:',
						description: '\n_ping\n_ogame\n_support'
					}});
				} else

			if (message.content === 'Mon avatar') {
			    	message.reply(message.author.avatarURL);
				} else

			/*if ((message.content.search('Bonjour') >= 0) || (message.content.search('bonjour') >= 0) || (message.content.search('Salut') >= 0) || (message.content.search('salut') >= 0))	{
		    		var auteur = message.author;
		    		var auteurrole = message.author.roles;
		    		var botrole = message.guild.roles.find("name", "Oukilai");

		    		if ((message.content.search('Bonjour') >= 0) || (message.content.search('bonjour') >= 0))
			    		{
					    	message.channel.send(`Bonjour ` + auteur);
			    		}
			    	else if ((message.content.search('Salut') >= 0) || (message.content.search('salut') >= 0))
			    		{
			    			message.channel.send(`Salut ` + auteur);
						}
			    	else{}
			    } else*/

			if (message.content.startsWith(prefix + "ogame"))
				{

					var split = message.content.split(" "),
			        name = split[1],
			        uni = split[2],
			        pays = split[3];
			        

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
					else if (pays === 'se')
				        {uni = unise(uni);}
				    else {}

				   

			        urltoppoints = 'https://s' + uni + '-' + pays + ".ogame.gameforge.com/api/highscore.xml?category=1&type=0",
			        urltopeco = 'https://s' + uni + '-' + pays + ".ogame.gameforge.com/api/highscore.xml?category=1&type=1",
			        urltoptechno = 'https://s' + uni + '-' + pays + ".ogame.gameforge.com/api/highscore.xml?category=1&type=2",
			        urltopmili = 'https://s' + uni + '-' + pays + ".ogame.gameforge.com/api/highscore.xml?category=1&type=3",
			        urlid = 'https://s' + uni + '-' + pays + ".ogame.gameforge.com/api/players.xml",
			        urlcolo = 'https://s' + uni + '-' + pays + ".ogame.gameforge.com/api/playerData.xml?id=";
					
					if ((name) && (uni !== 'error') && (pays))
						{
							if (name.search('%') >= 0)
						        {
						        	var split = name.split('%'),
						        	name1 = split[0],
						        	name2 = split[split.length-1];
						        	var result = '';
						        	for (var i = 0; i < split.length; i++) {
						        		if (result === '')
											{
												result = split[i];
											}
										else
											{
												result = result + ' ' + split[i];
											}
						        	}
						        	levrai = result;
						        }
						    else{levrai = name;}

				    		request(urlid, function (error, response, html) {
							    
							    if (!error)
							    	{
							            var $ = cheerio.load(html);

							            if (name1)
								            {
								            	data1 = $("[name^=" + name1 + "]").attr('id'),
								            	data2 = $("[name$=" + name2 + "]").attr('id'),
								            	status1 = $("[name^=" + name1 + "]").attr('status'),
								            	status2 = $("[name$=" + name2 + "]").attr('status');
								            	if (data1 === data2)
									            	{
									            		data = data1;
									            	}
									            else 
									            	{
									            		data = data2;
									        		}
									        	name = name2,
									        	status = $("[name$=" + name + "]").attr('status');
								            }
								        else
									        {
									        	data = $("[name^=" + name + "]").attr('id'),
									        	status = $("[name^=" + name + "]").attr('status');
									        }
								       	
								       	var status = $("[name$=" + name + "]").attr('status');
								       	if (status === 'a') {status = 'Administrateur';}
								       	else if (status === 'i') {status = ' -> Inactif 7 jours <-';}
								       	else if (status === 'I') {status = ' -> Inactif 28 jours <-';}
								       	else if (status === 'v') {status = ' -> Mode Vacances <-';}
								       	else if (status === 'b') {status = ' -> ~~Bloqué~~ <-';}
								       	else if (status === 'vi') {status = ' -> Mode Vacances | Inactif 7 jours <-';}
								       	else if (status === 'vI') {status = ' -> Mode Vacances | Inactif 28 jours <-';}
								       	else if (status === 'vib') {status = ' -> ~~Bloqué~~ | Mode Vacances | Inactif 7 jours <-';}
								       	else if (status === 'vIb') {status = ' -> ~~Bloqué~~ | Mode Vacances | Inactif 28 jours <-';}
								       	else{status = ' -> Actif <-';}
								        					        
								        if (data)
								        	{
										        urlplanetes = urlcolo + data;
										        request(urlplanetes, function (error, response, html) {
												    if (!error) 
												   		{
													    	var $ = cheerio.load(html),
													    	taille = $('planets planet').length,
													        nbrfleet = $("position").eq('3').attr('ships');
													        
													        i = 0;
															result = '';
													        if (nbrfleet !== '')
														    	{
														    		
														    		i = 0;
																	result = '';
																	var co = '';
														    		var tempo1 = '';
														    		var tempo2 = '';
														    		var tempo3 = '';

														    		var tablo = new Array();
																	var temoin = taille;
																	var newtablo = new Array();
																	var newtemoin = temoin;

																	var	lidadelete = 0;

														    		while(i < taille)
																    	{
																    		tablo[i] = new Array();
																			newtablo[i] = new Array();

																    		tablo[i][0] = $("planet").eq(i).attr('name');

																	        result2 = $("planet").eq(i).attr('coords');
																	        var split = result2.split(":");
																	        var tempo1 = split[0];
																	        var tempo2 = split[1];
																	        var tempo3 = split[2];
																	        tablo[i][1] = tempo1;
																	        tablo[i][2] = tempo2;
																	        tablo[i][3] = tempo3;

																	        result3 = $("planet").eq(i).children('moon').attr('name'); 
																	        result4 = $("planet").eq(i).children('moon').attr('size');

																	        if (result3)
																		        {
																		        	tablo[i][4] = '**Lune:**    \t' + result2 + ' ->  ' + result3 + ' (' + result4 + ' km)\n\n';
																		        }
																			else{ tablo[i][4] = '\n';}
																	        i++;
																    	}

																    for (var i = 0; i < temoin; i++)
																		{
																			var laligneacomparer = tablo[0];
																			lidadelete = 0;

																			for (var o = 0; o < newtemoin; o++)
																				{
																					if (laligneacomparer[1] < tablo[o][1])
																						{} else
																					if (laligneacomparer[1] > tablo[o][1])
																						{laligneacomparer = tablo[o];lidadelete = o;} else 
																					if (laligneacomparer[1] === tablo[o][1])
																						{
																							if (laligneacomparer[2] < tablo[o][2])
																								{} else
																							if (laligneacomparer[2] > tablo[o][2])
																								{laligneacomparer = tablo[o];lidadelete = o;} else 
																							if (laligneacomparer[2] === tablo[o][2])
																								{
																									if (laligneacomparer[3] < tablo[o][3])
																										{} else
																									if (laligneacomparer[3] > tablo[o][3])
																										{laligneacomparer = tablo[o];lidadelete = o;} else 
																									if (laligneacomparer[3] === tablo[o][3])
																										{}
																								}
																						}
																				}
																			newtablo[i] = laligneacomparer;
																			tablo.splice(lidadelete,1);
																			newtemoin--;
																		}

																	for (var i = 0; i < taille; i++)
																		{
																			co = newtablo[i][1] + ':' + newtablo[i][2] + ':' + newtablo[i][3];
																			result = result + '**Planète:** \t' + co + ' ->  ' + newtablo[i][0] + '\n' + newtablo[i][4];
																		}																	
														    	}
														    else{}

													        request(urltoppoints, function (error, response, html) {
															    if (!error)
															    	{
															            var $ = cheerio.load(html),
																       	toppoint = $("[id=" + data + "]").attr('position');
																    }
													    		else{console.log("Erreur : " + error);}
																request(urltopeco, function (error, response, html) {
																    if (!error)
																    	{
																            var $ = cheerio.load(html),
																	       	topeco = $("[id=" + data + "]").attr('position');
																	    }
														    		else{console.log("Erreur : " + error);}
														    		request(urltoptechno, function (error, response, html) {
																	    if (!error)
																	    	{
																	            var $ = cheerio.load(html),
																		       	toptechno = $("[id=" + data + "]").attr('position');
																		    }
															    		else{console.log("Erreur : " + error);}
															    		request(urltopmili, function (error, response, html) {
																		    if (!error)
																		    	{
																		            var $ = cheerio.load(html),
																			       	topmili = $("[id=" + data + "]").attr('position');
																			    }
																    		else{console.log("Erreur : " + error);}

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
																	    																    																    	
																			message.delete();
																			message.channel.send({embed: {
																				title: 'Liste des Planètes et Lunes de __\'' + levrai + '\'__' + status,
																				color: 	2551650,
																				description: '\n\tTop **' + toppoint + '** General\n' + '\tTop **' + topeco + '** Eco\n' + '\tTop **' + toptechno + '** Recherche\n' + '\tTop **' + topmili + '** Militaire\t-> **' + nbrfleet + '** Vaisseaux\n' + '\n\n__**' + taille + '** Planètes:__\n\n' + result
																			}});
																		});
																	});
																});													
															});
																	
																		
													    	
														}
													else
														{
													        console.log("Erreur : " + error);
														}
												});
											}
								    	else if(!data)
								    		{
								    			message.channel.send({embed: {
													color: 	2551650,
													description: 'Erreur, le joueur n\'existe pas\n_help pour plus d\'informations'
												}});
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
							message.channel.send({embed: {
								color: 	2551650,
								title: 'error',
								description: '_help pour plus d\'informations'
							}});
						}
					else
						{  
							message.channel.send({embed: {
								color: 	2551650,
								title: 'error',
								description: '\n_ogame [pseudo] [uni] [pays]\n\n[pseudo] -> remplacer les espaces pour un %\n[uni]    -> en toute lettre sauf pour les uni à chiffre où seulement ce dernier suffit\n[pays]   -> fr, en, us, ...'
							}});
						}
				}
		}
	else{}


		

});

bot.login(process.env.TOKEN);
