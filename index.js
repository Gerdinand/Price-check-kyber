// KYBER ABI
const abiArray = [{ 'constant': false, 'inputs': [{ 'name': 'alerter', 'type': 'address' }], 'name': 'removeAlerter', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': 'reserve', 'type': 'address' }, { 'name': 'source', 'type': 'address' }, { 'name': 'dest', 'type': 'address' }, { 'name': 'add', 'type': 'bool' }], 'name': 'listPairForReserve', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'kyberWhiteList', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'getReserves', 'outputs': [{ 'name': '', 'type': 'address[]' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'pendingAdmin', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'getOperators', 'outputs': [{ 'name': '', 'type': 'address[]' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'negligiblePriceDiff', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': 'token', 'type': 'address' }, { 'name': 'amount', 'type': 'uint256' }, { 'name': 'sendTo', 'type': 'address' }], 'name': 'withdrawToken', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'maxGasPrice', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': 'newAlerter', 'type': 'address' }], 'name': 'addAlerter', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'feeBurnerContract', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'expectedRateContract', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': 'user', 'type': 'address' }], 'name': 'getUserCapInWei', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': 'newAdmin', 'type': 'address' }], 'name': 'transferAdmin', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_enable', 'type': 'bool' }], 'name': 'setEnable', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'claimAdmin', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '', 'type': 'address' }], 'name': 'isReserve', 'outputs': [{ 'name': '', 'type': 'bool' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'getAlerters', 'outputs': [{ 'name': '', 'type': 'address[]' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': 'source', 'type': 'address' }, { 'name': 'dest', 'type': 'address' }, { 'name': 'srcQuantity', 'type': 'uint256' }], 'name': 'getExpectedRate', 'outputs': [{ 'name': 'expectedPrice', 'type': 'uint256' }, { 'name': 'slippagePrice', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '', 'type': 'uint256' }], 'name': 'reserves', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': 'newOperator', 'type': 'address' }], 'name': 'addOperator', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': 'reserve', 'type': 'address' }, { 'name': 'add', 'type': 'bool' }], 'name': 'addReserve', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'enable', 'outputs': [{ 'name': '', 'type': 'bool' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': 'operator', 'type': 'address' }], 'name': 'removeOperator', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': 'source', 'type': 'address' }, { 'name': 'srcAmount', 'type': 'uint256' }, { 'name': 'dest', 'type': 'address' }, { 'name': 'destAddress', 'type': 'address' }, { 'name': 'maxDestAmount', 'type': 'uint256' }, { 'name': 'minConversionRate', 'type': 'uint256' }, { 'name': 'walletId', 'type': 'address' }], 'name': 'walletTrade', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': true, 'stateMutability': 'payable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_whiteList', 'type': 'address' }, { 'name': '_expectedRate', 'type': 'address' }, { 'name': '_feeBurner', 'type': 'address' }, { 'name': '_maxGasPrice', 'type': 'uint256' }, { 'name': '_negligibleDiff', 'type': 'uint256' }], 'name': 'setParams', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': 'source', 'type': 'address' }, { 'name': 'dest', 'type': 'address' }, { 'name': 'srcQty', 'type': 'uint256' }], 'name': 'findBestRate', 'outputs': [{ 'name': '', 'type': 'uint256' }, { 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': 'source', 'type': 'address' }, { 'name': 'srcAmount', 'type': 'uint256' }, { 'name': 'dest', 'type': 'address' }, { 'name': 'destAddress', 'type': 'address' }, { 'name': 'maxDestAmount', 'type': 'uint256' }, { 'name': 'minConversionRate', 'type': 'uint256' }, { 'name': 'walletId', 'type': 'address' }], 'name': 'trade', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': true, 'stateMutability': 'payable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': 'amount', 'type': 'uint256' }, { 'name': 'sendTo', 'type': 'address' }], 'name': 'withdrawEther', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'getNumReserves', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': 'token', 'type': 'address' }, { 'name': 'user', 'type': 'address' }], 'name': 'getBalance', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'admin', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'inputs': [{ 'name': '_admin', 'type': 'address' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor' }, { 'payable': true, 'stateMutability': 'payable', 'type': 'fallback' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': 'sender', 'type': 'address' }, { 'indexed': false, 'name': 'source', 'type': 'address' }, { 'indexed': false, 'name': 'dest', 'type': 'address' }, { 'indexed': false, 'name': 'actualSrcAmount', 'type': 'uint256' }, { 'indexed': false, 'name': 'actualDestAmount', 'type': 'uint256' }], 'name': 'Trade', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': false, 'name': 'reserve', 'type': 'address' }, { 'indexed': false, 'name': 'add', 'type': 'bool' }], 'name': 'AddReserve', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': false, 'name': 'reserve', 'type': 'address' }, { 'indexed': false, 'name': 'source', 'type': 'address' }, { 'indexed': false, 'name': 'dest', 'type': 'address' }, { 'indexed': false, 'name': 'add', 'type': 'bool' }], 'name': 'ListPairsForReserve', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': 'sender', 'type': 'address' }, { 'indexed': false, 'name': 'amount', 'type': 'uint256' }], 'name': 'EtherReceival', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': false, 'name': 'token', 'type': 'address' }, { 'indexed': false, 'name': 'amount', 'type': 'uint256' }, { 'indexed': false, 'name': 'sendTo', 'type': 'address' }], 'name': 'WithdrawToken', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': false, 'name': 'amount', 'type': 'uint256' }, { 'indexed': false, 'name': 'sendTo', 'type': 'address' }], 'name': 'WithdrawEther', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': false, 'name': 'pendingAdmin', 'type': 'address' }], 'name': 'TransferAdmin', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': false, 'name': 'newAdmin', 'type': 'address' }, { 'indexed': false, 'name': 'previousAdmin', 'type': 'address' }], 'name': 'ClaimAdmin', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': false, 'name': 'newAlerter', 'type': 'address' }, { 'indexed': false, 'name': 'isAdd', 'type': 'bool' }], 'name': 'AddAlerter', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': false, 'name': 'newOperator', 'type': 'address' }, { 'indexed': false, 'name': 'isAdd', 'type': 'bool' }], 'name': 'AddOperator', 'type': 'event' }];
// KYBER CONTRACT
const contractAddress = '0x964f35fae36d75b1e72770e244f6595b68508cf5';
// CONSTANT FOR ETH IN KYBER
const source = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
// INSERT YOUR TOKEN TO CHECK HERE (DEFAULT IS MOT)
const dest = '0x263c618480DBe35C300D8d5EcDA19bbB986AcaeD';
const tokenWei = 1000000000000000000;

