module.exports = {
	name: "joke",
	description: "Some jokes",
	usage: "",
	execute(message, args) {
		const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
		const xhttp = new XMLHttpRequest();
		xhttp.open("GET", "https://official-joke-api.appspot.com/random_joke", false);
		xhttp.send();

		json = JSON.parse(xhttp.responseText)
        
		message.channel.send(json.setup)
		setTimeout(() => { message.channel.send(json.punchline) }, 3000)
	},
};