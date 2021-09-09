// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-channelCreate
const BaseEvent = require('../utils/structures/BaseEvent');
const discord = require('discord.js')
module.exports = class ChannelCreateEvent extends BaseEvent {
  constructor() {
    super('channelCreate');
  }
  
  async run(client, channel) {
    console.log(channel.name + ' was created.');

  }
}