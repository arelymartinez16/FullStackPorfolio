function display(data) {
    document.getElementById("screen").value += data;
    return data;
}

function solve() {
    let screen = document.getElementById("screen")
    let data = screen.value;
    let result = evalf(data);
    return result;
}