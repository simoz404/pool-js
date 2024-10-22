export function getArchitects() {
    let arr1 = Array.from(document.getElementsByTagName('a'))
    let arr2 = Array.from(document.getElementsByTagName('span'))
    return [arr1, arr2]
}

export function getClassical() {
    let arr1 = Array.from(document.querySelectorAll('a.classical'))
    let arr2 = Array.from(document.querySelectorAll('a:not(.classical)'))
    return [arr1, arr2]
}

export function getActive() {
    let arr1 = Array.from(document.querySelectorAll('a.active'))
    let arr2 = Array.from(document.querySelectorAll('a:not(.active)'))
    return [arr1, arr2]
}

export function getBonannoPisano() {
    let elem = document.getElementById('BonannoPisano')
    let arr1 = Array.from(document.querySelectorAll('.classical.active:not(#BonannoPisano)'))
    return [elem, arr1]
}
