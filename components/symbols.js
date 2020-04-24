const previousNo = Symbol('fib');
const currentNo = Symbol('fib');
class fib {
    constructor(prev, curr) {
        this[previousNo] = prev;
        this[currentNo] = curr;
    }
        fibonacci() {
            let prev = this[previousNo];
            let curr = this[currentNo];
            let result = prev + curr;
            console.log("Previous Fibonacci No. " +prev);
            console.log("Current Fibonacci No. " +curr);
            console.log("Next Fibonacci No. " +result);
        }
}
export function getNextFibonacci() {
    let fibObj = new fib(1,2);
    fibObj.fibonacci();
}