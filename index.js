let str="qwertyuiopasdfghjklzxcvbnm"
let pass=""

for (let i = 1; i <= 6; i++) {
  let char=Math.floor(Math.random() * str.length+1)
  pass+=str.charAt(char)
}

console.log(pass);
