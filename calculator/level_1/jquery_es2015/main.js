$(() => {
    $('#execute').click(() => {
        const inputA = +$('#input-a').val();
        const inputB = +$('#input-b').val();
        $('#result').text(inputA + inputB);
    });
});
