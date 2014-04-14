# sort-js
[![Build Status](https://travis-ci.org/jongha/sort-js.png?branch=master)](https://travis-ci.org/jongha/sort-js)
[![Coverage Status](https://coveralls.io/repos/jongha/sort-js/badge.png)](https://coveralls.io/r/jongha/sort-js)
[![Dependency Status](https://gemnasium.com/jongha/sort-js.png)](https://gemnasium.com/jongha/sort-js)

This is sorting library for Javascript. The sorting algorithm is an algorithm that puts elements of a list in a numerical order. This library contains many sorting algorithms Bubble sort, Quicksort, Merge sort, Heapsort, Insertion sort and selection sort. 

Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order. Quicksort makes O(n log n) comparisons to sort n items. In the worst case, it makes O(n^2) comparisons, though this behavior is rare. Merge sort is a divide and conquer algorithm. Heapsort is a comparison-based sorting algorithm. Insertion sort is a simple sorting algorithm that builds the final sorted array or list one item at a time. Selection sort is specifically an in-place comparison sort.

These functions help what your application finds an optimal algorithm at specific data. 


## `Test case`

* Case 1: Totally descending 2,000 data set to ascend.
* Case 2: Totally ascending 2,000 data set to descend.
* Case 3: Random 2,000 data set to ascend.
* Case 4: Random 2,000 data set to descend.

## `Usage`

This script is prototype of Javascript Array. First, includes the script block like below where you want.

```
<script src="./dist/sort.min.js"></script>
```

And use it. It is simple.

```
var data = [1,2,3,4,5];
```


### `Bubble Sort`

The code is very simple But, slow.

Speed: 640 ms (Speed of test cases)

Time complexity: O(n^2)

```
data.bubble({ order: 'desc' }); // data == [5,4,3,2,1]
data.bubble({ order: 'asc' }); // data == [1,2,3,4,5]
```

### `Quicksort`

Speed: 21 ms (Speed of test cases)

Time complexity: O(nlogn)

Faster then Bubble sort.

```
data.quick({ order: 'desc' }); // data == [5,4,3,2,1]
data.quick({ order: 'asc' }); // data == [1,2,3,4,5]
```

### `Merge Sort`

Speed: 15 ms (Speed of test cases)

Time complexity: O(nlogn)

Faster then Quicksort. Almost same speed with Quicksort.

```
data.merge({ order: 'desc' }); // data == [5,4,3,2,1]
data.merge({ order: 'asc' }); // data == [1,2,3,4,5]
```

### `Heapsort`

Speed: 18 ms (Speed of test cases)

Time complexity: O(nlogn)

Faster then Quicksort. (The code is not optimize yet.)

```
data.heap({ order: 'desc' }); // data == [5,4,3,2,1]
data.heap({ order: 'asc' }); // data == [1,2,3,4,5]
```

### `Insertion Sort`

Speed: 38 ms (Speed of test cases)

Time complexity: O(n^2)

Faster then Bubble sort. (But, the time complexity is same with bubble sort.)

```
data.insertion({ order: 'desc' }); // data == [5,4,3,2,1]
data.insertion({ order: 'asc' }); // data == [1,2,3,4,5]
```

### `Selection Sort`

Speed: 48 ms (Speed of test cases)

Time complexity: O(n^2)

```
data.selection({ order: 'desc' }); // data == [5,4,3,2,1]
data.selection({ order: 'asc' }); // data == [1,2,3,4,5]
```

## License

sort-js is available under the terms of the MIT License.
