// ***************** Этот файл можно удалить если он вам не подходит или не нужен. ***************** 
// *************************************************************************************************

// TASK 1

function fuctorial(num: number): number {
    for (let i:number = num - 1; i > 0; i--){
        num *= i;
    }
    return(num);
}

fuctorial(5);

// TASK 2

function multiply(...arg: number[]): number {
    if (arg.length == 0) return 0;
    return arg.reduce((a, b) => a * b);
}

multiply();

// TASK 3

function reverseString(str: string): string {
    return str.split("").reverse().join("");
}

reverseString('test');

// TASK 4

interface Admin {
    name: string;
    email: string;
    password: string;
    type?: string;
}

// TASK 5

// exc 1

abstract class Car {
    constructor(protected _mileage: number, protected _fuel: number) {
    }
    public abstract drive(distance: number): void;
    public abstract refuel(quantity: number): void;
    
    public abstract get fuel(): number;
    public abstract get mileage(): number;

}

// exc 2

class RealCar extends Car {
    
    constructor(_mileage:number = 0, _fuel: number = 0) {
        super(_mileage, _fuel);
    }

    public drive(distance: number): void {
        if (distance <= 0 || typeof distance !== 'number') return console.log('Вы ввели недопустимые значения');
        if (this._fuel < 1) return console.log('Вам необходимо заправиться');
        if (this._fuel < distance * 0.1) return console.log('У вас недостаточно бензина на такое расстояние');
        this._mileage = distance;
        this._fuel -= distance * 0.1;
    }

    public refuel(quantity: number): void {
        if (quantity <= 0 || typeof quantity !== 'number') return console.log('Вы ввели недопустимые значения');
        this._fuel += quantity;
    }

    public get fuel(): number {
        return this._fuel;
    }
    
    public get mileage(): number {
        return this._mileage;
    }
}

const car: RealCar = new RealCar();


