const BaseEvent = require('../../utils/structures/BaseEvent');
const cron = require('node-cron');
const { Message } = require('discord.js');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');

  }
  async run (client) {
    console.log(client.user.tag + ' has logged in.');

    let scheduledGoodMorningMessage = new cron.schedule('00 09 * * * *', () => {
      // Specifing your guild (server) and your channel
        const guild = client.guilds.cache.get('808039105010991165');
         const regularSpot = guild.channels.cache.get('612030951219920902');
         regularSpot.send('!goodMorning');
        });
    
    let scheduledDadJokeMessage = new cron.schedule('00 13 * * * *', () => {
      // Specifing your guild (server) and your channel
          const guild = client.guilds.cache.get('808039105010991165');
          const comedyCentral = guild.channels.cache.get('702122690999222373');
          comedyCentral.send('!dadJoke');
        });
      
    let scheduledMotivationalMessage = new cron.schedule('30 12 * * * *', () => {
      // Specifing your guild (server) and your channel
         const guild = client.guilds.cache.get('808039105010991165');
         const motivationalChannel = guild.channels.cache.get('808039105547599944');
         motivationalChannel.send('!motivationalQuote');
        });
            
        // When you want to start it, use:
        scheduledMotivationalMessage.start();
        scheduledGoodMorningMessage.start();
        scheduledDadJokeMessage.start();
  }
}