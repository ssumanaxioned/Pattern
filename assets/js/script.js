function first () {
  let n = 4
  let string = "";
  for(let i = 1; i <= n; i++ ){
    for(let j = 1; j <= n - 1 ; i++) {
      string += " ";
      for(let k = 1; k <= 2 * i - i; k++ ) {
        string += "*";
      }
    }
    string += "\n";
  }
  console.log(string);
}

first();

function third () {
  let n = 4;
  let k = "";
  for(let i = 1; i < n; i++ ) {
    for(let j = 1; j <= i; j++ ){
      cube = j*j*j;
      k += cube + " ";
    }
    k += "\n";
  }
  document.getElementById('third').innerHTML = k;
  console.log(k);
}

third();
