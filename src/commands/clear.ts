import chalk from "chalk";
import { ChannelType, MessageManager, SlashCommandBuilder, TextChannel } from "discord.js";
import 'dotenv/config'

const c = chalk;

export default {
    data: new SlashCommandBuilder()
    .setName('clearchannel')
    .setDescription('Limpia la cantidad de mensajes de un usuario que desees con un solo comando')
    .addUserOption(options => 
        options
        .setName('user')
        .setDescription('Proporciona el usuario del que quieres eliminar los mensajes')
        .setRequired(true)
    )
    .addNumberOption(options =>
        options
        .setName('number')
        .setDescription('Cantidad de mensajes que deseas borrar')
        .setRequired(true)
    )
    .addChannelOption(options => 
        options
        .addChannelTypes(ChannelType.GuildText)
        .setName('channel')
        .setDescription('Canal del que quieres eliminar los mensajes')
        .setRequired(true)
    ),
    
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });

        const channel = interaction.options.getChannel("channel", true);

        try {
            const deleted = await channel.bulkDelete(5);

            console.log(deleted);

            await interaction.editReply(
                `Se han eliminado ${deleted.size} mensajes correctamente.`
            );

        } catch (err) {
            console.error(err);

            await interaction.editReply(
                "Ha ocurrido un error al eliminar los mensajes."
            );
        }
    }
}