import client from '#/client'
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

async function loadEvents() {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const eventsPath = path.join(__dirname, '..', 'events');
    const eventsFile = fs.readdirSync(eventsPath).filter((file) => file.endsWith('.ts'));

    for (const file of eventsFile) {
        const filePath = path.join(eventsPath, file);
        const fileUrl = pathToFileURL(filePath).href;
        const event = await import(fileUrl);
            if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
        } else {
            client.on(event.name, (...args) => event.execute(...args));
        }
    }
};

export { loadEvents };
