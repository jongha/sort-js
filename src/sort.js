Array.prototype.bubble = function(asc) {
    for (var j=1; j<this.length; j++) {
        for (var i=1; i<this.length; i++) {
            var s = asc ? i-1 : i, t = asc ? i : i - 1;
            if(this[s] > this[t]) {
                this[t] = [this[s], this[s] = this[t]][0];
            }
        }
    }
};

Array.prototype.quick = function() {
    console.error("Not Implemented");
};

Array.prototype.merge = function() {
    console.error("Not Implemented");
};

Array.prototype.heap = function() {
    console.error("Not Implemented");
};

Array.prototype.insertion = function() {
    console.error("Not Implemented");
};

Array.prototype.selection = function() {
    console.error("Not Implemented");
};

Array.prototype.binary = function() {
    console.error("Not Implemented");
};