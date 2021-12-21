const spans = document.querySelectorAll("main > div span"); 
const btn = document.querySelector("button");

const arr = [];
let x;
//Função que é chamada após o click
function sort(){
  printClear();
  arr.splice("");
  btn.hidden = true;
  x = setInterval(callback, 1000);
}

function callback(){
  let confirm;
  if(arr.length < 6){
    do{
      confirm = parseInt(Math.random() * 60)
    }while(verify(confirm));
    arr.push(confirm);
    spans[arr.length - 1].innerText = arr[arr.length - 1];
  }else{
    clearInterval(x);
    btn.hidden = false;
  }
  
}

function verify(confirm){
  return arr.some( (elem) => elem == confirm);
}

function printClear(){
  arr.forEach( (elem, id) => { spans[id].innerText = "" });
}