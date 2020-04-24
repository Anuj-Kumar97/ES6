export function add(){
    let addno=(x=14,y=19)=>{
        document.write('x= '+x+' y= '+y+' sum = '+(x+y));
    }
    addno();
    addno(12);
}
export function userFriendnames(){
    function userFriends(user,...friends){
        console.log('user', user);
        console.log('friends',friends);
    }
    userFriends('Anuj','Akshay','Yash','Ravi');
}
export function printCapitalNames(){
    let names=['matt','jerry','ivan','chris','tony'];
    let cap=names.map(item => item.toUpperCase);
    console.log(cap);
}