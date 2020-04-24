export function orderDetails(){
    var o_id=101;
    var o_title="Phone";
    var o_price=20000;
    var order={ id: o_id, title:o_title, price:o_price,
    getPrice(){return this.price;},
    printOrder(){
        console.log("Order id:"+this.id+" title:"+this.title+" price:"+this.price)}
    };
    var myprice=order.getPrice();
    var print=order.printOrder();
    let newOrder=Object.assign({},order);
    console.log("newOrder",newOrder);
}