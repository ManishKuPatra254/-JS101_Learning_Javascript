let left=1;
let right=10;
let k=3;
let count = 0;
let i=0;
while(i<=left && i<=right){
  if(i%k==0){
    count++;
    i++;
  }
}
console.log(k);