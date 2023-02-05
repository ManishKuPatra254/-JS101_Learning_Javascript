let arr= "masai";
let even_count=0;
let odd_count=0;

for(let i=0; i<arr.length;i++){
  if(arr[i]%2==0){
    even_count++;
  }
  else{
    odd_count++;
  }
}
console.log("even:", even_count, "odd:", odd_count);