/**
 * @param {number} k
 * @return {number}
 */
var preimageSizeFZF = function(k) {

    const f = (n) => {
        let count = 0;
        while (n > 0) {
            n = Math.floor(n / 5);
            count += n;
        }
        return count;
    };

    let left = 0;
 
    let right = 5 * k + 1; 

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        let zeros = f(mid);

        if (zeros === k) return 5;
        
        if (zeros < k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return 0;
};
