$(function() {
    $('#submit').on('click', function(e) {
        e.preventDefault();
        $('.required').each(function() {
            var target = $(this);
            var message = $('<div>').text('入力して下さい').addClass('error-message');
            target.parent().append(message);
        });
    });
});