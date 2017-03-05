window.onload = function() {
    var submit = document.getElementById('submit');
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        alert('test');
    });
};
