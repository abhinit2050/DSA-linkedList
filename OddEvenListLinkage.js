var oddEvenList = function(head) {
    let odd = head;
    let even;
    let evenStart;
    if(head?.next){
         even = head.next;
         evenStart = even;
    } else {
        return head
    }
    
    while(odd.next && even.next){
        odd.next = odd.next.next;
        even.next = even.next.next

        odd = odd.next;
        even = even.next;
    }
    odd.next = evenStart;

    return head;
};