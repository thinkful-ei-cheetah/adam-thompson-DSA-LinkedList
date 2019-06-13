'use strict';
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if(this.head === null){
      this.insertFirst(item);
    }else{
      let tempNode = this.head;
      while (tempNode.next !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, item2){
    if(this.head === null){
      this.insertFirst(item);
    }else {
      let tempNode = this.head;
      while(tempNode.next.value !== item2){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, item2);
    }
  }

  insertAfter(item, item2){
    if(this.head === null){
      this.insertFirst(item);
    }else {
      let tempNode = this.head;
      while(tempNode.next.value !==item2){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item2, item);
    }
  }

  insertAt(item, pos){
    if(this.head === null){
      this.insertFirst(item);
    }

  }

  find(item){
    let currNode = this.head;
    if(!this.head){
      return null;
    }

    while(currNode.value !== item){
      if(currNode === null){
        return null;
      }else{
        currNode = currNode.next;
      }
    }

    return currNode;
  }

  remove(item){
    //list empty
    if(!this.head){
      return null;
    }
    // node removed is head makes next node head
    if(this.head.value === item){
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)){
      previousNode = currNode;
      currNode = currNode.next;
    }

    if(currNode === null){
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

function main(){
  let SLL = new LinkedList();
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('starbuck');
  SLL.insertLast('Tauhida');
  SLL.insertAfter('cheese', 'Boomer');
  return SLL;
}

console.log(main());