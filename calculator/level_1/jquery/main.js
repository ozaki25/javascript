$(function() {
    $('#execute').click(function() {
        var inputA = +$('#input-a').val();
        var inputB = +$('#input-b').val();
        var result = inputA + inputB;
        $('#result').text(result);
    });
});
