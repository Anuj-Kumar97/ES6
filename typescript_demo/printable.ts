//const x: number = 20;
//document.write('<h1>X = ' + x + '</h1>');

interface Printable {
    print: ()=>void
}

let circle:Printable = {
    print() {
        document.writeln('<h1>Circle printed</h1>');
    }
}
let employee:Printable = {
    print() {
        document.writeln('<h1>Employee printed</h1>');
    }
}

function printAll(printableObjects: Array<Printable>): void {
    printableObjects.forEach((printableObject)=>printableObject.print());
}

printAll([circle, employee]);