const emailconfig = {
  serverName: 'Gmail',
  auth: {
    user: 'xxxxx@xxxx.xx',
    pass: 'xxxxxxxxx',
  },
  from: 'XXXX<xxxxx@xxxxx.xx>',
}

const Web3 = require('web3');
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: emailconfig.serverName,
  auth: {
    user: emailconfig.auth.user,
    pass: emailconfig.auth.pass,
  },
});

let mailOptions = {
  to: 'xxx@gmail.com,xxx1@gmail.com,xxx@outlook.com',
  from: 'xxxxxx@xxxxxx.xx',
  subject: 'FAIL SUBJECT',
  text: 'FAIL TEXT!',
};

let mailOptionsSuccess = {
  to: mailOptions.to,
  from: mailOptions.from,
  subject: 'SUCCESS SUBJECT!',
  text: 'SUCCESS TEXT!'
}
// SET YOUR PROVIDER WITH API KEY
const rpc = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/'/* add API TOKEN */, 9000));
const contract = new rpc.eth.Contract(abiArray, contractAddress);
let tradingAvailable = true;

setInterval(() => {
  contract.methods.getExpectedRate(source, dest, tokenWei).call((err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    if (+result.expectedPrice === 0) {
      // Send high alert, token is down for trading on Kyber
      if (tradingAvailable === true) {
        transporter.sendMail(mailOptions, (error, info) => {
          if (err) {
            console.error(error);
          }
          console.log(info);
        });
        // Choose your error log :)
        console.error('ERROR BEEP BEEP BEEP MOT TRADING DOWN', new Date());
      }

      tradingAvailable = false;
    } else {
      if (tradingAvailable === false) {
        transporter.sendMail(mailOptionsSuccess, (error, info) => {
          if (err) {
            console.error(error);
          }
          console.log(info);
        });
        // Choose your success log :)
        console.error('WE ARE BACK UP', new Date());
        tradingAvailable = true;
      }
    }
  });
}, 10000)
