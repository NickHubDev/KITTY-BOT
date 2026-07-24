# 🤖 **Roadmap de Desarrollo de KITTY-BOT**

## 1. Entender el Problema

* **¿Qué quiero crear?**

    * Quiero crear una guía básica de buenas practicas de Bots de Discord.js 14 ↑, </br>incluyendo documentación capaz de explicar mucho mejor conceptos que la documenteción oficial de Discord.js no cubre o no menciona deliberadamente.

* **¿Para quién?**

    * Este proyecto busca ser útil para cualquier persona que quiera aprender a desarrrollar un bot de Discord.js.

* **¿Qué debe hacer?**

    * Esta primera V1 debería poder crear comandos básicos como **ping** o **info**.

## 2. Planificar

### Funcionalidades

Además de esas primeras funcionalidades de comandos como ping o info,
este bot debe ser capaz de implementar **Handlers** y un cliente extendidos
que hagan el bot mucho más dinámico y de verdad bueno y capaz de ser mejorado
en un futuro.

### Requisitos

```javascript
var requeriments = { [key: 'string']
    tecnologies = "Node.js", "npm", "TypeScript", "Git"
    software = "Code Editor"
}
```

### Limitaciones

```javascript
import limitaciones from './limitaciones.ts'
import chalk from 'chalk'

console.log(chalk.bold(limitaciones))
```

```bash
('API de Discord', 'Rate Limits', 'GatewayIntents', 'Recursos del servidor' )
```

## 3. Investigar

### Tecnologías elegidas

Para este proyecto se eligiran distintas tecnologías para
un mejor desempeño:

``` json
"dependencies" = {
    "discord.js" = "V14.0",
    "dotenv" = "V1.2.2",
    "chalk" = "V5.6.2",
    "typescript" = "V7.0.2"
}

// This dependencies could be change in the future.
```

### ¿Por qué estas?

Simple, todas son necesarias para que el bot sea lo más consistente y 
este lo mejor estructurado posible. A pesar de esto, muchas personas
creeran que **chalk** es **innecesario**, pero en realidad,
cuando estamos viendo la ejecución de nuestro bot, tener los colores
separados segun la respuesta nos ayuda a descubrir como va el proceso.

## 4.Diseñar

En esta ***V1*** lo que único que se va a diseñar por el momento es
la distribución o flujo de carpetas:

### Sistema de Carpetas

```text

.gitignore
.env
index.ts
src/

|- commands
|   |
|   |
|   |- ping.ts
|   |
|   |
|   |- info.ts
| 
|- handler
|   |
|   |
|   |- commandHandler.ts
|   |   
|   |
|   |- eventHandler.ts
|
|- utils
|
|- events
|   |
|   |
|   |- readyClient.ts
|
|- structures
    |
    |
    |- customClient.ts

```

### Función de Carpetas y Archivos

* **.gitignore**

Lo usamos para que al exportar el proyecto a Github, este no exponga datos
o archivos que consideramos privados o que no se deberían dejar visibles
para evitar problemas.

* **.env**

Este archivo lo usamos para guardar las variables de entorno o **datos secretos**
de nuestro bot y así evitar exponer datos importantes.

* **index.ts**

Lo usamos para llamar a los comandos y el resto de datos y
acciones de nuestro bot, cargarlos en la API de Discord y por último
inicializar el bot.

* **src/**

Carpeta en la que almacenamos el resto de subcarpetas más importantes del proyecto.

* **src/commands/**

En esta carpeta se almacenan los comandos del bot.

* **src/handler/**

En esta carpeta se almacenan los archivos que cargan los comandos y eventos del bot.

* **src/utils/**

Carpeta en la que almacenamos utilidades que acortaran tiempo y simplificaran.
procesos de nuestro bot.

* **src/events/**

En esta carpeta al igual que en commands, almacenamos los eventos del bot.

* **src/structures/**

Esta carpeta esta pensada principalmente para almacenar el clientCustom de nuestro bot.

## 5. Arquitectura

```text
index.ts

↓

customClient.ts

↓

Handlers

↓

Events

↓ 

Commands

↓

Discord API
```

## 6. Flujo de Inicio

```text
npm run dev

↓

Carga el cliente

↓

El cliente llama a los slashCommands
y Events para tenerlos registrados.

↓

Una vez revisa la ruta y los archivos que hay en ambas
las exporta a "commands" o "const commands = new Collection()",
haciendo lo mismo con events.

↓

Una vez cargados, corre el cliente y exporta
un log con la sesión e ID del Bot para poder encontrarlo
y saber que esta activo.

↓

LISTO! A usar el Bot.
```


