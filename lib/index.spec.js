'use strict';

require('chai').should();
const manager = require('./index');

describe('index', () => {
    describe('getAbstraction', () => {
        describe('if called with name of existent contract abstraction', () => {
            it('should successfully return the matching contract abstraction', async () => {
                const abstn = manager.getAbstraction('ClientFund');
                abstn.contractName.should.equal('ClientFund');
                abstn.abi.should.be.an('array').that.is.not.empty;
            });
        });

        describe('if called with name of non-existent contract abstraction', () => {
            it('should throw an instance of Error', async () => {
                (() => manager.getAbstraction('NonExistentContract')).should.throw(Error);
            });
        });
    });

    describe('getAbstractionNames', () => {
        it('should list the set of abstractions obtained from JSON file names', async () => {
            const names = manager.getAbstractionNames();
            names.should.be.an('array').that.is.not.empty;
        });
    });

    describe('getEvent', () => {
        describe('if called with name of existent contract and event', () => {
            it('should successfully return the matching event', async () => {
                const ev = manager.getEvent('ClientFund', 'ReceiveEvent');
                ev.topics.should.be.an('array').that.is.not.empty;
            });
        });

        describe('if called with name of non-existent contract', () => {
            it('should throw an instance of Error', async () => {
                (() => manager.getEvent('NonExistentContract', 'ReceiveEvent')).should.throw(Error);
            });
        });

        describe('if called with name of non-existent event', () => {
            it('should throw an instance of Error', async () => {
                (() => manager.getEvent('ClientFund', 'NonExistentEvent')).should.throw(Error);
            });
        });
    });
});
