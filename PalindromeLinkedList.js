var isPalindrome = function(head) {
    //find the middle of linked list
    let slow = fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    
    //reversing the second half
    let prev = null;
    let curr = slow;

    while(curr){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp
    }

    //comparing the first half and the reversed second half
    //if they are same then it is a palindrome
    let firstIterator = head;
    let secondIterator = prev;

    while(secondIterator){
        if(firstIterator.val != secondIterator.val){
            return false;
        }
        firstIterator = firstIterator.next;
        secondIterator = secondIterator.next;
    }

    return true;
};