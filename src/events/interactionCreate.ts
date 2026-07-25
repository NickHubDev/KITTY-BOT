import client from '#/client';
import { Events, MessageFlags } from 'discord.js';
import chalk from 'chalk';

function interactionCreate() {
        client.on(Events.InteractionCreate, async(interaction) => {
        if (!interaction.isChatInputCommand()) return;
        
        const command = client.commands.get(interaction.commandName);

        if (!command || typeof command.execute !== 'function') {
            console.error(chalk.bold.red(`No command named as ${interaction.commandName}, please, check it out`))
            return;
        }

            try {
                await command.execute(interaction)
            } catch (err) {
                console.error(chalk.bold.red(`Whe find the error ${err}`));
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'Hubo un error al ejecutar el comando',
                        flags: MessageFlags.Ephemeral
                    });
                } else {
                    await interaction.reply({
                        content: 'Hubo un error al ejecutar el comando',
                        flags: MessageFlags.Ephemeral
                    });
                }
            }
        }
    )
}

export default interactionCreate();