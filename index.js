// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./lgf-test
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
// map, filter, reduce, each


var maleCount = function(array){
    let males = _.filter(array, function(customer){
        return customer.gender === "male";
    });
    return males.length;
};

var femaleCount = function(array){
    let count = _.reduce(array, function(accumulator,current){
        if (current.gender === "female"){
            accumulator +=1;
        }
        return accumulator;
    }, 0)
    return count;
}

// use reduce without a seed
var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(accumulator, current){
        if (current.age > accumulator.age){
            return current;
        } else {
            return accumulator;
        }
    })
    return oldest.name;
};

var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(accumulator, current){
        if (current.age < accumulator.age){
            return current;
        } else {return accumulator;}
    })
    return youngest.name;
};


// customer's balance property is a weird string that needs to be formatted, can use reg ex and replace all to exclude punctuations, or replaceAll
var averageBalance = function(array){
    let balanceSum = _.reduce(array, function(accumulator, current){
        let parsedBalance = parseFloat(current.balance.replaceAll(/["$,]/g, ""));
        return accumulator += parsedBalance;
    }, 0) 
    return (balanceSum / array.length);
};


var firstLetterCount = function(array, letter){ //Find how many customer's names begin with a given letter , upper and lowercase
    let startsWithLetter = _.filter(array, function(customer){
        let customerName = customer.name.toLowerCase();
        let startChar = letter.toLowerCase();
        return customerName[0] === startChar;
    })
    return startsWithLetter.length;
};

var friendFirstLetterCount = function(array, customer, letter){
    let targetCustomer = array.filter(person => person.name === customer);
    let targetCustomerFriendsNames = targetCustomer[0].friends.map(friend => friend.name.toLowerCase());
    let startChar = letter.toLowerCase();
    let targetCustomerFriendsNamesStartsWith = targetCustomerFriendsNames.filter(person => person[0] === startChar);
    return targetCustomerFriendsNamesStartsWith.length;
}; //  filter out object by name, then firstLetterCount it, Find how many friends of a given customer have names that start with a given letter , `Array`, `Customer`, `Letter`

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;