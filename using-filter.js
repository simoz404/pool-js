function filterShortStateName(arr) {
    return arr.filter((s) => s.length < 7)
}
function isVowel(c) {
    return /[aoiue]/i.test(c)
}

function countVowels(s) {
    let n = 0
    for (let c of s) {
        if (isVowel(c)) {
            n++
        }
    }
    return n
}
function filterStartVowel(arr) {
    return arr.filter((s) => isVowel(s[0]))
}

function filter5Vowels(arr) {
    return arr.filter((s) => countVowels(s) >= 5)
}

function filter1DistinctVowel(arr) {
    return arr.filter((s) => countVowels(new Set(s.toLowerCase())) === 1)
}

function multiFilter(arr) {
    return arr.filter((v) => v.capital.length >= 8 &&  !isVowel(v.name[0]) && countVowels(v.tag) >= 1 && v.region !==  "South")
}

console.log(filter1DistinctVowel([
    'Alabama',
    'Alaska',
    'Arkansas',
    'Kansas',
    'Maryland',
    'Mississippi',
    'New Jersey',
    'Tennessee',
  ]));