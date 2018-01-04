
const bittrex = require('../node.bittrex.api');

bittrex.options({
  'verbose' : true,
});

console.log('Connecting ....');
bittrex.websockets.subscribe(['BTC-ETH','BTC-SC','BTC-ZEN'], function(data, client) {
  if (data.M === 'entireOrderbook') {
    console.log('Bittrex orderbook received for ', data.market);
    console.log('Entire orderbook: ', data.result)
  }
  if (data.M === 'updateExchangeState') {
    data.A.forEach(function(data_for) {
      console.log('Market Update for '+ data_for.MarketName, data_for);
    });
  }
});
