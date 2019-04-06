# NAHMII CONTRACT ABSTRACTIONS FOR ROPSTEN

## About this package

This package hosts contract abstractions generated from the deployment of 
[nahmii contracts](https://github.com/hubiinetwork/nahmii-contracts.git) to 
the Ropsten testnet.

This particular version of the package contains abstractions from 
**[nahmii-contracts v1.0.0-ropsten.9](https://github.com/hubiinetwork/nahmii-contracts/tree/v1.0-ropsten.9)**.  

## About nahmii

_nahmii_ is _hubii_'s scaling solution for the Ethereum block chain. It is a
hybrid centralized/decentralized solution that enables instant
(micro-) payments, trading and trustless settlements.

## About hubii

See www.hubii.com for more information.

## Prerequisites

* To use this software you need a modern version of **NodeJS and NPM**.
  We recommend having the current LTS version (v10.x) installed, or
  later, and updating NPM to the latest available version.

## Installation

To install the SDK into your project, simply run:

```
npm install nahmii-contract-abstractions-ropsten
```

## Contract abstractions

The package includes directory `build/contracts` that contains the 
actual contract abstractions.

### Symlinks

In a dependent project it will often be more
convenient to have the abstractions available in its own `build/contracts` 
directory rather than having to refer to the lengthy 
`node_modules/nahmii-contract-abstractions-ropsten/build/contracts`.

The package contains scripts to symlink its `build/contracts` to
`../../build/contracts`. In order to run the script you may run

```
npm run symlink:build
```

Alternatively a call to

```
npm run symlink:build:force
```

will also delete previously existent `../../build/contracts` as seen from
the package directory (`node_modules/nahmii-contract-abstractions-ropsten`).

### Usage in Node.js context

The contract abstractions may be required into Node.js scripts and used 
in contexts of [web3](https://web3js.readthedocs.io/en/latest/), 
[ethers](https://ethers.io) or [Truffle](https://truffleframework.com/).

Assuming the above symlink has been carried out a simple script may be 
as follows:

```
const ClientFundAbstn = require('./build/contracts/ClientFund.json'); 

console.log(ClientFundAbstn.networks[1].address);
// 0xcc8d82f6ba952966e63001c7b320eef2ae729099

console.log(ClientFundAbstn.abi);
// [ { constant: false,
//     inputs: [ [Object] ],
//     name: 'authorizeRegisteredService',
//     outputs: [],
//     payable: false,
//     stateMutability: 'nonpayable',
//     type: 'function' },
//   { constant: true,
//     inputs: [ [Object] ],
//     name: 'isRegisteredBeneficiary',
// ...
```

If no symlink has been done a contract abstraction may rather be required as
```
const abstractions = require('nahmii-contract-abstractions-ropsten');

console.log(abstractions.getAbstraction('ClientFund'));
// { contractName: 'ClientFund',
//   abi:
//    [ { constant: false,
//        inputs: [Array],
//        name: 'authorizeRegisteredService',
//        outputs: [],
//        payable: false,
//        stateMutability: 'nonpayable',
//        type: 'function' },
// ...
```

The full set of names of contract abstractions may be obtained as
```
console.log(abtractions.getAbstractionNames());
// [ 'BalanceTracker',
//   'BlockNumbCurrenciesLib',
//   'BlockNumbDisdIntsLib',
//   'BlockNumbIntsLib',
//   'BlockNumbUintsLib',
//   'ClientFund',
//   'Configuration',
// ...
``` 

## Event samples

The package also includes directory `events` containing samples of events
emitted from contracts. There is one JSON file per contract.

### Symlinks

Similar to contract abstractions the package contains scripts to symlink 
its `events` to `../../events` in a dependent project. In order to run the 
script you may run

```
npm run symlink:events
```
or

```
npm run symlink:events:force
```

The latter will delete previously existent `../../events` as seen from
the package directory (`node_modules/nahmii-contract-abstractions-ropsten`).

### Usage in Node.js context

As with contract abstractions events may be required into a Node.js context by 
```
const ClientFundEvents = require('./events/ClientFund.json');
```
if previous symlink has been carried out. Alternatively an event may be required as
```
const ReceiveEvent = require('nahmii-contract-abstractions-ropsten').getEvent('ClientFund', 'ReceiveEvent');
```
