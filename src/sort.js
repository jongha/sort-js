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
        var pivot, _start = start, _end = end;
        pivot = list[start];
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

Array.prototype.merge = function() {
    console.error('Not Implemented');
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