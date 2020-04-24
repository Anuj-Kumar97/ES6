export function arrayMatch(){
    let [a,b,c,d]=[5,43,27, ];
    console.log("c: ",c);
}

export function deepMatch(){
    let org={
        name:'ITER',
        address:{
            area: 'Khandagiri',
            city: 'Bhubaneswar',
            state: 'Odisha',
            pincode: 751030
        }
    };
    let {address: {pincode}}=org;
    console.log('Pin Code: ',pincode);
}