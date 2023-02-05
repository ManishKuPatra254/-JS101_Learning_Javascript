// find the words in a sentence
//"masai school"

let a ="masai school hello everyone";
let space = 0;
for(let i = 0;i<a.length;i++){
  if(a[i]==" "){
    space+=1;
  }
}
console.log(space);