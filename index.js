
const Discord = require("discord.js");
const bot = new Discord.Client();

var request = require("request"),
    cheerio = require("cheerio"),
    urlid = ".ogame.gameforge.com/api/players.xml";
    urlcolo = ".ogame.gameforge.com/api/playerData.xml?id=";

function unifr(uni) {
	if (uni.toLowerCase() == 'aquarius'){
			return('153');
		}else if (uni.toLowerCase() == 'zagadra'){
			return('126');
		}else if (uni.toLowerCase() == 'antares'){
			return('127');
		}else if (uni.toLowerCase() == 'betelgeuse'){
			return('128');
		}else if (uni.toLowerCase() == 'eridanus'){
			return('131');
		}else if (uni.toLowerCase() === 'fidis'){
			return('132');
		}else if (uni.toLowerCase() == 'ganimed'){
			return('133');
		}else if (uni.toLowerCase() == 'hyperion'){
			return('134');
		}else if (uni.toLowerCase() == 'izar'){
			return('135');
		}else if (uni.toLowerCase() == 'japetus'){
			return('136');
		}else if (uni.toLowerCase() == 'kallisto'){
			return('137');
		}else if (uni.toLowerCase() == 'libra'){
			return('138');
		}else if (uni.toLowerCase() == 'merkur'){
			return('139');
		}else if (uni.toLowerCase() == 'nusakan'){
			return('140');
		}else if (uni.toLowerCase() == 'oberon'){	
			return('141');
		}else if (uni.toLowerCase() == 'polaris'){
			return('142');
		}else if (uni.toLowerCase() == 'quaoar'){
			return('143');
		}else if (uni.toLowerCase() == 'rhea'){
			return('144');
		}else if (uni.toLowerCase() == 'spica'){
			return('145');
		}else if (uni.toLowerCase() == 'tarazed'){
			return('146');
		}else if (uni.toLowerCase() == 'uriel'){
			return('147');
		}else if (uni.toLowerCase() == 'virgo'){
			return('148');
		}else if (uni.toLowerCase() == 'wezn'){
			return('149');
		}else if (uni.toLowerCase() == 'xanthus'){
			return('150');
		}else if (uni.toLowerCase() == 'yildun'){
			return('151');
		}else if (uni.toLowerCase() == 'zibal'){
			return('152');
		}else if (uni.toLowerCase() == 'fornax'){
			return('106');
		}else if (uni.toLowerCase() == 'sirius'){
			return('119');
		}else if (uni.toLowerCase() == 'taurus'){
			return('120');
		}else if (uni.toLowerCase() == 'vega'){
			return('122');
		}else if (uni.toLowerCase() == 'wasat'){
			return('123');
		}else if (uni.toLowerCase() == 'bellatrix'){
			return('154');
		}else {return('error');}
}
function unien(uni) {		
	if (uni.toLowerCase() == 'betelgeuse'){
			return('128');
		}else if (uni.toLowerCase() == 'cygnus'){
			return('129');
		}else if (uni.toLowerCase() == 'deimos'){
			return('130');
		}else if (uni.toLowerCase() == 'eridanus'){
			return('131');
		}else if (uni.toLowerCase() === 'fidis'){
			return('132');
		}else if (uni.toLowerCase() == 'ganimed'){
			return('133');
		}else if (uni.toLowerCase() == 'hyperion'){
			return('134');
		}else if (uni.toLowerCase() == 'izar'){
			return('135');
		}else if (uni.toLowerCase() == 'japetus'){
			return('136');
		}else if (uni.toLowerCase() == 'kallisto'){
			return('137');
		}else if (uni.toLowerCase() == 'libra'){
			return('138');
		}else if (uni.toLowerCase() == 'nusakan'){
			return('140');
		}else if (uni.toLowerCase() == 'oberon'){	
			return('141');
		}else if (uni.toLowerCase() == 'polaris'){
			return('142');
		}else if (uni.toLowerCase() == 'quaoar'){
			return('143');
		}else if (uni.toLowerCase() == 'rhea'){
			return('144');
		}else if (uni.toLowerCase() == 'spica'){
			return('145');
		}else if (uni.toLowerCase() == 'tarazed'){
			return('146');
		}else if (uni.toLowerCase() == 'unity'){
			return('139');
		}else if (uni.toLowerCase() == 'uriel'){
			return('147');
		}else if (uni.toLowerCase() == 'virgo'){
			return('148');
		}else if (uni.toLowerCase() == 'wezn'){
			return('149');
		}else if (uni.toLowerCase() == 'xanthus'){
			return('150');
		}else if (uni.toLowerCase() == 'yildun'){
			return('151');
		}else if (uni.toLowerCase() == 'zibal'){
			return('152');
		}else if (uni.toLowerCase() == 'quantum'){
			return('117');
		}else if (uni.toLowerCase() == 'rigel'){
			return('118');
		}else if (uni.toLowerCase() == 'taurus'){
			return('120');
		}else if (uni.toLowerCase() == 'vega'){
			return('122');
		}else if (uni.toLowerCase() == 'wasat'){
			return('123');
		}else {return('error');}
}
function unicz(uni) {		
	if (uni.toLowerCase() == 'antares'){
			return('127');
		}else if (uni.toLowerCase() == 'betelgeuse'){
			return('128');
		}else if (uni.toLowerCase() == 'cygnus'){
			return('129');
		}else if (uni.toLowerCase() == 'deimos'){
			return('130');
		}else if (uni.toLowerCase() === 'eridanus'){
			return('131');
		}else if (uni.toLowerCase() == 'fidis'){
			return('132');
		}else if (uni.toLowerCase() == 'andromeda'){
			return('101');
		}else if (uni.toLowerCase() == 'barym'){
			return('102');
		}else if (uni.toLowerCase() == 'jupiter'){
			return('110');
		}else if (uni.toLowerCase() == 'kassiopeia'){
			return('111');
		}else if (uni.toLowerCase() == 'sirius'){
			return('119');
		}else if (uni.toLowerCase() == 'wasat'){
			return('123');
		}else if (uni.toLowerCase() == 'xalynth'){	
			return('124');
		}else if (uni.toLowerCase() == 'yakini'){
			return('125');
		}else if (uni.toLowerCase() == 'zagadra'){
			return('126');
		}else {return('error');}
}
function uniar(){
	if (uni.toLowerCase() == 'andromeda'){
			return('101');
		}else if (uni.toLowerCase() == 'kassiopeia'){
			return('111');
		}else if (uni.toLowerCase() == 'nekkar'){
			return('114');
		}else if (uni.toLowerCase() == 'orion'){
			return('115');
		}else if (uni.toLowerCase() == 'pegasus'){
			return('116');
		}else if (uni.toLowerCase() == 'quantum'){
			return('117');
		}else if (uni.toLowerCase() == 'rigel'){
			return('118');
		}else if (uni.toLowerCase() == 'sirius'){
			return('119');
		}else if (uni.toLowerCase() == 'taurus'){
			return('120');
		}else if (uni.toLowerCase() == 'ursa'){
			return('121');
		}else if (uni.toLowerCase() == 'vega'){
			return('122');
		}else if (uni.toLowerCase() == 'wasat'){
			return('123');
		}else {return('error');}
}
function unibr(){
	if (uni.toLowerCase() == 'antares'){
			return('127');
		}else if (uni.toLowerCase() == 'betelgeuse'){
			return('128');
		}else if (uni.toLowerCase() == 'cygnus'){
			return('129');
		}else if (uni.toLowerCase() == 'deimos'){
			return('130');
		}else if (uni.toLowerCase() == 'eridanus'){
			return('131');
		}else if (uni.toLowerCase() == 'fidis'){
			return('132');
		}else if (uni.toLowerCase() == 'andromeda'){
			return('101');
		}else if (uni.toLowerCase() == 'capella'){
			return('103');
		}else if (uni.toLowerCase() == 'fornax'){
			return('106');
		}else if (uni.toLowerCase() == 'orion'){
			return('115');
		}else if (uni.toLowerCase() == 'ursa'){
			return('121');
		}else if (uni.toLowerCase() == 'wasat'){
			return('123');
		}else if (uni.toLowerCase() == 'xalynth'){
			return('124');
		}else if (uni.toLowerCase() == 'yakini'){
			return('125');
		}else if (uni.toLowerCase() == 'zagadra'){
			return('126');
		}else {return('error');}
}
function unidk(){				
	if (uni.toLowerCase() == 'draco'){
			return('127');
		}else if (uni.toLowerCase() == 'mizar'){
			return('128');
		}else if (uni.toLowerCase() == 'nekkar'){
			return('129');
		}else if (uni.toLowerCase() == 'orion'){
			return('130');
		}else if (uni.toLowerCase() == 'pegasus'){
			return('131');
		}else if (uni.toLowerCase() == 'quantum'){
			return('132');
		}else if (uni.toLowerCase() == 'rigel'){
			return('101');
		}else if (uni.toLowerCase() == 'sirius'){
			return('103');
		}else if (uni.toLowerCase() == 'taurus'){
			return('106');
		}else {return('error');}
}
function unide(){			
	if (uni.toLowerCase() == 'tarazed'){
			return('127');
		}else if (uni.toLowerCase() == 'cygnus'){
			return('129');
		}else if (uni.toLowerCase() == 'deimos'){
			return('130');
		}else if (uni.toLowerCase() == 'eridanus'){
			return('131');
		}else if (uni.toLowerCase() == 'fidis'){
			return('132');
		}else if (uni.toLowerCase() == 'ganimed'){
			return('133');
		}else if (uni.toLowerCase() == 'hyperion'){
			return('134');
		}else if (uni.toLowerCase() == 'izar'){
			return('135');
		}else if (uni.toLowerCase() == 'japetus'){
			return('136');
		}else if (uni.toLowerCase() == 'kallisto'){
			return('137');
		}else if (uni.toLowerCase() == 'libra'){
			return('138');
		}else if (uni.toLowerCase() == 'merkur'){
			return('139');
		}else if (uni.toLowerCase() == 'nusakan'){
			return('140');
		}else if (uni.toLowerCase() == 'oberon'){
			return('141');
		}else if (uni.toLowerCase() == 'polaris'){
			return('142');
		}else if (uni.toLowerCase() == 'quaoar'){
			return('143');
		}else if (uni.toLowerCase() == 'rhea'){
			return('144');
		}else if (uni.toLowerCase() == 'spica'){
			return('145');
		}else if (uni.toLowerCase() == 'tarazed'){
			return('146');
		}else if (uni.toLowerCase() == 'uriel'){
			return('147');
		}else if (uni.toLowerCase() == 'virgo'){
			return('148');
		}else if (uni.toLowerCase() == 'wezn'){
			return('149');
		}else if (uni.toLowerCase() == 'xanthus'){
			return('150');
		}else if (uni.toLowerCase() == 'yildun'){
			return('151');
		}else if (uni.toLowerCase() == 'zibal'){
			return('152');
		}else if (uni.toLowerCase() == 'electra'){
			return('105');
		}else if (uni.toLowerCase() == 'orion'){
			return('151');
		}else if (uni.toLowerCase() == 'ursa'){
			return('121');
		}else if (uni.toLowerCase() == 'vega'){
			return('122');
		}else if (uni.toLowerCase() == 'xalynth'){
			return('124');
		}else if (uni.toLowerCase() == 'yakini'){
			return('125');
		}else {return('error');}
}
function unies(){	
	if (uni.toLowerCase() == 'antares'){
			return('127');
		}else if (uni.toLowerCase() == 'betelgeuse'){
			return('128');
		}else if (uni.toLowerCase() == 'deimos'){
			return('130');
		}else if (uni.toLowerCase() == 'hyperion'){
			return('134');
		}else if (uni.toLowerCase() == 'japetus'){
			return('136');
		}else if (uni.toLowerCase() == 'kallisto'){
			return('137');
		}else if (uni.toLowerCase() == 'libra'){
			return('138');
		}else if (uni.toLowerCase() == 'merkur'){
			return('139');
		}else if (uni.toLowerCase() == 'nusakan'){
			return('140');
		}else if (uni.toLowerCase() == 'oberon'){
			return('141');
		}else if (uni.toLowerCase() == 'polaris'){
			return('142');
		}else if (uni.toLowerCase() == 'quaoar'){
			return('143');
		}else if (uni.toLowerCase() == 'rhea'){
			return('144');
		}else if (uni.toLowerCase() == 'spica'){
			return('145');
		}else if (uni.toLowerCase() == 'tarazed'){
			return('146');
		}else if (uni.toLowerCase() == 'uriel'){
			return('147');
		}else if (uni.toLowerCase() == 'virgo'){
			return('148');
		}else if (uni.toLowerCase() == 'wezn'){
			return('149');
		}else if (uni.toLowerCase() == 'xanthus'){
			return('150');
		}else if (uni.toLowerCase() == 'yildun'){
			return('151');
		}else if (uni.toLowerCase() == 'zibal'){
			return('152');
		}else if (uni.toLowerCase() == 'andromeda'){
			return('101');
		}else if (uni.toLowerCase() == 'fornax'){
			return('106');
		}else if (uni.toLowerCase() == 'pegasus'){
			return('116');
		}else if (uni.toLowerCase() == 'quantum'){
			return('117');
		}else if (uni.toLowerCase() == 'sirius'){
			return('119');
		}else if (uni.toLowerCase() == 'xalynth'){
			return('124');
		}else if (uni.toLowerCase() == 'zagadra'){
			return('126');
		}else {return('error');}
}
function unihr(){				
	if (uni.toLowerCase() == 'io'){	
			return('109');
		}else if (uni.toLowerCase() == 'jupiter'){
			return('110');
		}else if (uni.toLowerCase() == 'kassiopeia'){
			return('111');
		}else if (uni.toLowerCase() == 'leo'){
			return('112');
		}else if (uni.toLowerCase() == 'mizar'){
			return('113');
		}else {return('error');}
}
function uniit(){	
	if (uni.toLowerCase() == 'betelgeuse'){
			return('128');
		}else if (uni.toLowerCase() == 'cygnus'){
			return('129');
		}else if (uni.toLowerCase() == 'deimos'){
			return('130');
		}else if (uni.toLowerCase() == 'eridanus'){
			return('131');
		}else if (uni.toLowerCase() == 'fidis'){
			return('132');
		}else if (uni.toLowerCase() == 'ganimed'){
			return('133');
		}else if (uni.toLowerCase() == 'hyperion'){
			return('134');
		}else if (uni.toLowerCase() == 'izar'){
			return('135');
		}else if (uni.toLowerCase() == 'japetus'){
			return('136');
		}else if (uni.toLowerCase() == 'kallisto'){
			return('137');
		}else if (uni.toLowerCase() == 'libra'){
			return('138');
		}else if (uni.toLowerCase() == 'merkur'){
			return('139');
		}else if (uni.toLowerCase() == 'nusakan'){
			return('140');
		}else if (uni.toLowerCase() == 'oberon'){
			return('141');
		}else if (uni.toLowerCase() == 'polaris'){
			return('142');
		}else if (uni.toLowerCase() == 'quaoar'){
			return('143');
		}else if (uni.toLowerCase() == 'rhea'){
			return('144');
		}else if (uni.toLowerCase() == 'spica'){
			return('145');
		}else if (uni.toLowerCase() == 'tarazed'){
			return('146');
		}else if (uni.toLowerCase() == 'uriel'){
			return('147');
		}else if (uni.toLowerCase() == 'virgo'){
			return('148');
		}else if (uni.toLowerCase() == 'wezn'){
			return('149');
		}else if (uni.toLowerCase() == 'xanthus'){
			return('150');
		}else if (uni.toLowerCase() == 'yildun'){
			return('151');
		}else if (uni.toLowerCase() == 'andromeda'){
			return('101');
		}else if (uni.toLowerCase() == 'nekkar'){
			return('114');
		}else if (uni.toLowerCase() == 'orion'){
			return('115');
		}else {return('error');}
}
function unihu(){
	if (uni.toLowerCase() == 'andromeda'){
			return('101');
		}else if (uni.toLowerCase() == 'barym'){
			return('102');
		}else if (uni.toLowerCase() == 'hydra'){
			return('108');
		}else if (uni.toLowerCase() == 'orion'){
			return('115');
		}else if (uni.toLowerCase() == 'pegasus'){
			return('116');
		}else if (uni.toLowerCase() == 'quantum'){
			return('117');
		}else if (uni.toLowerCase() == 'rigel'){
			return('118');
		}else if (uni.toLowerCase() == 'sirius'){
			return('119');
		}else if (uni.toLowerCase() == 'taurus'){
			return('120');
		}else if (uni.toLowerCase() == 'ursa'){
			return('121');
		}else if (uni.toLowerCase() == 'vega'){
			return('122');
		}else if (uni.toLowerCase() == 'wasat'){
			return('123');
		}else if (uni.toLowerCase() == 'xalynth'){
			return('124');
		}else if (uni.toLowerCase() == 'yakini'){
			return('125');
		}else {return('error');}
}
function unimx(){
	if (uni.toLowerCase() == 'andromeda'){
			return('101');
		}else if (uni.toLowerCase() == 'jupiter'){
			return('102');
		}else if (uni.toLowerCase() == 'leo'){
			return('108');
		}else if (uni.toLowerCase() == 'mizar'){
			return('115');
		}else if (uni.toLowerCase() == 'nekkar'){
			return('116');
		}else if (uni.toLowerCase() == 'orion'){
			return('117');
		}else if (uni.toLowerCase() == 'pegasus'){
			return('118');
		}else if (uni.toLowerCase() == 'quantum'){
			return('119');
		}else if (uni.toLowerCase() == 'rigel'){
			return('120');
		}else if (uni.toLowerCase() == 'sirius'){
			return('121');
		}else {return('error');}
}
function unise(){
	if (uni.toLowerCase() == 'capella'){
			return('103');
		}else if (uni.toLowerCase() == 'electra'){
			return('105');
		}else if (uni.toLowerCase() == 'hydra'){
			return('108');
		}else if (uni.toLowerCase() == 'io'){
			return('109');
		}else if (uni.toLowerCase() == 'jupiter'){
			return('110');
		}else if (uni.toLowerCase() == 'kassiopeia'){
			return('111');
		}else if (uni.toLowerCase() == 'Tvillingarna'){
			return('107');
		}else {return('error');}
}
function uninl(){			
	if (uni.toLowerCase() == 'antares'){
			return('127');
		}else if (uni.toLowerCase() == 'betelgeuse'){
			return('128');
		}else if (uni.toLowerCase() == 'draco'){
			return('104');
		}else if (uni.toLowerCase() == 'gemini'){
			return('107');
		}else if (uni.toLowerCase() == 'pegasus'){
			return('116');
		}else if (uni.toLowerCase() == 'quantum'){
			return('117');
		}else if (uni.toLowerCase() == 'rigel'){
			return('118');
		}else if (uni.toLowerCase() == 'sirius'){
			return('119');
		}else if (uni.toLowerCase() == 'taurus'){
			return('120');
		}else if (uni.toLowerCase() == 'ursa'){
			return('121');
		}else if (uni.toLowerCase() == 'vega'){
			return('120');
		}else if (uni.toLowerCase() == 'wasat'){
			return('120');
		}else if (uni.toLowerCase() == 'xalynth'){
			return('120');
		}else if (uni.toLowerCase() == 'yakini'){
			return('120');
		}else if (uni.toLowerCase() == 'zagadra'){
			return('120');
		}else {return('error');}
}
function unino(){
	if (uni.toLowerCase() == 'andromeda'){
			return('101');
		}else if (uni.toLowerCase() == 'draco'){
			return('104');
		}else if (uni.toLowerCase() == 'electra'){
			return('105');
		}else if (uni.toLowerCase() == 'fornax'){
			return('106');
		}else {return('error');}
}
function unipl(){		
	if (uni.toLowerCase() == 'aquarius'){
			return('153');
		}else if (uni.toLowerCase() == 'antares'){
			return('127');
		}else if (uni.toLowerCase() == 'betelgeuse'){
			return('128');
		}else if (uni.toLowerCase() == 'cygnus'){
			return('129');
		}else if (uni.toLowerCase() == 'deimos'){
			return('130');
		}else if (uni.toLowerCase() == 'eridanus'){
			return('131');
		}else if (uni.toLowerCase() == 'fidis'){
			return('132');
		}else if (uni.toLowerCase() == 'ganimed'){
			return('133');
		}else if (uni.toLowerCase() == 'hyperion'){
			return('134');
		}else if (uni.toLowerCase() == 'izar'){
			return('135');
		}else if (uni.toLowerCase() == 'japetus'){
			return('136');
		}else if (uni.toLowerCase() == 'kallisto'){
			return('137');
		}else if (uni.toLowerCase() == 'libra'){
			return('138');
		}else if (uni.toLowerCase() == 'merkur'){
			return('139');
		}else if (uni.toLowerCase() == 'nusakan'){
			return('140');
		}else if (uni.toLowerCase() == 'oberon'){
			return('141');
		}else if (uni.toLowerCase() == 'polaris'){
			return('142');
		}else if (uni.toLowerCase() == 'quaoar'){
			return('143');
		}else if (uni.toLowerCase() == 'rhea'){
			return('144');
		}else if (uni.toLowerCase() == 'spica'){
			return('145');
		}else if (uni.toLowerCase() == 'tarazed'){
			return('146');
		}else if (uni.toLowerCase() == 'uriel'){
			return('147');
		}else if (uni.toLowerCase() == 'virgo'){
			return('148');
		}else if (uni.toLowerCase() == 'wezn'){
			return('149');
		}else if (uni.toLowerCase() == 'xanthus'){
			return('150');
		}else if (uni.toLowerCase() == 'yildun'){
			return('151');
		}else if (uni.toLowerCase() == 'zibal'){
			return('152');
		}else if (uni.toLowerCase() == 'draco'){
			return('104');
		}else if (uni.toLowerCase() == 'nekkar'){
			return('114');
		}else if (uni.toLowerCase() == 'quantum'){
			return('117');
		}else if (uni.toLowerCase() == 'taurus'){
			return('120');
		}else if (uni.toLowerCase() == 'wasat'){
			return('123');
		}else if (uni.toLowerCase() == 'yakini'){
			return('125');
		}else if (uni.toLowerCase() == 'zagadra'){
			return('126');
		}else {return('error');}
}
function unipt(){			
	if (uni.toLowerCase() == 'antares'){
			return('127');
		}else if (uni.toLowerCase() == 'betelgeuse'){
			return('128');
		}else if (uni.toLowerCase() == 'cygnus'){
			return('129');
		}else if (uni.toLowerCase() == 'deimos'){
			return('130');
		}else if (uni.toLowerCase() == 'eridanus'){
			return('131');
		}else if (uni.toLowerCase() == 'fidis'){
			return('132');
		}else if (uni.toLowerCase() == 'ganimed'){
			return('133');
		}else if (uni.toLowerCase() == 'capella'){
			return('103');
		}else if (uni.toLowerCase() == 'quantum'){
			return('117');
		}else if (uni.toLowerCase() == 'ursa'){
			return('121');
		}else if (uni.toLowerCase() == 'vega'){
			return('122');
		}else if (uni.toLowerCase() == 'wasat'){
			return('123');
		}else if (uni.toLowerCase() == 'xalynth'){
			return('124');
		}else if (uni.toLowerCase() == 'yakini'){
			return('125');
		}else if (uni.toLowerCase() == 'zagadra'){
			return('126');
		}else {return('error');}
}
function uniro(){
	if (uni.toLowerCase() == 'jupiter'){
			return('110');
		}else if (uni.toLowerCase() == 'mizar'){
			return('113');
		}else if (uni.toLowerCase() == 'orion'){
			return('115');
		}else if (uni.toLowerCase() == 'pegasus'){
			return('116');
		}else if (uni.toLowerCase() == 'quantum'){
			return('117');
		}else if (uni.toLowerCase() == 'rigel'){
			return('118');
		}else if (uni.toLowerCase() == 'sirius'){
			return('119');
		}else if (uni.toLowerCase() == 'taurus'){
			return('120');
		}else if (uni.toLowerCase() == 'ursa'){
			return('121');
		}else if (uni.toLowerCase() == 'vega'){
			return('122');
		}else if (uni.toLowerCase() == 'wasat'){
			return('123');
		}else {return('error');}
}
function unisi(){
	if (uni.toLowerCase() == 'andromeda'){
			return('101');
		}else if (uni.toLowerCase() == 'electra'){
			return('105');
		}else if (uni.toLowerCase() == 'fornax'){
			return('106');
		}else if (uni.toLowerCase() == 'gemini'){
			return('107');
		}else if (uni.toLowerCase() == 'hydra'){
			return('108');
		}else {return('error');}
}
function unisk(){
	if (uni.toLowerCase() == 'andromeda'){
			return('101');
		}else if (uni.toLowerCase() == 'hydra'){
			return('108');
		}else if (uni.toLowerCase() == 'io'){
			return('109');
		}else if (uni.toLowerCase() == 'jupiter'){
			return('110');
		}else if (uni.toLowerCase() == 'kassiopeia'){
			return('111');
		}else if (uni.toLowerCase() == 'leo'){
			return('112');
		}else if (uni.toLowerCase() == 'mizar'){
			return('113');
		}else {return('error');}
}
function unifi(){
	if (uni.toLowerCase() == 'barym'){
			return('102');
		}else if (uni.toLowerCase() == 'capella'){
			return('103');
		}else if (uni.toLowerCase() == 'draco'){
			return('104');
		}else if (uni.toLowerCase() == 'electra'){
			return('105');
		}else if (uni.toLowerCase() == 'fornax'){
			return('106');
		}else {return('error');}
}
function unitr(){			
	if (uni.toLowerCase() == 'betelgeuse'){
			return('128');
		}else if (uni.toLowerCase() == 'eridanus'){
			return('131');
		}else if (uni.toLowerCase() == 'fidis'){
			return('132');
		}else if (uni.toLowerCase() == 'ganimed'){
			return('133');
		}else if (uni.toLowerCase() == 'hyperion'){
			return('134');
		}else if (uni.toLowerCase() == 'izar'){
			return('135');
		}else if (uni.toLowerCase() == 'japetus'){
			return('136');
		}else if (uni.toLowerCase() == 'kallisto'){
			return('137');
		}else if (uni.toLowerCase() == 'libra'){
			return('138');
		}else if (uni.toLowerCase() == 'merkur'){
			return('139');
		}else if (uni.toLowerCase() == 'nusakan'){
			return('140');
		}else if (uni.toLowerCase() == 'oberon'){
			return('141');
		}else if (uni.toLowerCase() == 'polaris'){
			return('142');
		}else if (uni.toLowerCase() == 'quaoar'){
			return('143');
		}else if (uni.toLowerCase() == 'rhea'){
			return('144');
		}else if (uni.toLowerCase() == 'spica'){
			return('145');
		}else if (uni.toLowerCase() == 'tarazed'){
			return('146');
		}else if (uni.toLowerCase() == 'uriel'){
			return('147');
		}else if (uni.toLowerCase() == 'virgo'){
			return('148');
		}else if (uni.toLowerCase() == 'wezn'){
			return('149');
		}else if (uni.toLowerCase() == 'xanthus'){
			return('150');
		}else if (uni.toLowerCase() == 'yildun'){
			return('151');
		}else if (uni.toLowerCase() == 'andromeda'){
			return('101');
		}else if (uni.toLowerCase() == 'hydra'){
			return('108');
		}else if (uni.toLowerCase() == 'pegasus'){
			return('116');
		}else if (uni.toLowerCase() == 'taurus'){
			return('120');
		}else if (uni.toLowerCase() == 'ursa'){
			return('121');
		}else {return('error');}
}
function unius(){			
	if (uni.toLowerCase() == 'betelgeuse'){
			return('128');
		}else if (uni.toLowerCase() == 'cygnus'){
			return('129');
		}else if (uni.toLowerCase() == 'deimos'){
			return('130');
		}else if (uni.toLowerCase() == 'eridanus'){
			return('131');
		}else if (uni.toLowerCase() == 'fidis'){
			return('132');
		}else if (uni.toLowerCase() == 'ganimed'){
			return('133');
		}else if (uni.toLowerCase() == 'hydra'){
			return('134');
		}else if (uni.toLowerCase() == 'izar'){
			return('135');
		}else if (uni.toLowerCase() == 'japetus'){
			return('136');
		}else if (uni.toLowerCase() == 'kallisto'){
			return('137');
		}else if (uni.toLowerCase() == 'libra'){
			return('138');
		}else if (uni.toLowerCase() == 'merkur'){
			return('139');
		}else if (uni.toLowerCase() == 'nusakan'){
			return('140');
		}else if (uni.toLowerCase() == 'oberon'){
			return('141');
		}else if (uni.toLowerCase() == 'polaris'){
			return('142');
		}else if (uni.toLowerCase() == 'quaoar'){
			return('143');
		}else if (uni.toLowerCase() == 'pegasus'){
			return('116');
		}else {return('error');}
}
function unigr(){					//univer 1
	if (uni.toLowerCase() == 'leo'){
			return('110');
		}else if (uni.toLowerCase() == 'orion'){
			return('113');
		}else if (uni.toLowerCase() == 'pegasus'){
			return('116');
		}else if (uni.toLowerCase() == 'quantum'){
			return('117');
		}else if (uni.toLowerCase() == 'rigel'){
			return('118');
		}else if (uni.toLowerCase() == 'sirius'){
			return('119');
		}else if (uni.toLowerCase() == 'taurus'){
			return('120');
		}else if (uni.toLowerCase() == 'ursa'){
			return('121');
		}else if (uni.toLowerCase() == 'vega'){
			return('122');
		}else {return('error');}
}
function uniru(){						//univer 1
	if (uni.toLowerCase() == 'andromeda'){
			return('127');
		}else if (uni.toLowerCase() == 'betelgeuse'){
			return('128');
		}else if (uni.toLowerCase() == 'cygnus'){
			return('129');
		}else if (uni.toLowerCase() == 'deimos'){
			return('130');
		}else if (uni.toLowerCase() == 'eridanus'){
			return('131');
		}else if (uni.toLowerCase() == 'fidis'){
			return('132');
		}else if (uni.toLowerCase() == 'ganimed'){
			return('133');
		}else if (uni.toLowerCase() == 'hyperion'){
			return('134');
		}else if (uni.toLowerCase() == 'izar'){
			return('135');
		}else if (uni.toLowerCase() == 'japetus'){
			return('136');
		}else if (uni.toLowerCase() == 'kallisto'){
			return('137');
		}else if (uni.toLowerCase() == 'libra'){
			return('138');
		}else if (uni.toLowerCase() == 'merkur'){
			return('139');
		}else if (uni.toLowerCase() == 'nusakan'){
			return('140');
		}else if (uni.toLowerCase() == 'oberon'){
			return('141');
		}else if (uni.toLowerCase() == 'polaris'){
			return('142');
		}else if (uni.toLowerCase() == 'quaoar'){
			return('143');
		}else if (uni.toLowerCase() == 'rhea'){
			return('144');
		}else if (uni.toLowerCase() == 'spica'){
			return('145');
		}else if (uni.toLowerCase() == 'tarazed'){
			return('146');
		}else if (uni.toLowerCase() == 'uriel'){
			return('147');
		}else if (uni.toLowerCase() == 'andromeda'){
			return('101');
		}else if (uni.toLowerCase() == 'capella'){
			return('103');
		}else if (uni.toLowerCase() == 'sirius'){
			return('119');
		}else if (uni.toLowerCase() == 'yakini'){
			return('125');
		}else {return('error');}
}
function unitw(){						
	if (uni.toLowerCase() == 'andromeda'){
			return('101');
		}else if (uni.toLowerCase() == 'orion'){
			return('115');
		}else if (uni.toLowerCase() == 'pegasus'){
			return('116');
		}else if (uni.toLowerCase() == 'quantum'){
			return('117');
		}else if (uni.toLowerCase() == 'rigel'){
			return('118');
		}else if (uni.toLowerCase() == 'sirius'){
			return('119');
		}else if (uni.toLowerCase() == 'taurus'){
			return('120');
		}else if (uni.toLowerCase() == 'ursa'){
			return('121');
		}else if (uni.toLowerCase() == 'vega'){
			return('122');
		}else if (uni.toLowerCase() == 'wasat'){
			return('123');
		}else if (uni.toLowerCase() == 'xalynth'){
			return('124');
		}else {return('error');}
}
function unijp(){						
	if (uni.toLowerCase() == 'andromeda'){
			return('101');
		}else if (uni.toLowerCase() == 'hydra'){
			return('115');
		}else if (uni.toLowerCase() == 'io'){
			return('116');
		}else if (uni.toLowerCase() == 'jupiter'){
			return('117');
		}else if (uni.toLowerCase() == 'kassiopeia'){
			return('118');
		}else {return('error');}
}




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
	    	message.reply("```\n_ping\n_ogame\nSupport: https://discord.gg/BZgWM5v```");
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
		    	{
		    		uni = uni;
		    	}
	        else if (((uni !== '1') || (uni !== '10') || (uni !== '67')) && (pays === 'fr'))
		        {
		        	uni = unifr(uni);
		        }
		    else if (((uni !== '1')) && (pays === 'dk'))
		        {
		        	uni = unidk(uni);
		        }
		    else if (((uni !== '1') || (uni !== '79') || (uni !== '82')) && (pays === 'de'))
		        {
		        	uni = unide(uni);
		        }
		    else if (((uni !== '1') || (uni !== '50')) && (pays === 'es'))
		        {
		        	uni = unies(uni);
		        }
		    else if (((uni !== '1') || (uni !== '40')) && (pays === 'it'))
		        {
		        	uni = uniit(uni);
		        }
		    else if (((uni !== '3')) && (pays === 'nl'))
		        {
		        	uni = uninl(uni);
		        }
		    else if (((uni !== '68')) && (pays === 'pl'))
		        {
		        	uni = unipl(uni);
		        }
		    else if (((uni !== '25')) && (pays === 'pt'))
		        {
		        	uni = unipt(uni);
		        }
		    else if (((uni !== '1')) && (pays === 'ro'))
		        {
		        	uni = uniro(uni);
		        }
		    else if (((uni !== '1') || (uni !== '50')) && (pays === 'tr'))
		        {
		        	uni = unitr(uni);
		        }
		    else if (((uni !== '1')) && (pays === 'us'))
		        {
		        	uni = unius(uni);
		        }
		    else if (((uni !== '1')) && (pays === 'gr'))
		        {
		        	uni = unigr(uni);
		        }
		    else if (((uni !== '1')) && (pays === 'ru'))
		        {
		        	uni = uniru(uni);
		        }
		    else if (((uni !== '1')) && (pays === 'en'))
		        {
		        	uni = unien(uni);
		        }
		    else if (pays === 'ar')
		        {
		        	uni = uniar(uni);
		        }
		    else if (pays === 'br')
		        {
		        	uni = unibr(uni);
		        }
		    else if (pays === 'hr')
		        {
		        	uni = unihr(uni);
		        }
		    else if (pays === 'hu')
		        {
		        	uni = unihu(uni);
		        }
		    else if (pays === 'mx')
		        {
		        	uni = unimx(uni);
		        }
		    else if (pays === 'no')
		        {
		        	uni = unino(uni);
		        }
		    else if (pays === 'si')
		        {
		        	uni = unisi(uni);
		        }
		    else if (pays === 'sk')
		        {
		        	uni = unisk(uni);
		        }
		    else if (pays === 'fi')
		        {
		        	uni = unifi(uni);
		        }
		    else if (pays === 'tw')
		        {
		        	uni = unitw(uni);
		        }
		    else if (pays === 'jp')
		        {
		        	uni = unijp(uni);
		        }
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
														    else if (nbrfleet > 3)
															    {
															       	nbrfleet1 = nbrfleet.slice(-3);
															    	nbrfleet2 = nbrfleet.slice(-6, -3);
															        nbrfleet = nbrfleet2 + '.' + nbrfleet1;
														    	}
														    else {}
												    	}
											    	else {}
											    	

											    	while((i != taille) && (nbrfleet !== ''))
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
