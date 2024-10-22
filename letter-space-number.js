function letterSpaceNumber(s) {
    const regex = /[a-z] [0-9]((?=\W)|$)/g
    if (s.match(regex) === null) {
        return []
    }
    return s.match(regex)
}

