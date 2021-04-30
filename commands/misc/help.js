module.exports = {
	name: "help",
	description: "This command",
	aliases: ["commands"],
    usage: "[category | command]",
	execute(message, args) {
        const fs = require("fs");
        const Discord = require("discord.js");
		const { prefix } = require("../../config.json");

        const commandFolders = fs.readdirSync("commands");
        var embed = new Discord.MessageEmbed()
            .setColor("#00ff1e")

        // Category help
        if(commandFolders.includes(args[0])) {
            const commandFiles = fs.readdirSync(`commands/${args[0]}`).filter(file => file.endsWith('.js'));

            embed.setTitle(`${args[0]} help`);

            for(const file of commandFiles) {
                const command = require(`../${args[0]}/${file}`);
                
                embed.addField(`${prefix}${command.name} ${command.usage}`, command.description, false);
            }

            message.channel.send(embed);
        
        // Help
        } else {
            embed.setTitle("Help");

            for(const folder of commandFolders) {
                embed.addField(folder, `${prefix}help ${folder}`, true);
            }
            message.channel.send(embed);
        }
        
	},
};