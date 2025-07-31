var getIntersectionNode = function(headA, headB) {
    let linkedListBSet = new Set();
    let currA = headA;
    let currB = headB;

    //add all nodes of second list to a set
    while(currB){
        linkedListBSet.add(currB);
        currB = currB.next;
    }

    //check if the set has the element of the first list
    while(currA){
        if(linkedListBSet.has(currA)){
            return currA;
        }
        currA = currA.next;
    }
};