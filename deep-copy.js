function deepCopy(obj) {
    if (Array.isArray(obj)) {
        return obj.map(item => deepCopy(item))
    } 
    if ((typeof obj === 'object')&& !(obj instanceof RegExp)) {
        const copy = {};
        for (const i in obj) {
            if (obj.hasOwnProperty(i)) {
                copy[i] = deepCopy(obj[i]);
            }
        }
        return copy;
    }
    return obj
}
