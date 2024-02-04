let num=50
console.log(num,':',typeof num)

//string conversion
let No=String(20)
console.log('type of No',No,typeof No)

//num conversion
let chr =('566')
console.log( 'char types',chr ,typeof chr)
console.log()

// boolean num
let x=!6
console.log(x)
console.log(Boolean(5))
console.log(Boolean(null))
console.log(Boolean(0));

let son='6'
let s =5
let s2=2
console.log(son+s+s2)


function gf(){
    res=''
    res=res+Number.isNaN(NaN)
  console.log(res)
}
gf()

//globle varible
let petname='dog'

function glob(){
    console.log(petname)
    //document.getElementById('ram').innerHTML=typeof petname +" "+ 'my pet name is '+petname;
}
glob()


// let petName = "Rocky"; //Global Variable 
// myFunction(); 

// function myFunction() { 
// 	document.getElementById("geeks").innerHTML 
// 		= typeof petName + "- " + 
// 		"My pet name is " + petName; 
// } 

// document.getElementById("Geeks") 
// 	.innerHTML = typeof petName + "- " + 
// 	"My pet name is " + petName;

