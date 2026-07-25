# 🐈‍⬛ **KITTY BOT**

**PASATE POR:** [V0](./V0.md)

### ¿Qué es KITTY BOT?

Kitty Bot es el Bot de Discord perteneciente a la comunidad de programación y desarrollo de software del creador de contenido NIZOLAX.
Este busca resolver muchas de las dudas de la actualidad en bots con Discord.js, 
y decide hacerlo de una manera muy simple, ofreciendote el código de manera limpia y gratuita.

Como explica el propio NIZOLAX, muchas de las mejores practicas de esta herramienta
no estan explicadas ni por los propios Devs del proyecto, por lo que cualquier usuario que quiera aprender todo sobre como
se desarrolla un bot de Discord con buenas practicas y documentación solo
deberá acceder al repositorio de este en: [PUBLIC-KITTY-BOT](https://github.com/NickHubDev/PUBLIC-KITTY-BOT.git).

### ¿Cómo lo uso?

NIZOLAX no recomienda copiar su repositorio y modificarlo por encima, sino
que recomienda encarecidamente que nos basemos en su repositorio para seguir la documentación
de su bot a la misma vez que vemos los ejemplos de código y programamos nuestro bot a mano.

Aunque para gente con un poco de conocimiento en el tema, 
NIZOLAX recomienda el uso de una plantilla básica para desarrollar
el bot de manera más rápida y eficiente.

[PLANTILLA](https://github.com/OfficialDelta/TypeScript-Discord.js-v14-Template)

### Requerimientos

Se recomienda hacer uso de una version de **<span style="color:#00FF00">Node.js 24.16.0 ↑</span>**, además de usar
**chalk** y **TypeScript** para que todo sea consistente y funcione a la perfección.

Este Bot esta desarrollado en Discord.js V14 al momento en el que se lee esto, pero
apenas haya una actualización de la API, este código será actualizado lo antes
posible para que el usuario pueda sacar el mayor provecho a la actualización.

### ¿Es posible usar KITTY en otros servidores?

**NO**, o al menos hasta día de hoy, ya que NIZOLAX no ha desarrollado una aplicación DashBoard para su bot, ya que
segun su filosofía: ***"Si alguien quiere mi bot, deberá saber usarlo, es código en bruto y no pienso
darlo en bandeja de plata para que llega directo a sus boquitas."***

Desde su parecer, proporcionar una dashboard haría al bot menos eficiente y personalizable,
por eso se vende como un repositorio con una estruxtura personalizable y opensource que cualquiera
pueda tocar sin limitaciones.

### Servidores que lo usan

Los servidores que han tenido la posibilidad de probarlo son:

* **NIZOLAX COMMUNITY**

* **The Whites**

* **NIZOD**

### Base de datos

La base de datos usada para este proyecto esta en elección aún.

### APIs

Por el momento se necesitaran APIs como GoogleTranslate y Discord.js

### Estructura de Carpetas

src
├─ commands
│  ├─ moderation
│  |─ utility
│  └─ fun
│
├─ events
│  ├─ client
│  ├─ guild
│  └─ message
│
├─ handlers
│
├─ services
│
├─ database
│
└─ utils