const ccxt = require('ccxt');
const moment = require('moment');

async function main() {
    const binance = new ccxt.binance();

    const prices = await binance.fetchOHLCV('BTC/USDT', '1m', undefined, 20);
    const bPrices = prices.map(price => {
        return {
            timestamp: moment(price[0]).format(),
            open: price[1], high: price[2], low: price[3], close: price[4], volume: price[5]
        }
    })
    console.log(bPrices);
}

main()