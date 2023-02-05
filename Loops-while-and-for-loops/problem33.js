// let a = 10;
// if(a%2==0){
//   for(i=1;i<=5;i++){
//     a=a+i;
//   }
// }
// console.log(a);

 // for(var i=1;i<=10;i++){
 //   if(i==5){
 //     break;
 //   }
 //   if(i==3){
 //     continue;
 //   }
 //   console.log(i);
 // }

// let a = 1;
// let num = 0;
// while(a<=10){
//   if(a%2!=0){
//     num = 3*a;
//     if(num>9){
//       console.log(num);
//     }
//   }
//   a++;
// }
// console.log(a);

// let num = 10;
// let i = 1;
// let factor = 0;
// while(i<=num){
//    if(num%i==0){
//      factor++;
//   }
//   i++;
// }
// console.log(factor);

// let n = 6;
//  while(n<=9){
//     if(n%3==0){
//       n =n+2;
//     }
//    else{
//      n++;
//    }
//    console.log(++n);
//  }



// let a = 10;
// for(i=1;i<=15;i++){
//   i=a-i;
//   a=a+i
// }
// console.log(a);

 let a = 10;
 let b = 12;
 let c = 8;
while(c<a){
  c++;
  if(a<b){
    a++;
  }
  if(a==b){
    break;
  }
}
console.log(a,c);