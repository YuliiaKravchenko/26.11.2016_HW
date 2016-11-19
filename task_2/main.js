// 1 variant
function checkArgType1(a, b, c) {
    let result = [];
    for (var i = 0; i < arguments.length; i++) {
        result[i]=typeof(arguments[i]);
    }
    
    return result;
}

console.log(checkArgType1(1,"hi",a=[1,2,3],true));

//2 variant
function checkAgrType2(...theArgs){
   let result = [];
    let str;
    for (var i=0; i<theArgs.length; i++){
        result[i]=typeof(theArgs[i]);
        str=result.join(',');
    }
    return str;
}

console.log(checkAgrType2(5, true, {a:"letter"}));


