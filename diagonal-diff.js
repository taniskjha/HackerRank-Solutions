


function diagonalDifference(arr) {
    // Write your code here

   
var diagonalOne = 0;
for (var i = 0; i < arr.length; i++) {
    for (var j=0; j < arr.length; j++) {
        if (i == j) {
          diagonalOne += arr[i][j]
        }
    }
}

var diagonalTwo = 0;
for (var i = 0; i < arr.length; i++) {
    for (var j=0; j < arr.length; j++) {
        if (i + j == arr.length - 1) {
          diagonalTwo += arr[i][j] 
        }
    }
}



return Math.abs(diagonalOne  - diagonalTwo); 



//......................................................................///


}  diagonalDifference([[1,2,3],[4,5,6],[7,8,9]])

