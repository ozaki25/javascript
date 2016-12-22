window.onload = function() {
    document.getElementById('execute').onclick = function() {
        var inputA = +document.getElementById('input-a').value;
        var inputB = +document.getElementById('input-b').value;
        var result = inputA + inputB;
        document.getElementById('result').innerText = result;
    };
}
