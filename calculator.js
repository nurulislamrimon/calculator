const buttons = document.getElementsByClassName("btn");
for (const button of buttons) {
    button.addEventListener("click", function (event) {
        const result = document.getElementById("result");
        result.value += event.target.value;
    });
};
const operators = document.getElementsByClassName("operator");
var a = '';
var o = '';
var b = '';
var ao = '';
var r = '';
for (const operator of operators) {
    operator.addEventListener("click", function (event) {
        o = event.target.value;
        const result = document.getElementById("result");
        a = result.value;
        // clearing
        result.value = "";
        // value in a and b
        document.getElementById("a").innerText = a;
        b = document.getElementById("b").innerText = "last number";
    });
};
document.getElementById("assign").addEventListener("click", function (event) {
    const result = document.getElementById("result");
    b = result.value;
    ao = event.target.value;
    document.getElementById("ao").innerText = ao;
    document.getElementById("b").innerText = b;
    if (o == "+") {
        r = parseFloat(a) + parseFloat(b);
        document.getElementById("r").innerText = r;
        const result = document.getElementById("result");
        result.value = r;
    }
    else if (o == "-") {
        r = parseFloat(a) - parseFloat(b);
        document.getElementById("r").innerText = r;
        const result = document.getElementById("result");
        result.value = r;
    }
    else if (o == "*") {
        r = parseFloat(a) * parseFloat(b);
        document.getElementById("r").innerText = r;
        const result = document.getElementById("result");
        result.value = r;
    }
    else if (o == "/") {
        r = parseFloat(a) / parseFloat(b);
        document.getElementById("r").innerText = r;
        const result = document.getElementById("result");
        result.value = r;
    }
})
document.getElementById("parcentage").addEventListener("click", function (event) {
    const result = document.getElementById("result");
    b = result.value;
    document.getElementById("b").innerText = b;
    r = parseFloat(a) * parseFloat(b) / 100;
    document.getElementById("r").innerText = r;
    result.value = r;
})
document.getElementById("c").addEventListener("click", function () {
    const result = document.getElementById("result");
    result.value = "";
});