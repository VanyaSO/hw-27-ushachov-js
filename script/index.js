'use strict'

const counter = () => {

    let number = 0;

    //Результат
    let increaseResult = {};
    let decreaseResult = {};
    let valueResult = {};

    //Роличество вызовов
    let increaseNumCall = 0;
    let decreaseNumCall = 0;
    let valueNumCall = 0;


    const increase = () => {
        number += 1;
        increaseNumCall += 1;

        increaseResult = {
            increaseNumCall
        }

        return increaseResult;
    }

    const decrease = () => {
        number -= 1;
        decreaseNumCall += 1;

        decreaseResult = {
            decreaseNumCall
        }

        return decreaseResult;
    }

    const value = () => {
        valueNumCall += 1;

        valueResult = {
            result : number,
        }
        return valueResult;
    }

    const getStatistic = () => {

        return{
            'Number of calls decrease': decreaseNumCall,
            'Number of calls increase': increaseNumCall,
            'Number of calls value': valueNumCall,
            'Calculation result': number
        }
    }

    const zeroing = () => {

        number = 0;
        increaseNumCall = 0;
        increaseResult = 0;
        decreaseNumCall = 0;
        decreaseResult = 0;
        valueNumCall = 0;
        valueResult = 0;

        return '/// Counter reset ///';
    }

    return{
        increase,
        decrease,
        value,
        getStatistic,
        zeroing
    }

}

const funcCounter = counter();

console.log(funcCounter.increase());
console.log(funcCounter.decrease());
console.log(funcCounter.decrease());
console.log(funcCounter.value());
console.log(funcCounter.getStatistic());
console.log(funcCounter.zeroing());
console.log(funcCounter.increase());
console.log(funcCounter.increase());
console.log(funcCounter.increase());
console.log(funcCounter.getStatistic());






