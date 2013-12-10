(function() {
    var MAX = 1000;
    var data_asc = []; // asc
    var data_desc = []; // desc
    var data_rand = [];
    
    var i = 0;
    for(i=0; i<=MAX; ++i) {
        data_asc.push(i);
        data_desc.push(MAX - i);
        data_rand.push(parseInt(Math.random() * 10000 % 1000));
    }
    
    test('Bubble Sort',function() {
        var data = data_desc.slice(0);
        data.bubble({ order: 'asc' });
        deepEqual(data, data_asc);
        
        data = data_asc.slice(0);
        data.bubble({ order: 'desc' });
        deepEqual(data, data_desc);

        data = data_rand.slice(0);
        data.bubble({ order: 'asc' });
        for(i=1; i<data.length; ++i) {
            equal(data[i-1] <= data[i], true);
        }
        
        data = data_rand.slice(0);
        data.bubble({ order: 'desc' });
        for(i=1; i<data.length; ++i) {
            equal(data[i-1] >= data[i], true);
        }        
    });
}(jQuery));