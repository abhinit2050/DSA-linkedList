var removeNthFromEnd = function(head, n){
    let sentinel = new ListNode();
    sentinel.next = head;
    let slow = sentinel;
    let fast = slow;
    for(let i =0; i<n;i++){
        fast = fast.next;
    }

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;
    
    return sentinel.next;
}