let a = "goku";
let b = "luffy";
let c = "goku";
if(a==b && b==c){
  console.log("All the names are same");
}
else if(a!=b && b==c){
  console.log(a,b);
}
else if(a==b && b!=c){
  console.log(b,c);
}
  else if(a==c){
    console.log(c);
  }
else {
  console.log("All are different");
}