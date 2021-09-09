// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildMemberAdd
const BaseEvent = require('../utils/structures/BaseEvent');
const discord = require('discord.js');
module.exports = class GuildMemberAddEvent extends BaseEvent {
  constructor() {
    super('guildMemberAdd');
  }
  
  async run(client, member) {
    const welcomebed = new discord.MessageEmbed()
      .setTitle('Welcome!')
      .setTimestamp()
      .setFooter("jave")
      .setDescription('Welcome ' + member.user.tag + " to Jave! Please verify to gain access to the rest of the server!")
      .setColor("ORANGE")
    member.guild.channels.cache.find(c => c.name === "welcome").send(welcomebed);
  }
}