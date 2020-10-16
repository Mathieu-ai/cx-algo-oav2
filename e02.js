const sortInsert = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      let m = i - 1
      let temp = arr[i]
      while (m >= 0 && arr[m] > temp) {
        arr[m + 1] = arr[m]
        m--
      }
      arr[m+1] = temp
    }
    return arr
  }
  console.log(sortInsert([8, 1, 6, 4, 9, 5, 2, 7, 3]));