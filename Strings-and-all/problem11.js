// let a  =  ["manish","sanu","tanu","nitin"];
// let count  = 0;
// for(i=0;i<=a.length-1;i++){
//   let string = a[i];
//   if(string[0]!="A" || string[0]!="E" || string[0]!="I" || string[0]!="O"  || string[0]!="U"){
//     count++;
//      }
// }
//   console.log(count);


// let size = 5;
// let a = [];
// for(i=1;i<size;i++){
//   a.push(i+3);
// }
// console.log(a[a.length-1]);

// let string = "I am Iron Man";
// let count  = 0;
// let sum  = 0;
// for(i=0;i<=string.length-1;i++){
//   if(string[i]==" "){
//     count++;
//     count = count*count;
//     sum  = sum+count;
//   }
// }
// console.log(sum);

let arr= ["masai", "school", "web", "strings", "luffy"];

let characters=0

for(let i=0; i<arr.length;i++){
  characters= characters + arr[i].length
}

console.log(characters);