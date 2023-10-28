export const ContractsStr = `[{"address":"0xf2DAd89f2788a8CD54625C60b55cD3d2D0ACa7Cb","name":"syncswap","count":0,"url":"https://syncswap.xyz/"},
   {"address":"0x2da10A1e27bF85cEdD8FFb1AbBe97e53391C0295","name":"syncswap","count":0,"url":"https://syncswap.xyz/"},
   {"address":"0x80115c708e12edd42e504c1cd52aea96c547c05c","name":"syncswap","count":0,"url":"https://syncswap.xyz/"},
   {"address":"0x8B791913eB07C32779a16750e3868aA8495F5964","name":"mute","count":0,"url":"https://mute.io/"},
   {"address":"0xDFAaB828f5F515E104BaaBa4d8D554DA9096f0e4","name":"mute","count":0,"url":"https://mute.io/"},
   {"address":"0xbE7D1FD1f6748bbDefC4fbaCafBb11C6Fc506d1d","name":"spacefi","count":0,"url":"https://swap-zksync.spacefi.io/"},
   {"address":"0x39E098A153Ad69834a9Dac32f0FCa92066aD03f4","name":"maverick","count":0,"url":"https://mav.xyz/"},
   {"address":"0x9606eC131EeC0F84c95D82c9a63959F2331cF2aC","name":"izumi","count":0,"url":"https://zksync.izumi.finance/"},
   {"address":"0xA269031037B4D5fa3F771c401D19E57def6Cb491","name":"odos","count":0,"url":"https://odos.xyz/"},
   {"address":"0x4bba932e9792a2b917d47830c93a9bc79320e4f7","name":"odos","count":0,"url":"https://odos.xyz/"},
   {"address":"0xd999E16e68476bC749A28FC14a0c3b6d7073F50c","name":"velocore","count":0,"url":"https://velocore.xyz/"},
   {"address":"0xF29Eb540eEba673f8Fb6131a7C7403C8e4C3f143","name":"velocore","count":0,"url":"https://velocore.xyz/"},
   {"address":"0x80C67432656d59144cEFf962E8fAF8926599bCF8","name":"orbiter","count":0,"url":"https://www.orbiter.finance/"},
   {"address":"0xE4eDb277e41dc89aB076a1F049f4a3EfA700bCE8","name":"orbiter","count":0,"url":"https://www.orbiter.finance/"},
   {"address":"0xf8b59f3c3Ab33200ec80a8A58b2aA5F5D2a8944C","name":"pancake","count":0,"url":"https://pancakeswap.finance/"},
   {"address":"0x8b5193BCaE3032766bEc9d07ecDB9E56aefBff0F","name":"zkname","count":0,"url":"https://zkns.domains/"},
   {"address":"0x981F198286E40F9979274E0876636E9144B8FB8E","name":"dmail","count":0,"url":"https://dmail.ai/"},
   {"address":"0xfd505702b37Ae9b626952Eb2DD736d9045876417","name":"woofi","count":0,"url":"https://fi.woo.org/"},
   {"address":"0x30E63157bD0bA74C814B786F6eA2ed9549507b46","name":"woofi","count":0,"url":"https://fi.woo.org/"},
   {"address":"0x7ee459d7fde8b4a3c22b9c8c7aa52abaddd9ffd5","name":"bungee","count":0,"url":"https://www.bungee.exchange/"},
   {"address":"0x22d8b71599e14f20a49a397b88c1c878c86f5579","name":"eralend","count":0,"url":"https://www.eralend.com/"},
   {"address":"0xc955d5fa053d88e7338317cc6589635cd5b2cf09","name":"eralend","count":0,"url":"https://www.eralend.com/"},
   {"address":"0x1e8F1099a3fe6D2c1A960528394F4fEB8f8A288D","name":"basilisk","count":0,"url":"https://basilisk.org/"},
   {"address":"0x4085f99720e699106bc483dab6caed171eda8d15","name":"basilisk","count":0,"url":"https://basilisk.org/"},
   {"address":"0x50b2b7092bcc15fbb8ac74fe9796cf24602897ad","name":"tevaera","count":0,"url":"https://tevaera.com/"},
   {"address":"0x1Ecd053f681a51E37087719653f3f0FFe54750C0","name":"omnisea","count":0,"url":"https://omnisea.xyz/"}]`;

export const StableSymbol = [
  'USDT',
  'USDC',
  'BUSD',
  'DAI',
  'ZKUSD',
  'CEBUSD',
  'LUSD',
  'USD+',
  'ibETH',
  'WETH',
  'ibUSDC',
  'ETH',
];

export const Months = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

export const BalanceSymbol = ['ETH', 'USDT', 'USDC', 'DAI', 'WETH'];

export const Columns = [
  { id: 'more', label: '', align: 'center', padding: '16px 5px' },
  { id: 'id', label: '№', align: 'center', padding: '16px 7px' },
  { id: 'label', label: 'Label', align: 'center' },
  { id: 'address', label: 'Address', align: 'center' },
  {
    id: 'totalBalance',
    label: 'Balance',
    align: 'center',
  },
  {
    id: 'bridge to/from',
    label: 'Bridge to/from',
    align: 'center',
  },
  {
    id: 'volume',
    label: 'Volume',
    align: 'center',
  },
  {
    id: 'txsCount',
    label: 'Txs',
    align: 'center',
  },
  {
    id: 'uniqueContracts',
    label: 'Contracts',
    align: 'center',
  },
  {
    id: 'mwd',
    label: 'M/W/D',
    align: 'center',
  },
  {
    id: 'witm',
    label: 'WITM',
    hint: 'Active weeks in this month',
    align: 'center',
  },
  {
    id: 'totalFee',
    label: 'Gus burned',
    align: 'center',
  },
  { id: 'update', label: '', align: 'center', padding: '16px 6px' },
];
