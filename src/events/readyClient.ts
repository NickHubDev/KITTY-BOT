import client from '#/client';
import { Client } from 'discord.js';
import { Events } from 'discord.js';
import chalk from 'chalk';


// client.once(Events.ClientReady, (readyClient) => {
//     console.log(chalk.bold.magenta(`KITTY IS RUNNING AS ${readyClient.user.tag}`))
// })   

function clientReady() {
        client.once(Events.ClientReady, (readyClient: Client<true>) => {
            console.log(chalk.bold.magenta(`KITTY IS RUNNING AS ${readyClient.user.tag}`));
            readyClient.user.setStatus('online');
    }) 
}
export default clientReady();