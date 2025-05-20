/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let arr = [[1]]

    for(let i=1; i<numRows; i++){
        let temp = [0, ...arr[i-1] ,0]
        let row = []
        for(let j=0; j<=i; j++){
            row.push(temp[j]+temp[j+1])
        }
        arr.push(row)
    }

    return arr
};