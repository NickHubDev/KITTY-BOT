import { SlashCommandBuilder } from "discord.js";
import chalk from "chalk";
import 'dotenv/config';

const c = chalk

export default {
    data: new SlashCommandBuilder()
    .setName('translate')
    .setDescription('Traduce un texto al idioma que quieras')
    .addStringOption(options => (
        options
        .setName('text')
        .setDescription('Texto a traducir')
        .setRequired(true)
    ))
    .addStringOption(options => (
        options
        .setName('original')
        .setDescription('Idioma original del texto')
        .setRequired(true)
    ))
    .addStringOption(options => (
        options
        .setName('translate')
        .setDescription('Idioma al que se quiere traducir el texto')
        .setRequired(true)
    )),

    async execute(interaction) {
        const text = interaction.options.getString('text');
        const oLanguage = interaction.options.getString('original'); 
        const tLanguage = interaction.options.getString('translate');

        const url = "https://deep-translate1.p.rapidapi.com/language/translate/v2";

        const options = {
            method: "POST",
            headers: {
                'x-rapidapi-key': process.env.translateApiKey,
                'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                q: text,
                source: oLanguage,
                target: tLanguage
            })
        }
        
        try {
            const response = await fetch(url, options);
            const petition = await response.json();
            const fText = petition.data.translations.translatedText[0];
            interaction.reply(fText)
            console.log(c.bold.cyan(`Text succesfully translate from:\n{Original Text} : ${text}\n{Translated Text} : ${fText}`));
        } catch (err) {
            interaction.reply('**There was an error**, we are checking it out!')
            console.error(c.bold.red(err));
        }
    }
}

