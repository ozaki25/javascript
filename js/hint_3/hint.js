window.onload = function() {
    var submit = document.getElementById('submit');
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        var targets = document.getElementsByClassName('required');
        for(var i = 0; i < targets.length; i++) {
            var target = targets[i];
            alert(target.outerHTML);
        }
    });
};
