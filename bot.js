const Discord = require('discord.js');
const $ = require('jquery');
const client = new Discord.Client();
var compChannel = "399529102371192833";
var currentCompId = "412663727662432281";
var currentCmlId = "412663729310662656";
var lastCompId ="412663731521323011";
var firstPlaceId ="412663757286670336";
var secondPlaceId ="412663761761992706";
var thirdPlaceId ="412663790195179533";
var firstClaimedId="412663759056666624";
var secondClaimedId="412663763586514944";
var thirdClaimedId="412663793718525952";
var lastCmlId="412663797388410895";

//const slayEmoji,attkEmoji,agilEmoji,consEmoji,cookEmoji,craftEmoji,defEmoji,farmEmoji,fmEmoji,fishEmoji,fletchEmoji,herbEmoji,hpEmoji,huntEmoji,prayEmoji,rangeEmoji,rcEmoji,smithEmoji,strEmoji,thievEmoji,wcEmoji;
client.on('ready',() => {
	console.log('I\'m Online');
	client.user.setActivity("OneClan");

});

/*
!!!!!!!!!!! IF ELSE + 2 TIMES THE SAME SKILL EDIT IS ONLY TEMPORARY!
*/

var prefix = "oc&"
client.on('message', message => {
	var start = new Date().getTime();
	console.log("Message: "+message.content);
	if(!message.content.startsWith(prefix))return;

	if (message.author.bot)return;

	if (message.content.startsWith(prefix + 'ping')) {//ping tester
		console.log("PING COMMAND");
		message.channel.send('pong :ping_pong: **'+(new Date().getTime() - start)+' ms**');

		message.channel.send(`pong :ping_pong: \`${Date.now() - message.createdTimestamp} ms \``);

	}else if(message.content.startsWith(prefix + 'setgame')){//game setter
		console.log("SET GAME");
		let args = message.content.split(' ').slice(1);
		var newGame = args.join(' ');
		if(newGame == '' || newGame == ' ')newGame = null;
		client.user.Activity(newGame);
	/*}
	else if(message.content.startsWith(prefix + 'createcomptext')){//creates the initial text
		client.channels.get(compChannel).send('**Current XP Competition: **');
		client.channels.get(compChannel).send('**CML:** ');
		client.channels.get(compChannel).send('**Winners of the last XP Event**');
		client.channels.get(compChannel).send('**Last Event: ** \n');

		client.channels.get(compChannel).send('==================================');

		client.channels.get(compChannel).send('**1st Place** ');
		let notclaimed = message.guild.roles.find("name", "NOT CLAIMED");
		client.channels.get(compChannel).send('**4M PRIZE:** '+notclaimed.toString());

		client.channels.get(compChannel).send('=====================');

		client.channels.get(compChannel).send('**2nd Place** ');
		client.channels.get(compChannel).send('**2M PRIZE: **'+notclaimed.toString());

		client.channels.get(compChannel).send('=====================');

		client.channels.get(compChannel).send('**3rd Place** ');
		client.channels.get(compChannel).send('**1M PRIZE:** '+notclaimed.toString());

		client.channels.get(compChannel).send('==================================');

		client.channels.get(compChannel).send('**Last XP Event:** ');
		client.channels.get(compChannel).send('**Older XP Event Winners:** <https://crystalmathlabs.com/tracker/competitions.php?competition=11807>');
*/
	}else if(message.content.startsWith(prefix + 'currentcomp')){//set current comp
		console.log("CHANGE CURRENT COMP");
		let args = message.content.split(' ').slice(1);
		var newComp = args.join(' ');

		message.client.channels.get(compChannel).fetchMessages({around: currentCompId, limit: 1})
		.then(messages =>{
			const fetchedMsg = messages.first();
			var compTxt = "";
			newComp = newComp.toLowerCase();
			console.log("TEXT TO CHECK: "+newComp);


			if(newComp == "attk" || newComp == "attack"){
				console.log(">CHANGED TO ATTACK");
				const emoji = client.emojis.find("name", "attack");
				compTxt = "Attack** "+emoji.toString();

			}else if(newComp == "hp" || newComp == "hitpoints"){
				console.log(">CHANGED TO HITPOINTS");
				const emoji = client.emojis.find("name", "hitpoints");
				compTxt = "Hitpoints** "+emoji.toString();

			}else if(newComp == "str" || newComp == "strength"){
				console.log(">CHANGED TO STRENGTH");
				const emoji = client.emojis.find("name", "strength");
				compTxt = "Strength** "+emoji.toString();

			}else if(newComp == "agil" || newComp == "agility"){
				console.log(">CHANGED TO AGILITY");
				const emoji = client.emojis.find("name", "agility");
				compTxt = "Agility** "+emoji.toString();

			}else if(newComp == "mining" || newComp == "mine"){
				console.log(">CHANGED TO MINING");
				const emoji = client.emojis.find("name", "mining");
				compTxt = "Mining** "+emoji.toString();

			}else if(newComp == "smith" || newComp == "smithing"){
				console.log(">CHANGED TO SMITH");
				const emoji = client.emojis.find("name", "smithing");
				compTxt = "Smithing** "+emoji.toString();

			}else if(newComp == "def" || newComp == "defence" || newComp == "defense"){
				console.log(">CHANGED TO DEFENCE");
				const emoji = client.emojis.find("name", "defence");
				compTxt = "Defence** "+emoji.toString();

			}else if(newComp == "herb" || newComp == "herblore"){
				console.log(">CHANGED TO HERBLORE");
				const emoji = client.emojis.find("name", "herblore");
				compTxt = "Herblore** "+emoji.toString();

			}else if(newComp == "fish" || newComp == "fishing"){
				console.log(">CHANGED TO FISHING");
				const emoji = client.emojis.find("name", "fishing");
				compTxt = "Fishing** "+emoji.toString();

			}else if(newComp == "range" || newComp == "ranged" ){
				console.log(">CHANGED TO RANGED");
				const emoji = client.emojis.find("name", "ranged");
				compTxt = "Ranged** "+emoji.toString();

			}else if(newComp == "thiev" || newComp == "thieving"){
				console.log(">CHANGED TO THIEVING");
				const emoji = client.emojis.find("name", "thieving");
				compTxt = "Thieving** "+emoji.toString();

			}else if(newComp == "cook" || newComp == "cooking" ){
				console.log(">CHANGED TO COOKING");
				const emoji = client.emojis.find("name", "cooking1");
				compTxt = "Cooking** "+emoji.toString();

			}else if(newComp == "pray" || newComp == "prayer"){
				console.log(">CHANGED TO PRAYER");
				const emoji = client.emojis.find("name", "prayer");
				compTxt = "Prayer** "+emoji.toString();

			}else if(newComp == "craft" || newComp == "crafting"){
				console.log(">CHANGED TO CRAFTING");
				const emoji = client.emojis.find("name", "crafting");
				compTxt = "Crafting** "+emoji.toString();

			}else if(newComp == "fm" || newComp == "firemaking"){
				console.log(">CHANGED TO FIREMAKING");
				const emoji = client.emojis.find("name", "firemaking");
				compTxt = "Firemaking** "+emoji.toString();

			}else if(newComp == "magic" || newComp == "mage"){
				console.log(">CHANGED TO MAGIC");
				const emoji = client.emojis.find("name", "magic");
				compTxt = "Magic** "+emoji.toString();

			}else if(newComp == "fletch" || newComp == "fletching"){
				console.log(">CHANGED TO FLETCHING");
				const emoji = client.emojis.find("name", "fletching");
				compTxt = "Fletching** "+emoji.toString();

			}else if(newComp == "wc" || newComp == "woodcutting"){
				console.log(">CHANGED TO WOODCUTTING");
				const emoji = client.emojis.find("name", "woodcutting");
				compTxt = "Woodcutting** "+emoji.toString();

			}else if(newComp == "rc" || newComp == "runecrafting"){
				console.log(">CHANGED TO RUNECRAFTING");
				const emoji = client.emojis.find("name", "runecrafting");
				compTxt = "Runecrafting** "+emoji.toString();

			}else if(newComp == "slay" || newComp == "slayer"){
				console.log(">CHANGED TO SLAYER");
				const emoji = client.emojis.find("name", "slayer");
				compTxt = "Slayer** "+emoji.toString();

			}else if(newComp == "farm" || newComp == "farming"){
				console.log(">CHANGED TO FARMING");
				const emoji = client.emojis.find("name", "farming");
				compTxt = "Farming** "+emoji.toString();

			}else if(newComp == "cons" || newComp == "construction"){
				console.log(">CHANGED TO CONSTRUCTION");
				const emoji = client.emojis.find("name", "construction1");
				compTxt = "Construction** "+emoji.toString();

			}else if(newComp == "hunt" || newComp == "hunter"){
				console.log(">CHANGED TO HUNTER");
				const emoji = client.emojis.find("name", "hunter");
				compTxt ="Hunter** "+emoji.toString();

			}else{
				compTxt = " **";
			}

			fetchedMsg.edit("**Current XP Competition: "+compTxt);
		});
	}else if(message.content.startsWith(prefix + 'currentcml')){//set current cml
		console.log("CHANGE CURRENT CML");
		let args = message.content.split(' ').slice(1);
		var newCml = args.join(' ');

		message.client.channels.get(compChannel).fetchMessages({around: currentCmlId, limit: 1})
		.then(messages =>{
			const fetchedMsg = messages.first();

			fetchedMsg.edit("**CML:** <"+newCml+">");
		});
	}else if(message.content.startsWith(prefix + 'lastcomp')){//set last comp
		console.log("CHANGE LAST COMP");
		let args = message.content.split(' ').slice(1);
		var newOldComp = args.join(' ');
		message.client.channels.get(compChannel).fetchMessages({around: lastCompId, limit: 1})
		.then(messages =>{
			const fetchedMsg = messages.first();
			var compTxt = "";
			newComp = newOldComp.toLowerCase();
			console.log("TEXT TO CHECK: "+newComp);
			if(newComp == "attk" || newComp == "attack"){
				console.log(">CHANGED TO ATTACK");
				const emoji = client.emojis.find("name", "attack");
				compTxt = "Attack** "+emoji.toString();

			}else if(newComp == "hp" || newComp == "hitpoints"){
				console.log(">CHANGED TO HITPOINTS");
				const emoji = client.emojis.find("name", "hitpoints");
				compTxt = "Hitpoints** "+emoji.toString();

			}else if(newComp == "str" || newComp == "strength"){
				console.log(">CHANGED TO STRENGTH");
				const emoji = client.emojis.find("name", "strength");
				compTxt = "Strength** "+emoji.toString();

			}else if(newComp == "agil" || newComp == "agility"){
				console.log(">CHANGED TO AGILITY");
				const emoji = client.emojis.find("name", "agility");
				compTxt = "Agility** "+emoji.toString();

			}else if(newComp == "mining" || newComp == "mine"){
				console.log(">CHANGED TO MINING");
				const emoji = client.emojis.find("name", "mining");
				compTxt = "Mining** "+emoji.toString();

			}else if(newComp == "smith" || newComp == "smithing"){
				console.log(">CHANGED TO SMITH");
				const emoji = client.emojis.find("name", "smithing");
				compTxt = "Smithing** "+emoji.toString();

			}else if(newComp == "def" || newComp == "defence" || newComp == "defense"){
				console.log(">CHANGED TO DEFENCE");
				const emoji = client.emojis.find("name", "defence");
				compTxt = "Defence** "+emoji.toString();

			}else if(newComp == "herb" || newComp == "herblore"){
				console.log(">CHANGED TO HERBLORE");
				const emoji = client.emojis.find("name", "herblore");
				compTxt = "Herblore** "+emoji.toString();

			}else if(newComp == "fish" || newComp == "fishing"){
				console.log(">CHANGED TO FISHING");
				const emoji = client.emojis.find("name", "fishing");
				compTxt = "Fishing** "+emoji.toString();

			}else if(newComp == "range" || newComp == "ranged" ){
				console.log(">CHANGED TO RANGED");
				const emoji = client.emojis.find("name", "ranged");
				compTxt = "Ranged** "+emoji.toString();

			}else if(newComp == "thiev" || newComp == "thieving"){
				console.log(">CHANGED TO THIEVING");
				const emoji = client.emojis.find("name", "thieving");
				compTxt = "Thieving** "+emoji.toString();

			}else if(newComp == "cook" || newComp == "cooking" ){
				console.log(">CHANGED TO COOKING");
				const emoji = client.emojis.find("name", "cooking1");
				compTxt = "Cooking** "+emoji.toString();

			}else if(newComp == "pray" || newComp == "prayer"){
				console.log(">CHANGED TO PRAYER");
				const emoji = client.emojis.find("name", "prayer");
				compTxt = "Prayer** "+emoji.toString();

			}else if(newComp == "craft" || newComp == "crafting"){
				console.log(">CHANGED TO CRAFTING");
				const emoji = client.emojis.find("name", "crafting");
				compTxt = "Crafting** "+emoji.toString();

			}else if(newComp == "fm" || newComp == "firemaking"){
				console.log(">CHANGED TO FIREMAKING");
				const emoji = client.emojis.find("name", "firemaking");
				compTxt = "Firemaking** "+emoji.toString();

			}else if(newComp == "magic" || newComp == "mage"){
				console.log(">CHANGED TO MAGIC");
				const emoji = client.emojis.find("name", "magic");
				compTxt = "Magic** "+emoji.toString();

			}else if(newComp == "fletch" || newComp == "fletching"){
				console.log(">CHANGED TO FLETCHING");
				const emoji = client.emojis.find("name", "fletching");
				compTxt = "Fletching** "+emoji.toString();

			}else if(newComp == "wc" || newComp == "woodcutting"){
				console.log(">CHANGED TO WOODCUTTING");
				const emoji = client.emojis.find("name", "woodcutting");
				compTxt = "Woodcutting** "+emoji.toString();

			}else if(newComp == "rc" || newComp == "runecrafting"){
				console.log(">CHANGED TO RUNECRAFTING");
				const emoji = client.emojis.find("name", "runecrafting");
				compTxt = "Runecrafting** "+emoji.toString();

			}else if(newComp == "slay" || newComp == "slayer"){
				console.log(">CHANGED TO SLAYER");
				const emoji = client.emojis.find("name", "slayer");
				compTxt = "Slayer** "+emoji.toString();

			}else if(newComp == "farm" || newComp == "farming"){
				console.log(">CHANGED TO FARMING");
				const emoji = client.emojis.find("name", "farming");
				compTxt = "Farming** "+emoji.toString();

			}else if(newComp == "cons" || newComp == "construction"){
				console.log(">CHANGED TO CONSTRUCTION");
				const emoji = client.emojis.find("name", "construction1");
				compTxt = "Construction** "+emoji.toString();

			}else if(newComp == "hunt" || newComp == "hunter"){
				console.log(">CHANGED TO HUNTER");
				const emoji = client.emojis.find("name", "hunter");
				compTxt ="Hunter** "+emoji.toString();

			}else{
				compTxt = " **";
			}

			fetchedMsg.edit("**Last Event: "+compTxt);
		});
	}else if(message.content.startsWith(prefix + 'lastcml')){//set last cml
		console.log("CHANGE LAST CML");
		let args = message.content.split(' ').slice(1);
		var newCml = args.join(' ');

		message.client.channels.get(compChannel).fetchMessages({around: lastCmlId, limit: 1})
		.then(messages =>{
			const fetchedMsg = messages.first();

			fetchedMsg.edit("**Last XP Event:** <"+newCml+">");
		});
	}else if(message.content.startsWith(prefix + 'winner1')){//set winner 1
		console.log("CHANGE 1ST PLACE");
		let args = message.content.split(' ').slice(1);
		var newWinner = args.join(' ');

		message.client.channels.get(compChannel).fetchMessages({around: firstPlaceId, limit: 1})
		.then(messages =>{
			const fetchedMsg = messages.first();

			fetchedMsg.edit("**1st Place** "+newWinner);
		});
	}else if(message.content.startsWith(prefix + 'winner2')){//set winner 2
		console.log("CHANGE 2ND PLACE");
		let args = message.content.split(' ').slice(1);
		var newWinner = args.join(' ');

		message.client.channels.get(compChannel).fetchMessages({around: secondPlaceId, limit: 1})
		.then(messages =>{
			const fetchedMsg = messages.first();

			fetchedMsg.edit("**2nd Place** "+newWinner);
		});
	}else if(message.content.startsWith(prefix + 'winner3')){//set winner 3
		console.log("CHANGE 3RD PLACE");
		let args = message.content.split(' ').slice(1);
		var newWinner = args.join(' ');

		message.client.channels.get(compChannel).fetchMessages({around: thirdPlaceId, limit: 1})
		.then(messages =>{
			const fetchedMsg = messages.first();

			fetchedMsg.edit("**3rd Place** "+newWinner);
		});
	}else if(message.content.startsWith(prefix + 'claimed1')){//set winner1 claimed
		console.log("CHANGE CLAIMED 1");
		let args = message.content.split(' ').slice(1);
		var isClaimed = args.join(' ');

		message.client.channels.get(compChannel).fetchMessages({around: firstClaimedId, limit: 1})
		.then(messages =>{
			const fetchedMsg = messages.first();

			isClaimed = isClaimed.toLowerCase();

			if(isClaimed == "true" || isClaimed == "claimed" || isClaimed == "yes"){
					let claimed = message.guild.roles.find("name", "CLAIMED");
					fetchedMsg.edit("**4M PRIZE:** "+claimed.toString());
			}else if(isClaimed == "false" || isClaimed == "not" || isClaimed == "not claimed" || isClaimed == "no"){
					let notclaimed = message.guild.roles.find("name", "NOT CLAIMED");
					fetchedMsg.edit("**4M PRIZE:** "+notclaimed.toString());
			}else{
				// DO NOTHING
			}


		});
	}else if(message.content.startsWith(prefix + 'claimed2')){//set winner2 claimed
		console.log("CHANGE CLAIMED 2");
		let args = message.content.split(' ').slice(1);
		var isClaimed = args.join(' ');

		message.client.channels.get(compChannel).fetchMessages({around: secondClaimedId, limit: 1})
		.then(messages =>{
			const fetchedMsg = messages.first();

			isClaimed = isClaimed.toLowerCase();

			if(isClaimed == "true" || isClaimed == "claimed" || isClaimed == "yes"){
				let claimed = message.guild.roles.find("name", "CLAIMED");
				fetchedMsg.edit("**2M PRIZE:** "+claimed.toString());
			}else if(isClaimed == "false" || isClaimed == "not" || isClaimed == "not claimed" || isClaimed == "no"){
					let notclaimed = message.guild.roles.find("name", "NOT CLAIMED");
					fetchedMsg.edit("**2M PRIZE:** "+notclaimed.toString());
			}else{
				// DO NOTHING
			}


		});
	}else if(message.content.startsWith(prefix + 'claimed3')){//set winner3 claimed
		console.log("CHANGE CLAIMED 3");
		let args = message.content.split(' ').slice(1);
		var isClaimed = args.join(' ');

		message.client.channels.get(compChannel).fetchMessages({around: thirdClaimedId, limit: 1})
		.then(messages =>{
			const fetchedMsg = messages.first();

			isClaimed = isClaimed.toLowerCase();

			if(isClaimed == "true" || isClaimed == "claimed" || isClaimed == "yes"){
				let claimed = message.guild.roles.find("name", "CLAIMED");
				fetchedMsg.edit("**1M PRIZE:** "+claimed.toString());
			}else if(isClaimed == "false" || isClaimed == "not" || isClaimed == "not claimed" || isClaimed == "no"){
					let notclaimed = message.guild.roles.find("name", "NOT CLAIMED");
					fetchedMsg.edit("**1M PRIZE:** "+notclaimed.toString());
			}else{
				// DO NOTHING
			}


		});
	}

});

//HEROKU
client.login(process.env.BOT_TOKEN);
