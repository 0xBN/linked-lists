console.log('linked lists');

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._size = 0;
  }

  prepend(data) {
    // make new node
    const newNode = new Node(data);
    // the new node points to the original head
    newNode.next = this._head;
    // make new node the new head
    this._head = newNode;
    // track the size
    this._size++;
  }

  append(data) {
    // edge case:
    if (this._head === null) return this.prepend(data);
    // creating new node
    const newNode = new Node(data);
    let current, next;
    current = this._head;
    next = current.next;

    // Traverse through the list until the end
    while (current.next) {
      current = next;
      next = current.next;
    }
    // Assign new node to previously null value
    current.next = newNode;
    // track the size
    this._size++;
  }

  size() {
    return this._size;
  }

  head() {
    return this._head;
  }

  tail() {
    let current = this._head;
    let next = current.next;
    let last;

    while (next) {
      current = next;
      next = current.next;

      if (next === null) last = current;
    }
    return last;
  }

  printList() {
    if (this._head === null) return 'empty list';
    let current = this._head;
    let next = current.next;
    let index = 0;

    let output = `${current.data} ->`;
    console.log(index, current.data);

    while (current.next) {
      index++;
      console.log(index, current.next.data);
      output = output + ` ${current.next.data} ->`;
      current = next;
      next = current.next;
    }

    output = output + ' null';
    console.log(output);
    // console.log('size: ', this._size);
    return output;
  }

  nodeAt(index) {
    if (index > this._size) return 'error: index higher than list size';

    let current = this._head;
    let next = current.next;
    let count = 0;

    while (index > count) {
      // console.log(current);
      current = next;
      next = current.next;
      // console.log(count);
      count++;
    }
    // console.log('ANSWER', current);
    console.log(`Node at index ${index}`);
    return current;
  }

  pop() {
    if (this._head === null) return 'list is empty';

    let current = this._head;
    let next = current.next;
    let previous;

    // traverse through list to last one
    while (next) {
      previous = current;
      current = next;
      next = current.next;
    }

    previous.next = null;
    this._size--;
  }

  contains(data) {
    let current = this._head;
    let next = current.next;

    // console.log(current.data);
    if (data === current.data) return true;

    while (current.next) {
      // console.log(current.next.data);
      current = next;
      next = current.next;
      if (data === current.data) return true;
    }

    return false;
  }

  find(data) {
    let current = this._head;
    let next = current.next;
    let index = 0;

    // console.log(current.data);
    if (data === current.data) return index;

    while (current.next) {
      index++;
      // console.log(current.next.data);
      current = next;
      next = current.next;
      if (data === current.data) return index;
    }

    return false;
  }

  insertAt(value, index) {
    console.log(
      '************************contains insertAt************************************'
    );

    const newNode = new Node(value);

    let current = this._head;
    let next = current.next;
    let previous;
    let count = 0;

    // When inserting: find index; previous points at new node; new node points at current node

    // Edge case: insert at 0 - prepend
    if (index === 0) this.prepend(value);

    // Edge case: insert outside of range of linked list (index too high or negative)
    if (index >= this._size) {
      console.log('index greater than size');
      return 'index greater than size';
    }

    // Traverse to index and reassign nodes
    while (current.next) {
      count++;
      previous = current;
      current = next;
      next = current.next;
      if (count === index) {
        // console.log('inside of loop');
        console.log('insert here!!', current.data);
        // console.log('previous', previous);
        // console.log('current', current.data);
        // console.log('next', next);
        previous.next = newNode;
        newNode.next = current;
        return;
      }
      // console.log(count, current.data);
    }
  }

  removeAt(index) {
    console.log(
      '************************contains removeAt************************************'
    );

    let current = this._head;
    let next = current.next;
    let previous;
    let count = 0;

    // Invalid: Index is greater than size
    if (index >= this._size) {
      // console.log('index greater than size');
      return 'index greater than size';
    }

    // Remove from end
    if (index === this._size - 1) {
      this.pop();
    }

    // Linked list is empty
    if (index === 0 && this._size === 0) {
      return 'remove error: cannot remove from an empty list';
    }

    // Remove first node
    if (count === index) {
      this._head = current.next;
    }

    // Traverse to index and reassign nodes
    while (current.next) {
      count++;
      previous = current;
      current = next;
      next = current.next;
      if (count === index) {
        // console.log('inside of loop');
        console.log('REMOVE THIS!!', current.data);
        // console.log('previous', previous);
        // console.log('current', current.data);
        // console.log('next', next);
        previous.next = next;
        return;
      }
      // console.log(count, current.data);
    }
  }
}

const ll = new LinkedList();

ll.pop();

ll.prepend(300);
ll.prepend(200);
ll.prepend(100);
ll.append(400);
ll.append(500);
ll.append(600);

ll.printList();

console.log('size: ', ll.size());
console.log('tail: ', ll.tail());
// console.log('head: ', ll.head());
// console.log('nodeAtIndex', ll.nodeAt(8));
// ll.pop();
// console.log(ll.find(500));

ll.insertAt('cat', 6);

console.log(
  '*****************************print stuff*******************************'
);
ll.printList();
console.log('size: ', ll.size());
