//const x: number = 20;
//document.write('<h1>X = ' + x + '</h1>');
var circle = {
    print: function () {
        document.writeln('<h1>Circle printed</h1>');
    }
};
var employee = {
    print: function () {
        document.writeln('<h1>Employee printed</h1>');
    }
};
function printAll(printableObjects) {
    printableObjects.forEach(function (printableObject) { return printableObject.print(); });
}
printAll([circle, employee]);
