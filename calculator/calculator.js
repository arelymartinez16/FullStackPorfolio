function display(data) {
    document.getElementById("screen").value += data;
    return data;
}

function onResult() {
    console.log("solveEquals function was clicked")
    let screen = document.getElementById("screen")
    let data = screen.value;
    let result = eval(data);
    screen.value = result;
    return result.toString();
}

function clearScreen() {
    let screen = document.getElementById('screen');
    screen.value = "";
    console.log("Clear button was clicked")
}