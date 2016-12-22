$(function() {
    $('.input').change(function() {
        var calcArea = $(this).parent();
        var inputs = calcArea.children('.input');
        var inputA = +$(inputs[0]).val();
        var inputB = +$(inputs[1]).val();
        var result = inputA + inputB;

        calcArea.children('.result').text(result);
    });
});
