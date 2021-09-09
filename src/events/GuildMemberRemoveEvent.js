// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberRemove
  const BaseEvent = require('../utils/structures/BaseEvent');
  const discord = require('discord.js')
module.exports = class GuildMemberRemoveEvent extends BaseEvent {
  constructor() {
    super('guildMemberRemove');
  }
  
  async run(client, member) {
    const welcomebed = new discord.MessageEmbed()
    .setTitle('Welcome!')
    .setTimestamp()
    .setFooter("jave")
    .setDescription('Cya, ' + member.user.tag + "! Enjoy your future endeavors!")
    .setColor("ORANGE")
  member.guild.channels.cache.find(c => c.name === "welcome").send(welcomebed);
  }
}