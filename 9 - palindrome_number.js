/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // all negative x will return false
    if (x >= 0){
        const reversed = x.toString().split("").reverse().join("")
        console.log(reversed)
        if (x == reversed)
            return true
    }
    
    return false
}