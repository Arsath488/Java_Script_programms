/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
    const stack = [arr[Symbol.iterator]()];

    while (stack.length > 0) {
        const it = stack[stack.length - 1];
        const { value, done } = it.next();

        if (done) {
            stack.pop();
            continue;
        }

        if (Array.isArray(value)) {
            stack.push(value[Symbol.iterator]());
        } else {
            yield value;
        }
    }
};
