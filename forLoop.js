// for(let i=1; i<=10 ;i++){
//     console.log('hi');
//     for(j=5; j>=0;j--);
//         console.log('heloo raju',j);

// };

// for(k=1; k<=100;k++)
//     console.log(k);

// let p=2
// for(let l=1; l<=10;l++)
//     console.log(l,'*',p,'=',l*p);

// for(h=1;h<=100;h++)
//     if(h%3===0)
//         console.log(h);
    

//for in loop

let Employee={
    Name:'Raju',
    Add:'Bihar',
    slary:12000,
    id:2050,
    Emp_company:{
        com_Name:'Delfinzen',
        com_add:'puna'
    }
}

for(let key in Employee)
    {
    // console.log(key);
    // console.log(key,Employee);
        console.log(key,':',Employee.id);
    }



    let a=[4,5,6,8,9,10]
    for(let num in a){
        console.log(num)
    }
    console.log(a)

    let student={
        name:'rahul',
        roll:20,
        add:'pune',
        teacher:{
            subject:'english',
            sex:'m'
        }

    }
 for(let value  in student){
    console.log(value)
 }