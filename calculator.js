const result = document.getElementById("result");
const operators = document.getElementsByClassName("operator");
const pa = document.getElementById("a");
const pb = document.getElementById("b");
const pr = document.getElementById("r");
const pao = document.getElementById("ao");
var a = '';
var o = '';
var b = '';
var ao = '';
var r = '';
const buttons = document.getElementsByClassName("btn");
for (const button of buttons) {
    button.addEventListener("click", function (event) {

        result.value += event.target.value;
    });
};
for (const operator of operators) {
    operator.addEventListener("click", function (event) {
        if (result.value != NaN) {
            o = event.target.value;
            ;
            a = result.value;
            // clearing
            result.value = "";
            // value in a and b
            pa.innerText = a;
        }
    });
};
document.getElementById("assign").addEventListener("click", function (event) {
    b = result.value;
    ao = event.target.value;
    pao.innerText = ao;
    pb.innerText = b;
    if (o == "+") {
        r = parseFloat(a) + parseFloat(b);
        pr.innerText = r;
        result.value = r;
    }
    else if (o == "-") {
        r = parseFloat(a) - parseFloat(b);
        pr.innerText = r;
        result.value = r;
    }
    else if (o == "*") {
        r = parseFloat(a) * parseFloat(b);
        pr.innerText = r;
        result.value = r;
    }
    else if (o == "/") {
        r = parseFloat(a) / parseFloat(b);
        pr.innerText = r;
        result.value = r;
    }
    else if (o == "/-") {
        r = parseFloat(a) % parseFloat(b);
        pr.innerText = parseInt(parseFloat(a) / parseFloat(b));
        result.value = r;
    }
})
document.getElementById("parcentage").addEventListener("click", function (event) {
    b = result.value;
    pb.innerText = b;
    r = parseFloat(a) * parseFloat(b) / 100;
    pr.innerText = r;
    result.value = r;
})
document.getElementById("c").addEventListener("click", function () {
    result.value = "";
    pa.innerText = "";
    pb.innerText = "";
    pao.innerText = "";
    pr.innerText = "";
});
document.getElementById("del").addEventListener("click", function () {
    result.value = "";
});