// first solution 

function solution(A) {
    let N = [...A];
    N.sort(function (a, b) { return b - a }) /* sorting array in descending order*/
    for (let i = 0; i < N.length; i++) {
        if (N[i] == N[i + 1]) {
            N.splice(i, 2);
            i = -1;
        }
        if (N[i + 1] == undefined) {
            return parseInt(N.join(''))
        }
    }
}

let A = [3, 8, 7, 8, 3]
console


// second solution

function duplicate(arr) {
    res = [...new Set(arr)].filter(x => arr.indexOf(x) === arr.lastIndexOf(x));

    return res;
}