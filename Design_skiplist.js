class Node {
    constructor(val, next = null, down = null) {
        this.val = val;
        this.next = next;
        this.down = down;
    }
}

var Skiplist = function() {
   
    this.head = new Node(-1);
};

/** 
 * @param {number} target
 * @return {boolean}
 */
Skiplist.prototype.search = function(target) {
    let curr = this.head;
    while (curr) {
    
        while (curr.next && curr.next.val < target) {
            curr = curr.next;
        }
        
        if (curr.next && curr.next.val === target) return true;
     
        curr = curr.down;
    }
    return false;
};

/** 
 * @param {number} num
 * @return {void}
 */
Skiplist.prototype.add = function(num) {
    let curr = this.head;
    let nodesToUpdate = [];

 
    while (curr) {
        while (curr.next && curr.next.val < num) {
            curr = curr.next;
        }
        nodesToUpdate.push(curr);
        curr = curr.down;
    }

    
    let insert = true;
    let downNode = null;

    while (insert && nodesToUpdate.length > 0) {
        let prev = nodesToUpdate.pop();
        prev.next = new Node(num, prev.next, downNode);
        downNode = prev.next;
    
        insert = Math.random() < 0.5;
    }

  
    if (insert) {
        this.head = new Node(-1, new Node(num, null, downNode), this.head);
    }
};

/** 
 * @param {number} num
 * @return {boolean}
 */
Skiplist.prototype.erase = function(num) {
    let curr = this.head;
    let found = false;

    while (curr) {
      
        while (curr.next && curr.next.val < num) {
            curr = curr.next;
        }
     
        if (curr.next && curr.next.val === num) {
            found = true;
            curr.next = curr.next.next;
        }
        curr = curr.down;
    }
    return found;
};
