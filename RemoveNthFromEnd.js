var removeNthFromEnd = function(head, n) {
    //declare sentinel node to handle the deletion of the head
    let sentinel = new ListNode();
    sentinel.next = head;  

    //calculate the length of the node
    let curr = head;
    let length=0;
    while(curr){
        length++;
        curr = curr.next;
    }

    //determining previous node to the target node to be deleted
    let prevPos = length-n;

    let counter=0;
    let prev = sentinel;
    while(counter < prevPos){
        prev = prev.next;
        counter++
    }

    prev.next = prev.next.next

    return sentinel.next;
};