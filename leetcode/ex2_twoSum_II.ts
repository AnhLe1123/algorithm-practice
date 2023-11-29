/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order,
 * and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself
 *
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 *
 * Example 2:
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 *
 * Example 3:
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
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

class ListNode2 {
    val: number
    next: ListNode2 | null
    constructor(val?: number, next?: ListNode2 | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers2(l1: ListNode2 | null, l2: ListNode2 | null): ListNode2 | null {
    let rememberVar = 0;
    let dummy = new ListNode2();
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
        dummyHead.next = new ListNode2(sum);
        dummyHead = dummyHead.next;
    }

    //if final node sum >= 10, add node = 1 in the end of SLL
    if (rememberVar === 1) {
        dummyHead.next = new ListNode2(rememberVar);
        dummyHead = dummyHead.next;
    }

    return dummy.next;
};
