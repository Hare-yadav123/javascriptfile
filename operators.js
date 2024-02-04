//Type of operators

// Arithmetic operator 
// Assignment operator 
// Logical operator 
// string operator 
// Bitwise operator 
// comparison operator 
// Ternary operator 
// Type operator



// javaScript Comparison Operators


// Operator	Description

// ==	        equal to
// ===	        equal value and equal type
// !=	        not equal
// !==	        not equal value or not equal type
// >	        greater than
// <	        less than
// >=	        greater than or equal to
// <=	         than or equal to
// ?	          ternary operator




// JavaScript Bitwise Operators

// Bit operators work on 32 bits numbers.

// Any numeric operand in the operation is converted into a 32 bit number. The result is converted back to a JavaScript number.

// Operator	   Description	   Example	    Same as 	        Result	    Decimal

// &	        AND	            5 &  1      0101 &   0001	    0001	       1
// |	        OR	            5 | 1	    0101 | 0001     	0101	        5
// ~	        NOT	            ~ 5	        ~0101	            1010	       10
// ^	        XOR	            5 ^ 1	    0101 ^ 0001     	0100	        4
// <<	        left shift	    5 << 1	    0101 << 1	        1010	        10
// >>	        right shift	    5 >> 1	    0101 >> 1	        0010	        2
// >>>	        unsigned right shift	5 >>> 1	0101 >>> 1	    0010	            2




//TUrnery operator 

let age=18;

console.log(age>17? 'you can took admission':'you can not took admission')
if (age<18){
    console.log('you can not vote ')
}
else{
    console.log('you can vot')
}