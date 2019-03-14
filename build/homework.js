// ***************** Этот файл можно удалить если он вам не подходит или не нужен. ***************** 
// *************************************************************************************************
// TASK 1
function fuctorial(num) {
    for (let i = num - 1; i > 0; i--) {
        num *= i;
    }
    return (num);
}
fuctorial(5);
// TASK 2
function multiply(...arg) {
    if (arg.length == 0)
        return 0;
    return arg.reduce((a, b) => a * b);
}
multiply();
// TASK 3
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString('test');
// TASK 5
// exc 1
class Car {
    constructor(_mileage, _fuel) {
        this._mileage = _mileage;
        this._fuel = _fuel;
    }
}
// exc 2
class RealCar extends Car {
    constructor(_mileage = 0, _fuel = 0) {
        super(_mileage, _fuel);
    }
    drive(distance) {
        if (distance <= 0 || typeof distance !== 'number')
            return console.log('Вы ввели недопустимые значения');
        if (this._fuel < 1)
            return console.log('Вам необходимо заправиться');
        if (this._fuel < distance * 0.1)
            return console.log('У вас недостаточно бензина на такое расстояние');
        this._mileage = distance;
        this._fuel -= distance * 0.1;
    }
    refuel(quantity) {
        if (quantity <= 0 || typeof quantity !== 'number')
            return console.log('Вы ввели недопустимые значения');
        this._fuel += quantity;
    }
    get fuel() {
        return this._fuel;
    }
    get mileage() {
        return this._mileage;
    }
}
const car = new RealCar();
