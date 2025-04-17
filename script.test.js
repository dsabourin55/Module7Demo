const { JSDOM } = require("jsdom");
const { addNumbers, updateDOM } = require("./script");

test("addNumbers adds two numbers correctly", () => {
    expect(addNumbers(10, 20)).toBe(30);
});

test("updateDOM correctly updates innerText of element", () => {
    const dom = new JSDOM(`<!DOCTYPE html><div id="result"></div>`);
    global.document = dom.window.document;

    updateDOM(30);
    expect(global.document.getElementById("result").innerText).toBe(
        "The result of the operation is 30"
    );
});