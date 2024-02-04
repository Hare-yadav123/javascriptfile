// Operator	Example	Same As


// =	 x = y	  x = y
// +=	 x += y	  x = x + y
// -=	 x -= y	  x = x - y
// *=	 x *= y	  x = x * y
// /=	 x /= y	  x = x / y
// %=	 x %= y	  x = x % y
// **=	 x **= y	  x = x ** y


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
