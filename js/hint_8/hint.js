window.onload = function() {
    var submit = document.getElementById('submit');
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        var targets = document.getElementsByClassName('required');

        for(var i = 0; i < targets.length; i++) {
            var target = targets[i];
            var value = target.value;
            var displayedMessage = target.parentNode.getElementsByClassName('error-message')[0];

            if(!value) {
                invalid(target, displayedMessage);
            } else {
                valid(target, displayedMessage);
            }
        }
    });

    function invalid(target, displayedMessage) {
        if(!displayedMessage) {
            var message = document.createElement('div');
            var text = document.createTextNode('入力して下さい')
            message.appendChild(text);
            message.setAttribute('class', 'error-message');

            target.parentNode.appendChild(message);
        }
    }

    function valid(target, displayedMessage) {
        if(displayedMessage) {
            target.parentNode.removeChild(displayedMessage);
        }
    }
};
