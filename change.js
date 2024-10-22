function get(a) {
    return sourceObject[a]
}
function set(key, value) {
    sourceObject[key] = value
    return sourceObject[key]
}