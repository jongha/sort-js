(function() {
    var bubbleVarAsc = [10, 9, 8, 7, 6, 5, 4, 3 ,2, 1];
    var bubbleVarDesc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    test('Bubble sort asc', function() {
        bubbleVarAsc.bubble(true);
        deepEqual(bubbleVarAsc, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    test('Bubble sort desc', function() {
        bubbleVarDesc.bubble(false);
        deepEqual(bubbleVarDesc, [10, 9, 8, 7, 6, 5, 4, 3 ,2, 1]);
    });
}(jQuery));