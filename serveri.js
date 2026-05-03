require('dotenv').config();
const { Client, GatewayIntentBits, Collection, REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');
const express = require('express');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.commands = new Collection();

const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter(f => f.endsWith('.js'));
const commandsData = [];
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.data.name, command);
  commandsData.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
(async () => {
  try {
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commandsData });
    console.log('✅ Slash-komennot rekisteröity!');
  } catch (err) {
    console.error('❌ Virhe:', err);
  }
})();

client.once('ready', () => {
  console.log(`✅ Botti käynnissä: ${client.user.tag}`);
  client.user.setActivity('Rust 🎮', { type: 0 });
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;
  const command = client.commands.get(interaction.commandName);
  if (!command) return;
  try {
    await command.execute(interaction);
  } catch (err) {
    console.error(err);
    await interaction.reply({ content: '❌ Virhe!', ephemeral: true });
  }
});

const app = express();
app.get('/', (req, res) => res.send('🎮 Rust Bot käynnissä!'));
app.listen(process.env.PORT || 3000);

client.login(process.env.DISCORD_TOKEN);
