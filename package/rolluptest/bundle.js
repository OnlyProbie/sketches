'use strict';

var version = "1.0.0";

foo();
console.log('version ===> ', version);
function test() {
    console.log('test');
}

console.log(test());

module.exports = test;
