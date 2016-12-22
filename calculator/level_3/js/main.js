window.onload = function() {
    var inputElements = document.getElementsByClassName('input');
    for(var i = 0; i < inputElements.length; i++) {
        inputElements[i].addEventListener('change', function(event) {
            var calcArea   = event.target.parentNode;
            var inputs     = calcArea.getElementsByClassName('input');
            var resultArea = calcArea.getElementsByClassName('result')[0];

            var inputA = +inputs[0].value;
            var inputB = +inputs[1].value;
            var result = inputA + inputB;

            resultArea.innerText = result;
        });
    };
}
