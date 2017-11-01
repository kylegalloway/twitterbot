'use strict';

var dictionary = require('./dictionary');
var _ = require('lodash');

function generate() {
    var food = _.capitalize(_.sample(dictionary.foods));
    var ingredient = _.capitalize(_.sample(dictionary.ingredients));
    var description = _.capitalize(_.sample(dictionary.descriptions));
    var truckType = _.capitalize(_.sample(dictionary.truckTypes));

    var name = '';

    switch (_.random(1, 8)) {
        case 1:
            name = ['The', food, truckType].join(' ');
            break;
        case 2:
            name = [description, food, truckType].join(' ');
            break;
        case 3:
            name = ['The', description, food].join(' ');
            break;
        case 4:
            name = ['The', description, food, truckType].join(' ');
            break;
        case 5:
            name = ['The', ingredient, food, truckType].join(' ');
            break;
        case 6:
            name = [description, ingredient, food, truckType].join(' ');
            break;
        case 7:
            name = ['The', description, ingredient, food].join(' ');
            break;
        case 8:
        default:
            name = ['The', description, ingredient, food, truckType].join(' ');
    }

    return name;
}

module.exports = generate;