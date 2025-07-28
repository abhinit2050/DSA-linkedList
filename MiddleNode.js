var middleNode = function(head) {
    let fast = head;
    let slow = head;

    while(fast != null && fast.next !=null){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

let result = middleNode({val: 1, next: {
    val: 2, next: {
        val: 3, next: {
            val: 4, next: {
                val: 5, next: null
            }
        }
    }
}});

console.log(result); 