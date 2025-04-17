(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function addNumbers(num1, num2) {
    return num1 + num2;
}

function updateDOM(value) {
    let resultDiv = document.getElementById("result");
    if (resultDiv) {
        resultDiv.innerText = `The result of the operation is ${value}`;
    }
}

function init() {
    let result = addNumbers(10, 20);
    updateDOM(result);
}

if (typeof window !== "undefined") {
    window.onload = init;
} else {
    module.exports = { addNumbers, updateDOM, init };
}
},{}]},{},[1]);
