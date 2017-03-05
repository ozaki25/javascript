$(function() {
    $('#submit').on('click', function(e) {
        e.preventDefault();
        $('.required').each(function() {
            alert(this.outerHTML);
        });
    });
});
