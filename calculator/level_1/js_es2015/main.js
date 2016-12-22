window.onload = () => {
    document.getElementById('execute').addEventListener('click', () => {
        const inputA = +document.getElementById('input-a').value;
        const inputB = +document.getElementById('input-b').value;
        const result = inputA + inputB;
        document.getElementById('result').innerText = result;
    });
}
