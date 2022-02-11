const buttons = document.getElementsByClassName("btn");
for (const button of buttons) {
    button.addEventListener("click", function (event) {
        const result = document.getElementById("result");
        result.value += event.target.value;
    });
};
document.getElementById("addition")