$(function() {
    $('.submit-button').on('click', function(e) {
        e.preventDefault();
        validate();
    });


    function validate() {
        $('.required').each(function() {
            var $target = $(this);
            var value = $target.val();
            if(!value) {
                var message = $('<div>');
                message.text('入力して下さい。');
                message.attr('class', 'error-message');
                $target.parent().append(message);
            }
        });
    }
});
