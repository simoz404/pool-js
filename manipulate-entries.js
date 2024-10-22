function filterEntries(a, b) {
    let arr = Object.entries(a)
    let newobj = {}
    for (let [k, v] of arr) {
        if (b([k, v])) {
            newobj[k] = v
        }
    }
    return newobj
}

function mapEntries(a, b) {
    let arr = Object.entries(a)
    let newobj = {}
    for (let [k, v] of arr) {
        let n = b([k, v])
        newobj[n[0]] = n[1]
    }
    return newobj
}
   
function reduceEntries(a, b, x='') {
    let arr = Object.entries(a)
    let res = x
    for (let [k, v] of arr) {
        res = b(res, [k, v])
    }
    return res
}

function lowCarbs(obj) {
    return filterEntries(obj, ([k,v]) => (nutritionDB[k].carbs*(v/100)) < 50 )
}

function totalCalories(obj) {
    return +(reduceEntries(obj, (acc, [k, v]) => acc+ nutritionDB[k].calories*(v/100), 0).toFixed(1))
}

function cartTotal(obj) {
    return mapEntries(obj, ([k, v]) =>  [
        k,
        {calories: +((nutritionDB[k].calories*(v/100)).toFixed(3)),
        protein: +((nutritionDB[k].protein*(v/100)).toFixed(3)),
        carbs: +((nutritionDB[k].carbs*(v/100)).toFixed(3)),
        sugar: +((nutritionDB[k].sugar*(v/100)).toFixed(3)),
        fiber: +((nutritionDB[k].fiber*(v/100)).toFixed(3)),
        fat: +((nutritionDB[k].fat*(v/100)).toFixed(3)),},
    ]
    )
}
