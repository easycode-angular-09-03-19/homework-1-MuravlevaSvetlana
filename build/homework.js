// ***************** Этот файл можно удалить если он вам не подходит или не нужен. ***************** 
// *************************************************************************************************
// TASK 1
function fuctorial(num) {
    for (let i = num - 1; i > 0; i--) {
        num *= i;
    }
    console.log(num);
}
fuctorial(5);
// TASK 2
function multiply(...arg) {
    let result = 1;
    if (!arguments.length) {
        result = 0;
    }
    else {
        for (let i = 0; i < arguments.length; i++) {
            result *= arguments[i];
        }
    }
    return result;
}
multiply();
// TASK 3
function reverseString(str) {
    let string = str.split('');
    string.reverse();
    let result = string.join('');
    return result;
}
reverseString('test');
