(function() {
    var MAX = 10000;
    var data1 = []; // asc
    var data2 = []; // desc
    
    for(var i=0; i<=MAX; ++i) {
        data1.push(i);
        data2.push(MAX - i);
    }

    var data1_clone = data1.slice(0);
    var data2_clone = data2.slice(0);
    
    test('Bubble sort asc',function() {
        data1.bubble({ order: 'asc' });
        deepEqual(data1, data1_clone);
    });

    test('Bubble sort desc',function() {
        data2.bubble({ order: 'desc' });
        deepEqual(data2, data2_clone);
    });
}(jQuery));