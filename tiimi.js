const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder().setName('ping').setDescription('Testaa botin toiminta'),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setColor(0xCE3720)
      .setTitle('🎮 Rust Bot')
      .setDescription(`✅ Botti toimii!\n**Ping:** ${interaction.client.ws.ping}ms`)
      .setTimestamp();
    await interaction.reply({ embeds: [embed] });
  }
};
