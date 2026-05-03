<div align="center">

# 🎮 rust-discord-bot

**Rust+ companion app integration for Discord**

![Node.js](https://img.shields.io/badge/node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Discord.js](https://img.shields.io/badge/discord.js-v14-5865F2?style=for-the-badge&logo=discord&logoColor=white)
![Railway](https://img.shields.io/badge/railway-deployed-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)

</div>

---

Connects your Rust server to Discord via the Rust+ companion app. Get live server stats, team updates, and event notifications without alt-tabbing.

<br>

## Features

```
🗺️  Server info       — map, players online, in-game time
👥  Team status       — who's online, dead, or AFK
🚁  Event alerts      — Heli, Cargo, Chinook, Oil Rig
🔌  Smart Switches    — toggle from Discord
💬  Chat relay        — read/write in-game chat
```

<br>

## Commands

| Command | Description |
|:--------|:------------|
| `/ping` | Check latency |
| `/serveri` | Live server info |
| `/tiimi` | Team status |
| `/switch <name> <on/off>` | Control a Smart Switch |

<br>

## Getting started

```bash
git clone https://github.com/your-username/rust-discord-bot
cd rust-discord-bot
npm install
cp .env.example .env
```

Edit `.env` with your tokens, then:

```bash
npm start
```

<br>

## Environment variables

| Variable | Description |
|:---------|:------------|
| `DISCORD_TOKEN` | Your bot token |
| `CLIENT_ID` | Your application ID |
| `RUST_SERVER_IP` | Rust server IP |
| `RUST_SERVER_PORT` | Default `28017` |
| `RUST_PLAYER_TOKEN` | Token from Rust+ app |
| `RUST_PLAYER_STEAMID` | Your Steam ID |

<br>

## Deploy

Hosted on [Railway](https://railway.app) — connect your GitHub repo and add the environment variables. Done.

<br>

---

<div align="center">
<sub>MIT License</sub>
</div>
