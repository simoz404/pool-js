function replica(...objs) {
    const isObject = (item) => typeof item === "object" && item !== null && !Array.isArray(item);
    
    return objs.reduce((acc, obj) => {
        if (isObject(obj)) {
            for (const key in obj) {
                if (isObject(obj[key]) && isObject(acc[key])) {
                    acc[key] = replica(acc[key], obj[key]);
                } else {
                    acc[key] = obj[key];
                }
            }
        }
        return acc;
    }, {});
}