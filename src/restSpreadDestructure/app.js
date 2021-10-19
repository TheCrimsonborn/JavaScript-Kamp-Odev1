// console.log(typeof showProducts);
// showProducts(10,"Elma","Armut","Karpuz");

//spread
/*
let points = [1,2,3,4,50,4,60,14]
console.log(...points);
console.log(Math.max(...points));
console.log(..."ABC","D",..."EFG","H");
*/

//destructuring
/*
let populations = [10000,20000,30000,[40000,100000]];
let [small, medium, high,[veryHigh,maxium]] = populations;
console.log(small);
console.log(medium);
console.log(high);
console.log(veryHigh);
console.log(maxium);

function someFucntion([small1],number) {
    console.log(small1);
}
someFucntion(populations);
*/

/*
let category = {id:1,name:"İçecek"};
console.log(category.id);
console.log(category["name"]);

let {id,name} = category;
console.log(id);
console.log(name);
*/