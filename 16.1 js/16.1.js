// Without running the code below, explain in your own words
// what the result of each block of code will be and why.
// If there are any faulty outputs, please write on how we can fix
// them.

// Block 1

//output:
// Undefined
// 2
// this output is do to using var on a, it will hoist it so 
//running it will first declare var a but will not assign a value until the a = 1
// log(a) happens two lines before a=1 so it will be undefined
// foo is acting as usual, you can declare function wherever as long as you call it it will give ou the return value.
function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();

// Block 2

// Aurelio De Rosa
// undefined
// first log will execute the object function and it will give the value set closest to it
// 2nd log will not know what 'this'.fullname is so it will give back undefined
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

// Block 3
// undefined
// number

// first log will not know what a is, it is not in his scope
// 2nd log will give back the type of b who had been declared as global with value of 0(no const var or let)
function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);

// Block 4
// '2' '2'

// function is working as it should and it is called upon twice
function funcC() {
  console.log("1");
}
funcC();
function funcC() {
  console.log("2");
}
funcC();

// Block 5
// 1
// error - undefined

//inside funcD1 we set a global variable d as such calling funcD2 who log d will give its value
// e is defined inside the scope of function funcD2 as suck logging e will will be undefined 
function funcD1() {
  d = 1;
}
funcD1();
console.log(d);
function funcD2() {
  var e = 1;
}
funcD2();
console.log(typeof e);

// Block 6
//Value of f in local scope:  1
//Value of f in local scope: undefined

// logging f in funcE will give the value of f as it is declared before the call
// logging f in line 99 will try to log f before initialization and as such it will be undefined
function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
