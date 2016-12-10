//Написать функцию, которая будет принимать строку (только буквы латинского алфавита) любой длины и возвращать ее, но удалив из нее все гласные буквы английского алфавита. (их всего 6:  «A», «E», «I», «O», «U», «Y»)

let str = prompt("Write a string").toLowerCase()
    , arr = str.split("")
    , deleteElem = ["a", "e", "i", "o", "u", "y"];



function delEl(el, i, arr) {
    if (deleteElem.includes(el)) {
        return delete arr[i];
    }

}

function newStr(string) {
    arr.map(delEl);
    return arr.join("");
}

let result = newStr(str);

console.log(result);