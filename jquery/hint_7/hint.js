$(function() {
    $('#submit').on('click', function(e) {
        e.preventDefault();
        $('.required').each(function() {
            var target = $(this);
            var value = target.val();
            var displayedMessage = target.parent().find('.error-message');

            if(!value) {
                if(!displayedMessage.length) {
                    var message = $('<div>').text('入力して下さい').addClass('error-message');
                    target.parent().append(message);
                }
            } else {
                if(displayedMessage.length) {
                    displayedMessage.remove();
                }
            }
        });
    });
});
