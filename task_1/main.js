// вариант 1
function Counter() {
    let n1 = prompt("Введите число, которое инициализирует счетчик");
    let n2 = prompt("Укажите шаг отсчета");
    let n3 = prompt("Укажите количество вызовов счетчика");
    let r = (n1 + n2) * n3;
    return function Result() {
        return r++;
    };
}

let count = Counter();
alert(count());

//вариант 2
//function Counter() {
//    let n1 = prompt("Введите число, которое инициализирует счетчик");
//    let n2 = prompt("Укажите шаг отсчета");
//    let n3 = prompt("Укажите количество вызовов счетчика");
//    let r;
//    return function Result() {
//        for (r = n1; r < n3; n2++) {
//            r++;
//            return r;
//        }
//    };
//}
//
//let count = Counter();
//alert(count());

