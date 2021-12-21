function fun(){
    print(callback);
}

function print(callback){
    const arg = document.getElementById("arg");
    callback(arg.value);
}

function callback(arg){
    window.alert(arg);
}