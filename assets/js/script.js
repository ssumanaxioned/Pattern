function first () {
  let n = 4
  let string = "";
  for(let i = 1; i <= n; i++ ){
    for(let j = 1; j <= n - i ; j++) {
      string += " ";
    }
    for(let k = 1; k <= 2 * i - 1; k++ ) {
      if (k%2 === 0) {
        string += "A";
      }
      else {
        string += "*";
      }
    }
    string += "\n";
  }
  console.log(string);
  document.getElementById('first').innerHTML = string;
}
first();

function second() {
  let n = 5;
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      string += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      if(i === 1 || i === n) {
        string += "*";
      }
      else {
        if(k === 1 || k === 2 * i - 1) {
          string += "*";
        }
        else {
          string += " ";
        }
      }
  }
  string += "\n";
}
console.log(string);
document.getElementById('second').innerHTML = string;
}
second();

function third () {
  let n = 4;
  let string = "";
  for(let i = 1; i < n; i++ ) {
    for(let j = 1; j <= i; j++ ){
      cube = j*j*j;
      string += cube + " ";
    }
    string += "\n";
  }
  document.getElementById('third').innerHTML = string;
  console.log(string);
}
third();

function forth() {
  let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = i; j <= n; j++){
    string +=  "*";
  }
  for (let k = 1; k < i*2 - 1; k++){
    string += " ";
  }
  for (let j = i; j <= n; j++){
    string +=  "*";
  }
  string += "\n";
}
for (i = n-1; i>=1; i--){
  for(j = n; j >= i; j--){
    string += "*";
  }
  for (let k = 1; k < i*2 - 1; k++){
    string += " ";
  }
  for(j = n; j >= i; j--){
    string += "*";
  }
  string += "\n";
}
console.log(string);
document.getElementById('forth').innerHTML = string;
}
forth();

function fifth(){
  let n = 5;
  let string = "";
  for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n*2 ; j++){
      if (j===1 || j===n*2) {
        string += "*";
      }
      else{
        if (j<=i || j>n*2-i) {
          string += "*";
        }
        else {
          string += " ";
        }
      }
    }
    string += "\n";
  }
  for(let i = 5; i >= 1; i--) {
    for(let j = 1; j <= n*2 ; j++){
      if (j===1 || j===n*2) {
        string += "*";
      }
      else{
        if (j<=i || j>n*2-i) {
          string += "*";
        }
        else {
          string += " ";
        }
      }
    }
    string += "\n";
  }
  console.log(string);
  document.getElementById('fifth').innerHTML = string;
}
fifth();

function sixth() {
  let n = 6;
  let string = "";
  for(let i = 1; i <= 6; i++){
    for(let j  =1; j <= i; j++){
      string += "#";
    }
    string += "\n";
  }
  console.log(string);
  document.getElementById('sixth').innerHTML = string;
}
sixth();

function seventh() {
  let n = 5;
  let string = "";
  for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n - i; j++){
      string += " ";
    }
    for(let k = i; k <= 2*i-1; k++){
      string += k;
    }
    if( i > 1 ){
      for(let l = 2*i-2; l >= i; l--){
        string += l;
      }
    }
    string += "\n";
  }
  console.log(string);
  document.getElementById('seventh').innerHTML = string;
}
seventh();
