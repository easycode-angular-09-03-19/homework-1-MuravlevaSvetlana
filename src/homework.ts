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


