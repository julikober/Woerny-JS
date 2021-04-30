module.exports = {
	name: "germanjoke",
	description: "Some german jokes",
	usage: "",
	execute(message, args) {
		const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
		const xhttp = new XMLHttpRequest();
		xhttp.open("GET", "https://jokeapi.jjtv.repl.co/joke/", false);
		xhttp.send();

        message.channel.send(xhttp.responseText.replace(/ue/g, "ü").replace(/oe/g, "ö").replace(/ae/g, "ä").slice(1, -2))
        
	},
};