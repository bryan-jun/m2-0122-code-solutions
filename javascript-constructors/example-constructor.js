function ExampleConstructor() {

}

console.log('value of ExampleConstructor: ', ExampleConstructor);
console.log('type of ExampleConstructor: ', typeof ExampleConstructor);

var example1 = new ExampleConstructor();

console.log('example1 :', example1);

var check = example1 instanceof ExampleConstructor;

console.log('instanceof ', check);
