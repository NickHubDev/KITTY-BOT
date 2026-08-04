import { EmbedBuilder, SlashCommandBuilder } from "discord.js";
import chalk from "chalk";

const c = chalk

export default {
    data: new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription('Proporciona la información necesaria sobre un usuario')
    .addUserOption(options => 
        options
        .setName('user')
        .setDescription('Usuario al que quieres aplicar el comando')
        .setRequired(true)
    ),

    async execute(interaction) {
        const user = interaction.options.getUser('user');
        
        const info = {
            name : user.username,
            globalName : user.globalName,
            id : user.id,
            dis : user.discriminator,
            whenCreated : user.createdAt,
            bot : user.bot
        }

        const embed = new EmbedBuilder()
        .setAuthor({
            name: 'KITTY BOT',
        })
        .setURL('https://github.com/NickHubDev/KITTY-BOT')
        .setColor([255, 255, 255])
        .setTitle('**DATOS OBTENIDOS**')
        .setDescription(`Hemos descubierto ciertos datos sobre ***${info.globalName}*** que podrían interesarte:`)
        .addFields(
            {name: `**Nombre de Usuario: **`, value: `${info.name}`, inline: false},
            {name: `**Nombre Global de Usuario: **`, value: `${info.globalName}`, inline: false},
            {name: `**Id: **`, value: `${info.id}`, inline: false},
            {name: `**Discriminador: **`, value: `${info.dis}`, inline: false},
            {name: `**Cuando se Creo el User: **`, value: `${info.whenCreated}`, inline: false},
            {name: `**¿Es un bot?: **`, value: `${info.bot}`, inline: false},
        )
        .setFooter({
            text: 'This command can only be use by Moderators.'
        })

        interaction.reply({
            ephemeral: true,
            allowedMentions: null,
            content: `Here's the info:\n`,
            embeds: [embed]
        });
    }
}