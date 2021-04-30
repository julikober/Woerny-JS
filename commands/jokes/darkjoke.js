module.exports = {
	name: "darkjoke",
	description: "Some dark jokes",
	usage: "",
	execute(message, args) {
		const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
		const xhttp = new XMLHttpRequest();
		xhttp.open("GET", "https://v2.jokeapi.dev/joke/dark", false);
		xhttp.send();

		json = JSON.parse(xhttp.responseText)
        if(json.type === "twopart") {
            message.channel.send(json.setup);
            setTimeout(() => { message.channel.send(json.delivery) }, 4000);
        } else if(json.type === "single") {
            message.channel.send(json.single);
        } else {
            message.channel.send("Oh no! An error ocurred!");
        }
        
	},
};