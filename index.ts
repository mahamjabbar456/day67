/********************************
 * TYPE ANNOTATIONS WITH ARRAYS *
 ********************************/

let vegetable:string[] = ["Onion","Potato","LadyFinger","Lemon","Tomato","Spinach"];

for(let i = 0;i<vegetable.length;i++){
    console.log(vegetable[i]);
}

/*************************************************
 * TYPE ANNOTATIONS WITH MULTIDIMENSIONAL ARRAYS *
 *************************************************/

let number:number[] = [11,12,13,14,15]
let vegetableandnumber:(number | string)[] = ["Onion","Potato","LadyFinger","Lemon","Tomato","Spinach",11,12,13,14,15]
console.log(vegetableandnumber);