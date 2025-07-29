var hasCycle = function(head) {
    let curr = head;
    let seenNodes = new Set();

    while(curr){
        if(seenNodes.has(curr.next)){
            return true;
        } else {
            seenNodes.add(curr.next)
            curr = curr.next;
        }
    }  
    return false;
};