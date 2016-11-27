//Написать функцию, которая будет принимать строку (только буквы латинского алфавита) любой длины и возвращать ее, но удалив из нее все гласные буквы английского алфавита. (их всего 6:  «A», «E», «I», «O», «U», «Y»)

let str = prompt("Write a string").split("");
function check() {
   var regexp = /[a-zA-Z]/;
   if(prompt == regexp ) {
       alert ("Input is correct");
   } else {
       alert("It is not english alphabet");
   }
}
check(str);
console.log(str);
let deleteElem = ["A","E","I","O","U","Y","a","e","i","o","u","y"];
function delete(array){
    for(var i=0; i<array.length; i++){
        if(array[i]==deleteElem[i]){
            
        }
    }
}
console.log(result);
