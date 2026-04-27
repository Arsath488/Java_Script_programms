/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const res = [];
    
    function traverse(node) {
        if (!node) {
            res.push("#");
            return;
        }
        res.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }
    
    traverse(root);
    return res.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const values = data.split(",");
    let i = 0;
    
    function build() {
        if (values[i] === "#") {
            i++;
            return null;
        }
        
        const node = new TreeNode(Number(values[i]));
        i++;
        node.left = build();
        node.right = build();
        return node;
    }
    
    return build();
};

