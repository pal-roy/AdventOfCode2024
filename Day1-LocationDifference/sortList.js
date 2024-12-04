"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
fs.readFile('./staticCodes.txt', 'utf8', function (err, data) {
    if (err) {
        console.log("found err", err);
        return;
    }
    var splitLInes = data.split('\n');
    var list1 = [];
    var list2 = [];
    var totalDifference = 0;
    splitLInes.forEach(function (each) {
        var _a = each.trim().split(/\s+/), num1 = _a[0], num2 = _a[1];
        list1.push(parseInt(num1, 10));
        list2.push(parseInt(num2, 10));
    });
    list1.sort(function (a, b) { return a - b; });
    list2.sort(function (a, b) { return a - b; });
    // Assumption lists are of the same length : true
    for (var i = 0; i < list1.length; i++) {
        totalDifference += Math.abs(list1[i] - list2[i]);
    }
    // 1506483
    console.log(totalDifference);
});
