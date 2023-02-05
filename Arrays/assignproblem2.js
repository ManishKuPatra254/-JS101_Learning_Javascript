let all_character = "manish";
let lower_character = ["aman","lalit","manish","nitin"];
let upper_character = ["AMAN","LALIT","MANISH","NITIN"];
for(let i = 0;i<lower_character.length;i++){
  if(all_character==lower_character[i]){
    all_character = upper_character[i];
  }
}
console.log(all_character);