// ***************** Этот файл можно удалить если он вам не подходит или не нужен. ***************** 
// *************************************************************************************************

// TASK 1

function fuctorial(num: number): void {
    for (let i:number = num - 1; i > 0; i--){
        num *= i;
    }
    console.log(num);
}

fuctorial(5);

// TASK 2

function multiply(...arg: number[]): number {
    let result: number = 1;
    if (!arguments.length) {
        result = 0;
    } else {
        for (let i: number = 0; i < arguments.length; i++){
            result *= arguments[i];
        }
    }
    return result; 
}

multiply();

// TASK 3

function reverseString(str: string): string {
    let string: string[] = str.split('');
    string.reverse();
    let result: string = string.join('');
    return result;
}

reverseString('test');

// TASK 4

interface Admin {
    name?: string;
    email?: string;
    password?: string;
    type: string;
}

// TASK 5

// exc 1

abstract class Car {
    protected mileage: number = 0;
    protected fuel: number = 0;
    public abstract drive(km):void;
    public abstract refuel(liter):void;

}

// exc 2

class RealCar extends Car {
    
    constructor() {
        super();
    }

    public drive(km: number) {
        if (km <= 0 || typeof km !== 'number') return console.log('Вы ввели недопустимые значения');
        if (!this.fuel) return console.log('Вам необходимо заправиться');
        if (this.fuel < km * 0.1) return console.log('У вас недостаточно бензина на такое расстояние');
        this.mileage = km;
        this.fuel -= km * 0.1;        
    }

    public refuel(liter: number) {
        if (liter <= 0 || typeof liter !== 'number') return console.log('Вы ввели недопустимые значения');
        this.fuel += liter;
    }

    public get information() {
        return {
            fuel: this.fuel,
            mileage: this.mileage
        }
    }
}

const car = new RealCar();


