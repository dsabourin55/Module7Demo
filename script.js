//Hello world!

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