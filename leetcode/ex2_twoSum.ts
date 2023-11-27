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
