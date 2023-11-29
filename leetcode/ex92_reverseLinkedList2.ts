/**
 * Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the
 * list from position left to position right, and return the reversed list.
 *
 * Example 1:
 * Input: head = [1,2,3,4,5], left = 2, right = 4
 * Output: [1,4,3,2,5]
 *
 * Example 2:
 * Input: head = [5], left = 1, right = 1
 * Output: [5]
 *
 * Idea: https://www.youtube.com/watch?v=oDL8vuu2Q0E
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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    //create dummy node: because if left = head, able to get node-before-head
    const dummy = new ListNode(0);
    dummy.next = head;

    //go to node to reverse
    let leftPrev = dummy;
    let currNode = head;

    for (let i = 0; i < left - 1; i++) {
        leftPrev = leftPrev.next;
        currNode = currNode.next;
    }
    //mark node to start reverse
    let subHead = currNode;

    //reverse
    let prevNode = null;
    for (let i = 0; i <= right - left; i++) {
        let nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }

    //join pieces
    leftPrev.next = prevNode;
    subHead.next = currNode;

    return dummy.next;
};