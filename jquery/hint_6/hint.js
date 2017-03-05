$(function() {
    $('#submit').on('click', function(e) {
        e.preventDefault();
        $('.required').each(function() {
            var target = $(this);
            var value = target.val();

            if(!value) {
                var displayedMessage = target.parent().find('.error-message');

                if(!displayedMessage.length) {
                    var message = $('<div>').text('入力して下さい').addClass('error-message');
                    target.parent().append(message);
                }
            }
        });
    });
});
