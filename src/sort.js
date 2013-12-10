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

Array.prototype.quick = function() {
    console.error('Not Implemented');
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