const { Telegraf } = require('telegraf');

const BotToken = '1588248560:AAEoTTgW3cdK56uh-4-vECLsgWr_gUadIR0';
const bot = new Telegraf(BotToken);

bot.start((ctx) => {
	ctx.reply('Welcome to chegg unblur');
});

const messages = {
	pay: `For Indian people:

Phonepe : 8220702385
Gpay : 8220702385
Paytm : 8220702385


Important

> Send payment Screenshot in which date and time are visible and should match with current date and time.

> You have to send payment Screenshot within 2-3 min of payment from one account only.

> Late payment Screenshots and if sent from two accounts will NOT BE ADDED you might lose your money

> No refund also for not following this for sending payment Screenshot

Use /code to get you payment code.
Use /price to know prices.

After payment send screenshot and payment code to owner
@laalmanoj on telegram.
You package will be added as soon as owner sees the screenshot.`,

	price: `10 Indian Rupees = 10Credits

chegg unblur Solutions:
25  Credits : 5 Solutions
50  Credits : 12 Solutions
100  Credits : 30 Solutions
160  Credits : 50 Solutions
300  Credits : 100 Solutions
450  Credits : 160 Solutions

>>>> Pay amount as per number of credits needed<<<<

****Important****

> Send payment Screenshot in which date and time are visible and should match with current date and time.

> You have to send payment Screenshot within 2-3 min of payment from one account only.

> Late payment Screenshots and if sent from two accounts will NOT BE ADDED you might lose your money

> No refund also for not following this for sending payment Screenshot


Payment:


Phonepe : 8220702385
Gpay : 8220702385
Paytm : 8220702385

Use /code to get you payment code.



After payment send screenshot and payment code to owner
@laalmanoj on telegram.
You package will be added as soon as owner sees the screenshot.`
};

bot.hears('/pay', (ctrx) => {
	ctrx.reply(messages.pay);
});
bot.hears('/price', (ctrx) => {
	ctrx.reply(messages.price);
});
bot.launch();
