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

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let rememberVar = 0;
    let dummy = new ListNode();
    let dummyHead = dummy;
    let sum = 0;

    //loop node of 2 SLL
    while (l1 || l2) {
        if (l1 && l2) {
            sum = l1.val + l2.val + rememberVar;
            l1 = l1.next;
            l2 = l2.next;
        } else if (l1 && !l2) {
            sum = l1.val + rememberVar;
            l1 = l1.next;
        } else {
            sum = l2.val + rememberVar;
            l2 = l2.next;
        }

        //calculate sum of each node value and check if it has remembered variable
        rememberVar = (sum >= 10) ? 1 : 0;
        sum = sum >= 10 ? sum - 10 : sum;
        dummyHead.next = new ListNode(sum);
        dummyHead = dummyHead.next;
    }

    //if final node sum >= 10, add node = 1 in the end of SLL
    if (rememberVar === 1) {
        dummyHead.next = new ListNode(rememberVar);
        dummyHead = dummyHead.next;
    }

    return dummy.next;
};
