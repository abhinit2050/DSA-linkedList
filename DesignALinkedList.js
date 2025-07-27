function Node(val){
    this.val=val;
    this.next=null
}
var MyLinkedList = function() {
    this.head=null;
    this.size=0;
};

MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++
};

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

MyLinkedList.prototype.addAtIndex = function(index, val) {
    let newNode = new Node(val);

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

let mylinkedList = new MyLinkedList();
mylinkedList.addAtHead(1);
mylinkedList.addAtTail(3);
mylinkedList.addAtIndex(1, 2); 
console.log(mylinkedList); // Should show the linked list with 1 -> 2 -> 3