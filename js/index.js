/**
 * Created by yangyi on 2017/7/19.
 */

let index_js = {};

index_js.number_button =
    document.getElementsByClassName("button_number");

for (let obj of index_js.number_button) {
    obj.onclick = function () {
        show_content(obj.innerHTML);
    };
}

index_js.show_result = document.getElementById("show_result");

function show_content(input) {
    if (index_js.show_result.innerHTML.substring(0, 1) === "0") {
        index_js.show_result.innerHTML = "";
    }
    index_js.show_result.innerHTML += input;
}

function show_operator(input) {
    let lastChar = index_js.show_result.innerHTML.substring(
        index_js.show_result.innerHTML.length - 1,
        index_js.show_result.innerHTML.length
    );

    if (isOperator(lastChar) && isOperator(input)) {
        index_js.show_result.innerHTML =
            index_js.show_result.innerHTML.substring(
                0,
                index_js.show_result.innerHTML.length - 1
            );
    }

    index_js.show_result.innerHTML += input;
}

index_js.clear_button =
    document.getElementsByClassName("button button_red")[0];

index_js.clear_button.onclick = function () {
    index_js.show_result.innerHTML = 0;
};

index_js.operator =
    document.getElementsByName("operator");

for (let obj of index_js.operator) {
    obj.onclick = function () {
        show_operator(obj.innerHTML);
    }
}

function isOperator(char) {
    if (char === "+" ||
        char === "-" ||
        char === "×" ||
        char === "÷") {
        return true;
    }
}

index_js.get_result = document.getElementsByClassName("button button_blue");

index_js.get_result.onclick = function () {
    
};