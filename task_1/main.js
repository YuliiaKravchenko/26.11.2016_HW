// Сумма удвоенных значений каждого элемента (Number)
let numbers = [1, 2, 3, 4, 5];

function sum(array) {
    let s = 0;
    for (var i = 0; i < array.length; i++) {
        s += array[i] * 2;
    }
    console.log(s);
    console.log(typeof (s));
}
sum(numbers);

// Узнать, есть ли в массиве четные числа (Boolean)
let numbers1 = [2, 4, 6];

function checkArray(array) {
    for (var i = 0; i < array.length; i++) {
        let check = array[i]%2;
        if (check == 0) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
checkArray(numbers1);

// Соединить элементы массива в одну строку, где слова разделены пробелами (String)

let str = ["this", "is", "a", "very", "long", "array", "which", "has", "absolutely", "no", "sense"];
console.log(str.join(" "));
console.log(typeof(str.join( )));

// Получить новый массив, в котором к каждому элементу (строке) будет добавлено число, равное количеству символов в этой строке. Например, [“this - 4”, “is - 2” ....] (Array)

let newStr = str.map(function(Array) {
    let l = Array+"-"+Array.length;
    return l;
}); 
console.log(newStr);
console.log(typeof(newStr));

// Получить новый массив, в котором все элементы (строки) содержат 4 или более символов (Array)


let result = str.filter(function(Array){
    let l = Array.length;
    if(l>=4){
        return Array;
    }
});
console.log (result);
console.log(typeof(result));

// Получить массив, который будет содержать только нечетные числа (Array)

let nums = [1, 2, 3, 5, 8, 13, 21, 34];
function chooseNum(array) {
    let n = array%2;
  if (n !== 0){
      return array;
  }
}
let r = nums.filter(chooseNum);
console.log(r); 
console.log(typeof(r)); 

// Сообщить, является ли сумма всех элементов больше 100 (Boolean)

function checkSum(array) {
    let s = 0;
    for (var i = 0; i < array.length; i++) {
        s += array[i];
        if (s > 100) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

checkSum(nums);

// Получить строку, которая будет содержать все элементы двух массивов перечисленных через запятую (String)

//let str = ["this", "is", "a", "very", "long", "array", "which", "has", "absolutely", "no", "sense"];
//let nums = [1, 2, 3, 5, 8, 13, 21, 34];

let newArray = nums.concat(str).join(",");
console.log(newArray);
console.log(typeof(newArray));
