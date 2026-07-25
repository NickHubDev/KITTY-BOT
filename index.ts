import { loadCommands } from '@/handlers/commandHandler';
import { loadEvents } from '@/handlers/eventHandler';'@/handlers/eventHandler';
import client from '#/client';
import 'dotenv/config';

console.log('Kitty Bot - Starting up...');

async function start() {
    await loadCommands();
    await loadEvents();
    client.login(process.env.TOKEN);
}

start();