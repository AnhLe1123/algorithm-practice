
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //add node
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
        return this;
    }

    //delete the last node and return deleted node
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    //delete the first node and return deleted node
    shift() {
        if (!this.head) return undefined;
        let currentNode = this.head;
        this.head = currentNode.next;
        this.length --;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentNode;
    }

    //add value as the first node
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length ++;
        return this;
    }

    //get value by index
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter ++;
        }
        return current;
    }

    //set value for specific index, return true if success, else false
    set(index, val) {
        let foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    //insert a new value in a specific index, return true if success, else false
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    //remove value of specific index, return removed value
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === this.length - 1) return this.pop();
        if (index === 0) return this.shift();

        let prev = this.get(index - 1);
        let removed = prev.next;
        prev.next = removed.next;
        this.length --;
        return removed;
    }

    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

    rotate(place = this.length) {
        if(place === 0 || place >= this.length) return this;
        if(place < 0) {
            place = this.length + place
        }
        let current = this.head;
        let counter = 0
        while (counter < place) {
            this.push(current.val)
            this.shift(current.val)
            current = current.next
            counter++
        }

        return this;
    }
}

let list = new SinglyLinkedList();
list.push('Hello');
list.push('Goodbye');
list.push('Nice to see you');

console.log('----test push----');
console.log(list);

console.log('----test pop----');
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());

list.push('Hello');
list.push('Goodbye');
list.push('Nice to see you');

console.log('----test shift----');
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());

console.log('----test unshift----');
console.log(list.unshift('Welcome'));
console.log(list.unshift('Hi there'));

console.log('----test get----');
console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
console.log(list.get(-1));

console.log('----test set----');
console.log(list.set(0, 'Welcome to the team'));
console.log(list.set(1, 'Hello'));
console.log(list.set(2, 'Hello'));
console.log(list.set(-1, 'Hello'));

let list1 = new SinglyLinkedList();
console.log('----test insert----');
console.log(list1.insert(10, 'Hi'));
list1.push('Hello');
list1.push('Nice to meet you');
console.log(list1);
console.log(list1.insert(1, 'Goodbye'));
console.log(list1);

console.log('----test remove----');
let list2 = new SinglyLinkedList();
list2.push('Le');
list2.push('Van');
list2.push('Anh');
list2.push('Lena');
console.log(list2.remove(3));
console.log(list2.remove(0));
console.log(list2.remove(1));

var listX = new SinglyLinkedList()

listX.push(100)
listX.push(201)
listX.push(250)
listX.push(350)
listX.push(999)
listX.print();
listX.rotate();
listX.print();