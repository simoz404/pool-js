function matchCron  (s, date) {
    let s1 = s.split(' ')
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] != '*') {
                if (i == 0 && s1[i] == date.getMinutes()) {
                    continue;
                } else if (i == 1 && s1[i] == date.getHours()) {
                    continue;
                } else if (i == 2 && s1[i] == date.getDate()) {
                    continue;
                } else if (i == 3 && s1[i] == date.getMonth()+1) {
                    continue;
                } else if (i == 4 && s1[i] == date.getDay()) {
                    continue;
                } else {
                    return false;
                }
            }
        }
        return true;
};