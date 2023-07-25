//Question5
function sortAscending(arr) {
    // Use the sort() method with a custom comparison function
    arr.sort(function(a, b) {
      return a - b;
    });
    return arr;
  }
  const unsortedArray = [3, 8, 1, 6, 5, 2, 9, 4, 7];

const ascendingSortedArray = sortAscending(unsortedArray);
console.log("Ascending order:", ascendingSortedArray);


function sortDescending(arr) {
    // Use the sort() method with a custom comparison function
    arr.sort(function(a, b) {
      return b - a;
    });
    return arr;
  }

const descendingSortedArray = sortDescending(unsortedArray);
console.log("Descending order:", descendingSortedArray);
