window.onload = function() {
    var submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        var targetList = ['input-name', 'input-content'];
        targetList.forEach(function(target) {
            validate(target);
        });
    });

    function validate(target) {
        var inputName = document.getElementById(target);
        var value = inputName.value;
        if(!value) {
            var div = document.createElement('div');
            var text = document.createTextNode('入力して下さい。');
            div.appendChild(text);
            div.setAttribute('class', 'error-message');
            inputName.parentNode.appendChild(div);
        }
    }

};
