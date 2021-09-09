const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'Moderation', []);
  }

  run(client, message, args) {
    message.channel.send('Kick command works');
  }
}