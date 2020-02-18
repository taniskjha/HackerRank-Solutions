// Input - 1 2 3 4 5
// Output - 10 14

// minimum sum
function min_sum(arr) {
    const max = Math.max(...arr);
    return arr.filter(a=> a !== max).reduce((a,b) => a+b,0)
}

min_sum([1,2,3,4,5])

// maximum sum

function maxsum(arr) {
    const min = Math.min(...arr);
    return arr.filter(a=> a !== min).reduce((a,b) => a+b,0)
}

maxsum([1,2,3,4,5])



function miniMaxSum(arr) {
    
    arr.split('').


}
