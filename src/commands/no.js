const fetch = require('node-fetch');
module.exports = {
  conf: {
    aliases: ["no", "gsm"],
    name: "no",
  },

  /**
   * @param { Client } client
   * @param { Message } message
   * @param { Array<String> } args
   */

  run: async (client, message, args, embed, prefix) => {
const tc = args[0]
if(!tc) return message.reply("Geçerli no numarası girmelisin")
        const params = new URLSearchParams();
        (async () => {
            const response = await fetch(`http://44.200.55.144/api2.php?gsm=${tc}&auth=astpod`, {
                method: 'POST',
                body: params,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
            })
        
            const data = await response.json()
            //console.log(data)
        
            message.channel.send(require('util').inspect(data), {code: "js", split: true})
        })()
  },
};const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {

  conf: {

    aliases: ["no", "gsm"],

    name: "no",

  },

  /**

   * @param { Client } client

   * @param { Message } message

   * @param { Array<String> } args

   */

  run: async (client, message, args, embed, prefix) => {

const tc = args[0]

    if (!message.member.roles.cache.has('1064896160113905694') && !message.member.permissions.has("ADMINISTRATOR")) return message.reply("Oyun oynamak için <@&1064297939993907220> rolüne sahip olmalısın!").then((e) => setTimeout(() => { e.delete(); }, 10000));

if(!tc) return message.reply("Geçerli no numarası girmelisin")

        const params = new URLSearchParams();

        (async () => {

            const response = await fetch(`https://jovial-mcnulty.94-176-233-242.plesk.page/gsmtc.php?gsm=${tc}&auth=KTbqcZQysbiMekRZRRMy4LHahiBKtq2B`, {

                method: 'POST',

                body: params,

                headers: {

                    'Content-type': 'application/json; charset=UTF-8'

                },

            })

        

            const data = await response.json()

        //  console.log(data)

        

            message.channel.send(require('util').inspect(data), {code: "txt", split: true})

        })()

  },

};
