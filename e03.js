function selectionSort(inputArr) {
    let m = inputArr.length;
    
    for (let i = 0; i < m; i++) {
    // Trouve le plus petir nombre dans l'array
        let min = i;
    for (let a = i + 1; a < m; a++) {
        if (inputArr[a] < inputArr[min]) {
        min = a;
        }
    }
    if (min != i) {
    // Échange les numéros
        let tmp = inputArr[i];
        inputArr[i] = inputArr[min];
        inputArr[min] = tmp;
    }
    }      
    return inputArr;
}

let inputArr = [8, 1, 6, 4, 9, 5, 2, 7, 3];
selectionSort(inputArr);
console.log(inputArr);