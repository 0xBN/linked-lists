const LinkedList = require('./linkedList');

const ll = LinkedList.fromValues(10, 20, 30, 40);
ll.print();
ll.insertAtIndex(2, 60);
ll.print();
ll.removeHead();
ll.print();
