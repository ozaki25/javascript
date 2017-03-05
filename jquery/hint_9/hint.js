$(function() {
    $('#submit').on('click', function(e) {
        e.preventDefault();
        validate();
    });

    function validate() {
        $('.required').each(function() {
            var target = $(this);
            var value = target.val();
            var displayedMessage = target.parent().find('.error-message');

            if(!value) {
                invalid(target, displayedMessage);
            } else {
                valid(target, displayedMessage);
            }
        });
    }

    function invalid(target, displayedMessage) {
        if(!displayedMessage.length) {
            var message = $('<div>').text('入力して下さい').addClass('error-message');
            target.parent().append(message);
        }
    }

    function valid(target, displayedMessage) {
        if(displayedMessage.length) {
            displayedMessage.remove();
        }
    }
});
