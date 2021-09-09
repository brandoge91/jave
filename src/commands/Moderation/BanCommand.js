const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('Ban', 'Moderation', []);
  }

  run(client, message, args) {
    message.channel.send('Ban command works');
  }
}