// for(let i = 1; i<=10;i++){
//   if(i%4==0){
//     break;
//   }
//   console.log(i*2);
// }

// let sum = 0;
// let  count = 0;
// for(let i = 1; i<=100;i++){
//   sum = sum+i;
//   count++;
// }
// console.log(sum/count);

// let n =6;
// while(n<=9){
//   if(n%3==0){
//     n=n+2;
//   }
//   else{
//     n++;
//   }
//   console.log(++n);
// }

//  let n =9;
// let  count1 = 0;
// let  count2 = 0;
// for(let i = 1; i<=9;i++){
//   if(n%i==0){
//     count1++;
// }
// else{
//   count2++;
//  }
// }
// console.log(count1,count2);


let x = 15;
let n = 1;
let  count = 0;
while(n<=x){
  if(x%n==0){
    count++;
  }
  n++;
}
console.log(count);