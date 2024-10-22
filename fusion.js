function fusion(o1, o2) {
    for (let i in o2) {
        if (!o1.hasOwnProperty(i)) {
            o1[i]=o2[i]
        } else if (typeof(o1[i]) !== typeof(o2[i])) {
            o1[i] = o2[i]
        } else if  (typeof(o2[i])=== 'number' && typeof(o1[i])=== 'number') {
            o1[i]+=o2[i]
        } else if (Array.isArray(o2[i]) && Array.isArray(o1[i])) {
            o1[i] = o1[i].concat(o2[i])
        } else if (typeof(o2[i] === 'string') && typeof(o1[i])=== 'string') {
            o1[i] = o1[i]+' '+o2[i]
        } else {
            fusion(o1[i], o2[i])
        }
    }
    return o1
}

console.log(fusion({ a: 'str' }, { a: '1' }));