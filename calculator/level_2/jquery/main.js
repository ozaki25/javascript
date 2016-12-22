$(function() {
    $('.execute').click(function() {
        var inputs     = $(this).parent().children('.input');
        var resultArea = $(this).parent().children('.result');

        var inputA = +$(inputs[0]).val();
        var inputB = +$(inputs[1]).val();
        var result = inputA + inputB;

        resultArea.text(result);
    });
});
