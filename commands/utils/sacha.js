const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'sacha',
  category: 'utils',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'sacha',
  examples: ['ftgsacha'],
  description: 'ftgsacha',

  async runInteraction(client, interaction) {

    const embed = new MessageEmbed()
      .setTitle('FtgSacha')
      .setColor('#00a3b5')
    const ftg = await interaction.reply({ embeds: [embed] });
  },
};