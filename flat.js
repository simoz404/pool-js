function flat(arr, n = 0) {
    let res = [];
    let n1 = 0;
    function repeat(arr2) {
        for (let i = 0; i < arr2.length; i++) {
            if (Array.isArray(arr2[i])) {
                n1++
                repeat(arr2[i]); 
            } else {
                res.push(arr2[i]); 
            }
        }
    }
    repeat(arr); 
    return res; 
}
