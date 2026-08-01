import { GuildMember, SlashCommandBuilder } from "discord.js";
import client from '@/structures/customClient';
import chalk from "chalk";

export default {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Descubre ciertos datos sobre el usuario que quieras solo mediante su Id.')
        .addStringOption((options) => options
            .setName('id')
            .setDescription('Proporciona el id del usuario.')
            .setRequired(true)), // Hacerlo obligatorio evita errores si lo envían vacío

    async execute(interaction) {
        // 1. Obtener la ID de texto que escribió el usuario
        const inputId = interaction.options.getString('id');
        
        try {
            // 2. Buscar al usuario en la base de datos global de Discord usando la ID
            const usuario = await interaction.client.users.fetch(inputId);

            // 3. Responder con los datos obtenidos
            return interaction.reply({
                content: `**This is the info:**\n* **ID:** ${usuario.id}\n* **Username:** ${usuario.username}`,
                ephemeral: true
            });

        } catch (error) {
            // Manejar el caso de que la ID sea inválida o no exista
            console.error(chalk.red(`[Error Command Info]: No se pudo encontrar al usuario con ID ${inputId}`));
            
            return interaction.reply({
                content: `❌ No logré encontrar a ningún usuario en Discord con la ID: \`${inputId}\`. Verifica que los números sean correctos.`,
                ephemeral: true
            });
        }
    }
};
