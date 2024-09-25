function bubbleSort(arr) {
  // Get the length of the array
  const n = arr.length;
  let swapped; // To track if a swap occurred in each pass

  // Outer loop for each pass through the array
  for (let i = 0; i < n - 1; i++) {
    swapped = false; // Reset swapped flag before each pass

    // Inner loop to compare adjacent elements
    // After each pass, the largest unsorted element moves to its correct position,
    // so we reduce the range of the inner loop with each iteration (n - i - 1)
    for (let j = 0; j < n - i - 1; j++) {
      // If the current element is greater than the next element, swap them
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]; // Store the current element in a temp variable
        arr[j] = arr[j + 1]; // Move the next element to the current position
        arr[j + 1] = temp; // Assign the current element to the next position

        swapped = true; // Set swapped to true since a swap occurred
      }
    }

    // If no elements were swapped in the inner loop, the array is already sorted
    if (!swapped) {
      break; // Exit the loop early to save unnecessary iterations
    }
  }

  return arr; // Return the sorted array
}

let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(array));
