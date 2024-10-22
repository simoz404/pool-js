function RNA(DNA) {
    let RNA = ''
    if (DNA === '') {
        return ''
    }
    for (let i = 0; i < DNA.length; i++) {
        if (DNA[i] === 'G') {
            RNA += 'C'
        } else if (DNA[i] === 'C') {
            RNA += 'G'
        } else if (DNA[i] === 'T') {
            RNA += 'A'
        } else if (DNA[i] === 'A') {
            RNA += 'U'
        }
    }
    return RNA
}
function DNA(RNA) {
    let DNA = ''
    if (RNA === '') {
        return ''
    }
    for (let i = 0; i < RNA.length; i++) {
        if (RNA[i] === 'C') {
            DNA += 'G'
        } else if (RNA[i] === 'G') {
            DNA += 'C'
        } else if (RNA[i] === 'A') {
            DNA += 'T'
        } else if (RNA[i] === 'U') {
            DNA += 'A'
        }
    }
    return DNA
}