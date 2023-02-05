let n = 35;
if(n%10==0){
  console.log("a");
}
else if(n%2==1){
  if(n%5==0 && n%2==0){
  console.log("b");
}
else if(n%5==0){
  console.log("c");
}
else{
  console.log("d");
}
}
else{
    console.log("e");
  }
