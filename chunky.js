function chunk(arr, size) {
    let arr1 = []
    let arr2 = []
    let arr3 = []
    let n = 0
    for (let i = 0; i < arr.length; i++) {
        if (n < size) {
            arr2.push(arr[i])
            n++
        }
        if (n === size) {
            arr1.push(arr2)
            arr2 = []
            n = 0
        }
    }
    if (arr2.length !== 0) {
        arr1.push(arr2)
    }
    return arr1
}
