// Operato	Description


// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Division Remainder)
// ++	Increment
// --	Decrement


/*let num=20
num++ //post increment
console.log(num)

let a=20
++a //pre inrement
console.log(a);*/

/*function complexSwitchExample() {
    let num = 3;
  
    switch (num) {
      case 1:
        console.log("Case 1");
        if (num < 5) {
          console.log("Inside if for Case 1");
          break;
        }
        console.log("This won't be reached.");
      case 2:
        console.log("Case 2");
        if (num === 2) {
          console.log("Inside if for Case 2")
            continue;
        }
        console.log("This won't be reached.");
      case 3:
        console.log("Case 3");
        if (num === 3) {
          console.log("Inside if for Case 3");
        
        }
        console.log("This will be reached.");
      case 4:
        console.log("Case 4");
        if (num < 5) {
          console.log("Inside if for Case 4");
          break;
        }
        console.log("This will be reached.");
      default:
        console.log("Default case");
    }
  }*/

function resultAll(arr) {
       let result = 0;
        for (let k = 0; i < arr.length; k++) {
         for (let m = 0; m < arr[ k ].length; m++) {
           if( arr[ k ][ m ] % 5 == 0 ) result += (arr[ k ][ m ]); 
         }
       }
         return result;
    }
      
resultAll ( [ [4, 5], [6, 10], [15, 16, 17] ] );  //function call 

