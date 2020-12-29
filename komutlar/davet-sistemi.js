const Discord = require('discord.js')

exports.run = function(client, message, args) {
  
  
const kinda = new Discord.MessageEmbed() 
                            
.setTitle("Orewaousama Bot Davet")
.setDescription("**Botun Davet Linki :** [Davet Et](https://discord.com/oauth2/authorize?client_id=786120248142987304&scope=bot&permissions=536870920)\n**Botun Destek Sunucusu :** [Katıl](https://discord.gg/kxfVVs8)")
.setColor("GREEN")

return message.channel.send(kinda)
}

exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["botu-ekle"],
permLevel: 0
  
};
  
exports.help = {
name: 'davet'
};