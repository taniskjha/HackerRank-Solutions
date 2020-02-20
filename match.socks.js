// Input - 9 10 20 20 10 10 30 50 10 20
// output - 3
// n: the number of socks in the pile
// arr: the colors of each sock

function sockMerchant(arr) {
    const sortArray = arr.sort((a, b) => a - b);
    console.log(sortArray)
    count = [];
    for (var i = 0; i < arr.length; i++) {
        if (sortArray[i] % sortArray[i + 1] == 0) {
            count.push(arr[i])
        }
    } console.log(Math.ceil(count.length / 2))
}
sockMerchant([9, 10, 10, 10, 10, 20, 20, 20, 30, 50])
sockMerchant([1, 1, 3, 1, 2, 1, 3, 3, 3, 3])
// [9, 10, 10, 10, 10, 20, 20, 20, 30, 50]
// [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]