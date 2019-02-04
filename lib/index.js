'use strict';

const path = require('path');
const Manager = require('contract-abstractions-manager');

module.exports = new Manager(path.normalize(`${__dirname}/..`));
