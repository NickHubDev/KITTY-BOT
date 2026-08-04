# Changelog

All notable changes to this project will be documented in this file.

# [0.2.0] - 2026/08/04

## ✨ Added

### Translate Command

There be add a command for translate messages to every single type of language,
this make the community more accesible for everyone.

### clearChannel Command

One of our more util command, this command still in test time,
so is not finished and can't be use eassily, we are working for fix 
and make better this command.

---

# [0.1.0] - 2026/08/01

## 🚀 Initial Release

This is the first public version of the project.

The foundation of the bot has been implemented using **TypeScript**, **Discord.js**, and a modular architecture designed for scalability and maintainability.

---

## ✨ Added

### Core Architecture

- Added a custom `CustomClient` class extending the default Discord.js `Client`.
- Added a modular command handler.
- Added an event handler.
- Added support for absolute imports using TypeScript path aliases.
- Added full ESM compatibility.

### Slash Commands

Implemented the first slash commands:

- `/check`
- `/info`

### Development

- Configured TypeScript.
- Configured ESM modules.
- Added automatic command registration.
- Added automatic event loading.

---

## 🔄 Changed

### Command Registration

The command handler now stores the entire command object instead of only its execute function.

**Before**

```ts
client.commands.set(create.data.name, create.execute);
```

**Now**

```ts
client.commands.set(create.data.name, create);
```

This allows easier access to every property of a command (`data`, `execute`, metadata, permissions, cooldowns, etc.) and makes the project easier to extend.

---

### Path Resolution

Migrated from the CommonJS `__dirname` approach to the modern ESM implementation using `import.meta.url`.

```ts
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

This approach is fully compatible with modern versions of Node.js and TypeScript.

---

## 🐛 Fixed

### interactionCreate

Fixed a bug where commands were incorrectly registered inside the command collection.

The handler attempted to register a property that did not exist in the expected structure.

This prevented commands from executing correctly.

---

## ⚙️ Configuration

### TypeScript Path Aliases

Added support for absolute imports.

```json
{
    "compilerOptions": {
        "paths": {
            "@/*": ["./src/*"],
            "#/*": ["./*"]
        }
    }
}
```

Example:

```ts
import client from "@/structures/customClient";
```

instead of

```ts
import client from "../../../structures/customClient";
```

This greatly improves readability and project maintenance.

---

## 📚 Documentation

The following topics are now documented:

- Custom Client
- Event Handler
- Command Handler
- Slash Commands
- TypeScript ESM setup
- Absolute Imports

---

## 📌 Current Commands

### `/check`

Simple health-check command used to verify that the bot is online.

---

### `/info`

Retrieves basic information about a Discord user using their User ID.

Returned information includes:

- User ID
- Username

---

## 🔮 Planned Features

The next releases are expected to include:

- AI-powered translation command.
- Moderation GUI system.
- Report management.
- Ban management.
- Ticket system.
- Logging system.
- Database integration.
- Permission framework.
- Role management utilities.

---

## 💡 Design Decisions

### Why a Custom Client?

A real-world Discord bot usually requires much more than the default `Client` provided by Discord.js.

Using a custom client allows the project to centralize:

- Collections
- Database connections
- Configuration
- Utilities
- Services
- Cached data

This keeps the architecture organized and scalable as the project grows.

---

## 📖 Related Documentation

For detailed explanations, visit the documentation pages:

- `docs/custom-client.md`
- `docs/command-handler.md`
- `docs/event-handler.md`
- `docs/slash-commands.md`
- `docs/typescript-esm.md`

---

## ❤️ Contributing

Contributions are always welcome.

Please read **[CONTRIBUTING.md](/CONTRIBUTING.md)** before opening an issue or submitting a pull request.