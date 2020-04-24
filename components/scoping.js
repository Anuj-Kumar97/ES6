export function testScoping(){
    if(2>1)
    {
        let y=7;
        document.write("Y =",y);
        console.log("Y= ",y);
    }
    console.log("Y =",y);
}