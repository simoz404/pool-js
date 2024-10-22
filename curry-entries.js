function defaultCurry(obj1) {
    return function(obj2) {
        let newobj = {}
        let arr = Object.entries(obj1)
        arr.push(...Object.entries(obj2))
        arr.map((x) => newobj[x[0]] = x[1])
        return newobj
    }
}

function mapCurry(f) {
    return function(obj) {
        let arr = Object.entries(obj)
        return Object.fromEntries(arr.map((x) => f(x)))
    }
}

function reduceCurry(f) {
    return function(obj, initialValue = '') {
        let n = initialValue
        let arr = Object.entries(obj);
        n = arr.reduce((acc, [k, v]) => f(acc, [k, v]), n);
        return n;
    }
}

function filterCurry(f) {
    return function(obj) {
        let arr = Object.entries(obj)
        return Object.fromEntries(arr.filter(([k, v]) => f([k, v])))
    }
}

function reduceScore(obj, n=0) {
    let res = n
    return reduceCurry((n, [k, v]) => {if (v.isForceUser) {
        res+= (v.pilotingScore+v.shootingScore)
        return res
    }})(obj)
}
function filterForce(obj) {
    return filterCurry(([k, v]) => v.isForceUser && v.shootingScore >= 80)(obj);
}

function mapAverage(obj) {
    return mapCurry(([k, v]) => {
        const averageScore = (v.pilotingScore + v.shootingScore) / 2;
        return [k, { ...v, averageScore }];
    })(obj)
}
