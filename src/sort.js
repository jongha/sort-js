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

Array.prototype.heap = function() {
    console.error('Not Implemented');
};

Array.prototype.insertion = function() {
    console.error('Not Implemented');
};

Array.prototype.selection = function() {
    console.error('Not Implemented');
};

Array.prototype.binary = function() {
    console.error('Not Implemented');
};