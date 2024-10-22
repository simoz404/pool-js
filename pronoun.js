function pronoun(str) {
    const ocurencePronounc = ['i','you','he','she','it','they','we']
    const obj = {}
    str = str.toLowerCase();
    const words = str.split(/\s+/);
    for (let i = 0; i < words.length; i++) {
        if (ocurencePronounc.includes(words[i])) {
            if (!obj[words[i]]) {
                obj[words[i]] = {word: [], count: 0}
            }
            obj[words[i]].count++
            if (i+1 < words.length && !(ocurencePronounc.includes(words[i+1]))) {
                words[i + 1] = words[i + 1].replace(/[^a-z]/gi, '');
                obj[words[i]].word.push(words[i+1])
            }
        }
    }
    return obj
}
