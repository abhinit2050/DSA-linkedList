function Node(val){
    this.val=val;
    this.next=null
}
var MyLinkedList = function() {
    this.head=null;
    this.size=0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    

   if(index<0 || index >= this.size) return -1;
   let current = this.head;

    for(let i=0; i<index;i++){
        current = current?.next
    }

    return current?.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
     let newNode = new Node(val);
     if(this.head == null){
        this.head = newNode;
        
     } else {
        let curr = this.head;

    while(curr.next != null){
        curr = curr.next
    }
    
     curr.next= newNode;
    
     }

     this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let newNode = new Node(val);
    if(index<0 || index>this.size) return;
    if(index==0){
        this.addAtHead(val);
        return;
    }  if (index==this.size){
        this.addAtTail(val);
        return;
    }
    let curr = this.head;
    let counter = 0;
    while(counter<index-1){
        curr = curr.next;
        counter++;
    }
    newNode.next = curr.next;
    curr.next = newNode;

    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let current = this.head;
    
    if(index<0 || index>=this.size) return;

    if(index == 0) {
        this.head = this.head.next;
        this.size--;
        return;
    }

    for(let i=0;i<index-1;i++){
        current = current.next
    }
    current.next = current.next?.next;
    this.size--;
};


let mylinkedList = new MyLinkedList();
mylinkedList.addAtHead(1);
mylinkedList.addAtTail(3);
mylinkedList.addAtIndex(1, 2); 
mylinkedList.deleteAtIndex(1); 
console.log(mylinkedList);