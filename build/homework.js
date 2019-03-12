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
// TASK 5
// exc 1
class Car {
    constructor() {
        this._mileage = 0;
        this._fuel = 0;
    }
}
// exc 2
class RealCar extends Car {
    constructor() {
        super();
    }
    drive(km) {
        if (km <= 0 || typeof km !== 'number')
            return console.log('Вы ввели недопустимые значения');
        if (this._fuel < 1)
            return console.log('Вам необходимо заправиться');
        if (this._fuel < km * 0.1)
            return console.log('У вас недостаточно бензина на такое расстояние');
        this._mileage = km;
        this._fuel -= km * 0.1;
    }
    refuel(liter) {
        if (liter <= 0 || typeof liter !== 'number')
            return console.log('Вы ввели недопустимые значения');
        this._fuel += liter;
    }
    get information() {
        return {
            fuel: this._fuel,
            mileage: this._mileage
        };
    }
}
const car = new RealCar();
