const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'dogfacts',
  aliases: [ 'dogfact', 'inu', 'df' ],
  group: 'fun',
  description: 'Generate a random useless dog facts',
  clientPermissions: [ 'EMBED_LINKS' ],
  get examples(){ return [this.name, ...this.aliases]},
  run: async (client, message) => {

    const data = await fetch('https://dog-api.kinduff.com/api/facts')
    .then(res => res.json())
    .catch(() => null);

    if (!data){
      return message.channel.send(`Server Error 5xx: Dogfact API is currently down!`);
    };

    return message.channel.send(
      new MessageEmbed()
      .setThumbnail('https://i.imgur.com/oTVVqHQ.gif')
      .setColor('GREY')
      .setDescription(data.facts)
      .setFooter(`Catfact | \©️${new Date().getFullYear()} Mai`)
    );
  }
};
