// check whether k is present or not

let a = ["a","b","c","d","k","e"];
let flag = false;
for(let i =1;i<=a.length;i++){
  if(a[i]=="k"){
    flag = true;
  }
  else{
    flag =false; // if this else part we remove than we will get YES else we get no because it will check the first that it will be k or not so false so NO
  }
}
if(flag==true){
  console.log("Yes");
}
else{
  console.log("No");
}