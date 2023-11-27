//print numbers from 0 -> specific number

//#1: with for
function countDown(num) {
    for (let i = num; i > 0; i--) {
        console.log(i)
    }
    console.log('All done!');
}

countDown(3);

//#2: with recursion
function countDown2(num) {
    if (num <= 0) {     //base case: when recursion ends
        console.log('All done!');
        return;
    }
    console.log(num);
    num--;
    countDown2(num);
}
countDown2(5);