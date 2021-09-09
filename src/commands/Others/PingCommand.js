const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js')

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'Others', []);
  }

  run(client, message, args) {
    const pingembed = new discord.MessageEmbed()
    .setTitle('🏓 Pong!')
    .setDescription(`Latency is  ${Date.now() - message.createdTimestamp}ms`)
    .setTimestamp()
    .setColor('ORANGE')
    .setFooter("Jave")
    message.channel.send(pingembed)
  }
}