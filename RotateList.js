var rotateRight = function(head, k) {

    if(!head || !head.next) return head;

    let length=0
    let curr = head;
    while(curr){
        curr = curr?.next;
        length++;
    }

    k = k%length;
    let bwc=head;
    let fwc=head;

    for(let i=0;i<k;i++){
        fwc = fwc.next
    }

    while(fwc.next){
        bwc = bwc.next;
        fwc=fwc.next;
    }

    fwc.next=head;
    let newHead = bwc.next;
    bwc.next=null

    return newHead;

    
};