function swap(arr, indexOne, indexTwo) {
    let one = arr[indexOne];
    arr[indexOne] = arr[indexTwo];
    arr[indexTwo] = one;
}

function bubbleSort(arr) {
    if (arr.length > 1) {
        for (let i = 0; i<arr.length-1; i++) {
            for (let j = 0; j<arr.length-i; j++)
                if (arr[j] > arr[j+1]) {

                    // let one = arr[j];
                    // arr[j] = arr[j+1];
                    // arr[j+1] = one;

                    // swap(arr[j], arr[j+1]);
                    
                    swap(arr,j,j+1)
            }
        }
    }
    return arr;
}

