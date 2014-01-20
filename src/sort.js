// bubble sort
Array.prototype.bubble = function(options) {
    var asc = options && options.order === 'asc'; // true: asc, false: desc

    var j = 0, i = 0;
    for (j=1; j<this.length; j++) {
        var swapped = false;
        for (i=1; i<this.length; i++) {
            var s = asc ? i-1 : i, t = asc ? i : i - 1;
            if(this[s] > this[t]) {
                this[t] = [this[s], this[s] = this[t]][0];
                swapped = true;
            }
        }

        if(!swapped) { break; }
    }
};

Array.prototype.quick = function(options) {
    var asc = options && options.order === 'asc'; // true: asc, false: desc

    // reference: http://en.wikipedia.org/wiki/Quicksort
    var _quick = function(list, start, end) {
        var pivot = list[start], _start = start, _end = end;
        while (start < end) {
            while ((asc && (list[end] >= pivot) || !asc && (list[end] <= pivot)) && (start < end)) {
                end--;
            }

            if (start !== end) {
                list[start] = list[end];
                start++;
            }

            while (((asc && list[start] <= pivot) || (!asc && (list[start] >= pivot))) && (start < end)) {
                start++;
            }

            if(start !== end) {
                list[end] = list[start];
                end--;
            }
        }

        list[start] = pivot;
        pivot = start;

        if (_start < start) {
            _quick(list, _start, pivot - 1);
        }

        if (_end > start) {
            _quick(list, pivot + 1, _end);
        }
    };
    _quick(this, 0, this.length - 1);
};

Array.prototype.merge = function(options) {
    var asc = options && options.order === 'asc'; // true: asc, false: desc

    var _merge = function(part1, part2, list, start, end) {
        var data = [];

        var i = 0, j = 0;
        while(i < part1.length || j < part2.length) {
            if(j >= part2.length || (i < part1.length &&
                ((asc && part1[i] < part2[j]) || (!asc && part1[i] >= part2[j]))
                )) {
                data.push(part1[i++]);

            }else if(j < part2.length) {
                data.push(part2[j++]);
            }
        }

        for(i = start; i < end; ++i) {
            list[i] = data[i];
        }

        return data;
    };

    var _partitioning = function(list) {
        if(list.length > 1) {
            var len = list.length;
            var mid = Math.round(len / 2);

            var part1 = _partitioning(list.slice(0, mid));
            var part2 = _partitioning(list.slice(mid, len));

            return _merge(part1, part2, list, 0, len);
        }

        return list;
    };

    _partitioning(this);
};

Array.prototype.heap = function(options) {

    // reference: http://rosettacode.org/wiki/Sorting_algorithms/Heapsort
    // Not optimize yet.
    var asc = options && options.order === 'asc'; // true: asc, false: desc

    var _heap = function(list) {
        _put(list);

        var _ref, _results = [], end = list.length - 1;
        while(end > 0) {

            _ref = [list[end], list[0]];
            list[0] = _ref[0];
            list[end] = _ref[1];

            _shift(list, 0, end);
            _results.push(--end);
        }

        return _results;
    };

    var _put = function(list) {
        var i, _results;
        i = list.length / 2 - 1;
        i = Math.floor(i);
        _results = [];

        while(i >= 0) {
            _shift(list, i, list.length);
            _results.push(--i);
        }
        return _results;
    };

    var _shift = function(heap, i, max) {
        var c1, c2, _big, _ref;
        while(i < max) {

            _big = i;
            c1 = 2 * i + 1;
            c2 = c1 + 1;

            if(c1 < max && heap[c1] > heap[_big]) {
                _big = c1;
            }

            if(c2 < max && heap[c2] > heap[_big]) {
                _big = c2;
            }

            if(_big === i) {
                return;
            }

            _ref = [heap[_big], heap[i]];
            heap[i] = _ref[0];
            heap[_big] = _ref[1];

            i = _big;
        }
    };

    _heap(this);
    if(!asc) { this.reverse(); }
};

Array.prototype.insertion = function(options) {
    var asc = options && options.order === 'asc'; // true: asc, false: desc

    var i;
    for(i = 0; i < this.length; i++) {
        var k = this[i];
        for (var j = i; j > 0 && ((asc && k < this[j - 1]) || (!asc && k > this[j - 1])); j--) {
            this[j] = this[j - 1];
        }

        this[j] = k;
    }
};

Array.prototype.selection = function(options) {

    var asc = options && options.order === 'asc'; // true: asc, false: desc

    var i, j;
    for(i = 0; i < this.length-1; ++i) {

        var _find = this[i];
        var _findat = i;

        for(j = i; j < this.length; ++j) {
            if((asc && this[j] < _find) || (!asc && this[j] > _find)){
                _findat = j;
                _find = this[j];
            }
        }

        if(_findat !== i) {
            this[i] = [this[_findat], this[_findat] = this[i]][0];
        }
    }
};