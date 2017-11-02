'use strict';

var dictionary = require('./dictionary');
var _ = require('lodash');

function capitalizeEachWord(str) {
    return str.split(' ').map(_.capitalize).join(' ');
}

function generate() {
    var food = capitalizeEachWord(_.sample(dictionary.foods));
    var ingredient = capitalizeEachWord(_.sample(dictionary.ingredients));
    var description = capitalizeEachWord(_.sample(dictionary.descriptions));
    var truckType = capitalizeEachWord(_.sample(dictionary.truckTypes));

    var name = '';

    switch (_.random(1, 8)) {
        case 1:
            if (food.slice(-1) === 's') { food = food.slice(0, -1); }
            name = ['The', food, truckType].join(' ');
            break;
        case 2:
            if (food.slice(-1) === 's') { food = food.slice(0, -1); }
            name = [description, food, truckType].join(' ');
            break;
        case 3:
            name = ['The', description, food].join(' ');
            break;
        case 4:
            if (food.slice(-1) === 's') { food = food.slice(0, -1); }
            name = ['The', description, food, truckType].join(' ');
            break;
        case 5:
            if (food.slice(-1) === 's') { food = food.slice(0, -1); }
            name = ['The', ingredient, food, truckType].join(' ');
            break;
        case 6:
            if (food.slice(-1) === 's') { food = food.slice(0, -1); }
            name = [description, ingredient, food, truckType].join(' ');
            break;
        case 7:
            name = ['The', description, ingredient, food].join(' ');
            break;
        case 8:
        default:
            if (food.slice(-1) === 's') { food = food.slice(0, -1); }
            name = ['The', description, ingredient, food, truckType].join(' ');
    }

    return name;
}

module.exports = generate;