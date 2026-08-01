# 🐈‍⬛ KITTY BOT

> A modern, open-source Discord.js v14 bot built with **TypeScript**, designed to teach developers how to create scalable Discord bots following real-world architecture and best practices.

---

## 📚 Documentation

Before getting started, check the project documentation.

- 📖 **Version History:** [CHANGELOG.md](./CHANGELOG.md)
- 🤝 **Contributing Guide:** [CONTRIBUTING.md](./CONTRIBUTING.md)

---

# What is KITTY BOT?

KITTY BOT is the official Discord bot developed for the **NIZOLAX** programming community.

Unlike many Discord bot repositories that only provide source code, this project aims to become a complete educational resource.

The goal is not only to publish working code, but also to explain **why** every architectural decision has been made.

Throughout the documentation you'll learn about:

- Discord.js v14
- TypeScript
- Scalable project architecture
- Command handlers
- Event handlers
- Custom Client
- Modern ESM development
- Best practices used in production bots

---

# Philosophy

This repository is intended to teach developers **how to build their own Discord bot**, not simply copy one.

Instead of cloning the repository and changing a few files, you're encouraged to follow the documentation and recreate the project yourself.

Learning by building is far more valuable than copying code.

---

# Getting Started

Clone the repository:

```bash
git clone https://github.com/NickHubDev/PUBLIC-KITTY-BOT.git
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

---

# Requirements

The project currently uses:

- Node.js **24.16.0** or newer
- TypeScript
- Discord.js v14
- Chalk

Future releases will always target the latest stable version of Discord.js whenever possible.

---

# Project Structure

```
src
│
├── commands/
│   ├── moderation/
│   ├── utility/
│   └── fun/
│
├── events/
│   ├── client/
│   ├── guild/
│   └── interaction/
│
├── handlers/
├── services/
├── database/
├── structures/
└── utils/
```

The architecture has been designed to keep every module independent and easy to maintain as the project grows.

---

# Current Features

- ✅ Slash Commands
- ✅ Modular Event Handler
- ✅ Command Handler
- ✅ Custom Client
- ✅ TypeScript
- ✅ ESM Support
- ✅ Path Aliases
- ✅ Clean Project Structure

---

# Planned Features

The roadmap currently includes:

- AI Translation Commands
- Moderation System
- Logging System
- Ticket System
- Report System
- Database Integration
- Role Management
- Utility Commands
- Dashboard (under consideration)

---

# Can I use KITTY BOT?

Absolutely.

This project is completely open source and intended to be used as a learning resource.

However, it is **strongly recommended** that you understand the code before modifying it.

The objective is to help developers learn how a professional Discord bot is structured rather than providing a ready-to-use product.

---

# Community

KITTY BOT has already been tested in several communities, including:

- NIZOLAX COMMUNITY
- The Whites
- NIZOD

---

# Database

The database solution is currently under evaluation.

Possible candidates include:

- PostgreSQL
- MySQL
- MongoDB

---

# APIs

Current APIs:

- Discord API
- Google Translate API *(planned)*

Additional APIs may be added in future releases.

---

# Contributing

Contributions are always welcome.

Please read **CONTRIBUTING.md** before opening an issue or submitting a Pull Request.

---

# License

This project is distributed as an open-source educational resource.

Please respect the license and give proper credit if you use parts of this project.

---

Made with ❤️ by **NIZOLAX**