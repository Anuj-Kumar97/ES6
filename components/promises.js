export function testPromises() {
    var sum = 0;
    var x = new Promise((accept, reject) => 
        setTimeout(() => accept(20),3000));
    var y = new Promise((accept, reject) => 
        setTimeout(() => accept(15),4000));
    Promise.all([x, y]).then(function (add) {
        add.forEach(function (pr) { sum = sum + pr;
        console.log("Promise : "+pr);
    })
        console.log("Sum : "+sum);
    })/*
    var add = function(x, y) {
        return new Promise((resolve,reject) => {
          var sum = x + y;
          if (sum) {
            resolve(sum);
          }
          else {
            reject(Error("Could not add the two values!"));
          }
        });
      };*/      
}