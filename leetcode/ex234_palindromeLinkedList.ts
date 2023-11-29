/**
 * Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
 *
 * Example 1:
 * Input: head = [1,2,2,1]
 * Output: true
 *
 * Example 2:
 * Input: head = [1,2]
 * Output: false
 *
 * Idea:
 * palindrome linked list: https://www.youtube.com/watch?v=WyI5dXMHW5c
 * reverse linked list: https://www.youtube.com/watch?v=3IN0BP9Ni6E
 *
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
    //Find middle node
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    //For odd nodes, let 2nd half smaller
    if (fast !== null) {
        slow = slow.next;
    }

    //Reverse 2nd half
    fast = head;    //1st half starting with fast
    slow = reverseLinkedList(slow); //2nd half

    //Compare 2 halves one by one
    while (slow !== null) {
        if (fast.val === slow.val) {
            fast = fast.next;
            slow = slow.next;
        } else {
            return false;
        }
    }
    return true;
};

const reverseLinkedList = (head: ListNode) => {
    if (head === null) return null;
    if (head.next === null) return head;

    let prevNode = null;
    let currNode = head;

    while (currNode !== null) {
        let nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }
    head = prevNode;
    return head;
};
