let armstrong= {
    [Symbol.iterator]() {
        let n=1;
        return {
            next() {
                var i = n, r = 0, sum = 0, flag = 0;
                for(i=n; i<=500; i++)
                {
                    sum = 0;
                    var t = i;
                    while(t>0)
                    {
                        r = parseInt(t%10);    
                        sum = parseInt(sum + (r*r*r)); 
                        t = parseInt(t/10);
                    }
                    if(sum==i)
                    {
                        flag = 1;
                        break;
                    }
                }
                if(flag==1) {
                    n = sum+1;
                    return {done: false, value: sum};
                }
                else {
                    return {done: true, value: null};
                }
            }
        }
    }
}

export function testArmstrong() {
    let Itr = armstrong[Symbol.iterator]();
    console.log("Armstrong ", Itr.next());
    console.log("Armstrong ", Itr.next());
    console.log("Armstrong ", Itr.next());
    console.log("Armstrong ", Itr.next());
    console.log("Armstrong ", Itr.next());
    console.log("Armstrong ", Itr.next());
}