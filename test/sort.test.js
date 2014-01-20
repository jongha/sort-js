(function() {
    var MAX = 2000;
    var data_asc = []; // asc
    var data_desc = []; // desc
    var data_rand1 = [], data_rand2 = [];

    var i = 0, j = 0;
    for(i=0; i<=MAX; ++i) {
        data_asc.push(i);
        data_desc.push(MAX - i);
        data_rand1.push(parseInt(Math.random() * 10000 % MAX));
        data_rand2.push(parseInt(Math.random() * 10000 % MAX));
    }
    var rands = [data_rand1, data_rand2];

    test('Bubble Sort',function() {
        var data = data_desc.slice(0);
        data.bubble({ order: 'asc' });
        deepEqual(data, data_asc);

        data = data_asc.slice(0);
        data.bubble({ order: 'desc' });
        deepEqual(data, data_desc);

        for(j=0; j<rands.length; ++j) {
            data = rands[j].slice(0);
            data.bubble({ order: 'asc' });
            for(i=1; i<data.length; ++i) {
                ok(data[i-1] <= data[i], 'Bubble sort asc fails');
            }

            data = rands[j].slice(0);
            data.bubble({ order: 'desc' });
            for(i=1; i<data.length; ++i) {
                ok(data[i-1] >= data[i], 'Bubble sort desc fails');
            }
        }
    });

    test('Quick Sort',function() {
        var data = data_desc.slice(0);
        data.quick({ order: 'asc' });
        deepEqual(data, data_asc);

        data = data_asc.slice(0);
        data.quick({ order: 'desc' });
        deepEqual(data, data_desc);

        for(j=0; j<rands.length; ++j) {
            data = rands[j].slice(0);
            data.quick({ order: 'asc' });
            for(i=1; i<data.length; ++i) {
                ok(data[i-1] <= data[i], 'Quick sort asc fails,');
            }

            data = rands[j].slice(0);
            data.quick({ order: 'desc' });
            for(i=1; i<data.length; ++i) {
                ok(data[i-1] >= data[i], 'Quick sort desc fails,');
            }
        }
    });

    test('Merge Sort',function() {
        var data = data_desc.slice(0);
        data.merge({ order: 'asc' });
        deepEqual(data, data_asc);

        data = data_asc.slice(0);
        data.merge({ order: 'desc' });
        deepEqual(data, data_desc);

        for(j=0; j<rands.length; ++j) {
            data = rands[j].slice(0);
            data.merge({ order: 'asc' });
            for(i=1; i<data.length; ++i) {
                ok(data[i-1] <= data[i], 'Merge sort asc fails,');
            }

            data = rands[j].slice(0);
            data.merge({ order: 'desc' });
            for(i=1; i<data.length; ++i) {
                ok(data[i-1] >= data[i], 'Merge sort desc fails,');
            }
        }
    });
    
    test('Heap Sort',function() {
        var data = data_desc.slice(0);
        data.heap({ order: 'asc' });
        deepEqual(data, data_asc);

        data = data_asc.slice(0);
        data.heap({ order: 'desc' });
        deepEqual(data, data_desc);

        for(j=0; j<rands.length; ++j) {
            data = rands[j].slice(0);
            data.heap({ order: 'asc' });
            for(i=1; i<data.length; ++i) {
                ok(data[i-1] <= data[i], 'Heap sort asc fails,');
            }

            data = rands[j].slice(0);
            data.heap({ order: 'desc' });
            for(i=1; i<data.length; ++i) {
                ok(data[i-1] >= data[i], 'Heap sort desc fails,');
            }
        }
    });    
}(jQuery));