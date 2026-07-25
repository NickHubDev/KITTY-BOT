import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import chalk from 'chalk';

// export const data = new SlashCommandBuilder()
//     .setName('check')
//     .setDescription('Comprueba que KITTY esta funcionando correctamente.')
    
// export async function execute(interaction:ChatInputCommandInteraction) {
//     await interaction.reply('Im Alive!');
//     console.log(chalk.bold.blue('All fine'));
// }

export default {
    data: new SlashCommandBuilder()
    .setName('check')
    .setDescription('Comprueba que KITTY esta funcionando correctamente.'),

    async execute(interaction) {
        interaction.reply('Im Alive Buddy! :D');
        console.log(chalk.bold.blue('Check command running...'));
    }
};