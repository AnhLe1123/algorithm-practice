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

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let arr1 = [];
    let arr2 = [];
    let rememberVar = 0;
    let resultArr = [];

    //convert LL to array
    while (l1) {
        arr1.push(l1.val);
        l1 = l1.next;
    }

    while (l2) {
        arr2.push(l2.val);
        l2 = l2.next;
    }

    let loopLength = arr1.length > arr2.length ? arr1.length : arr2.length;

    //loop arr to calculate sum of each index
    for (let i = 0; i < loopLength; i++) {
        const first = arr1[i] ? arr1[i] : 0;
        const second = arr2[i] ? arr2[i] : 0;
        let sum = first + second + rememberVar;
        if (sum >= 10) {
            rememberVar = 1;
            sum -= 10;
        } else {
            rememberVar = 0;
        }

        resultArr.unshift(sum);

        if (i === loopLength - 1 && rememberVar === 1) {
            resultArr.unshift(rememberVar);
        }
    }

    console.log(resultArr)

    //convert arr to SLL
    let dummy = new ListNode();
    let dummyHead = dummy;
    for(let i = resultArr.length - 1; i >= 0; i--){
        dummyHead.next = new ListNode(resultArr[i]);
        dummyHead = dummyHead.next;
    }

    return dummy.next;
};
