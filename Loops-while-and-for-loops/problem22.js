// let unit consumed be N
let N = 6;
// total bill = 80 + N * per unit price 
if(N>=0 && N<=50){
  total_bill = 80+(N*3);
  console.log(total_bill);
}
if(N>=51 && N<=150){
  console.log(80+(N*5));
}
if(N>=151){
  console.log(80+(N*10));
}