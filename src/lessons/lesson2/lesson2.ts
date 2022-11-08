console.log("lesson 2");

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
// @ts-ignore
const sumCurry = (func) => {
  return function (a: number) {
    return function (b: number) {
      return func(a, b);
    };
  };
};

const sum = (a: number, b: number) => {
  return a + b;
};

const curriedSum = sumCurry(sum);
console.log(curriedSum(3)(6));
console.log(sumCurry(sum)(3)(6));
// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
const makeCounter = () => {
  let count = 1;
  return () => {
    return count++;
  };
};
const counter = makeCounter();
console.log(counter());
console.log(counter());
const counter2 = makeCounter();
console.log(counter2());
console.log(counter());

// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
/*const makeCounter = (startVal) => {
    let count = startVal
    const funcObj = {
        increase() {
            return count++
        },
        decrease() {
            return count--
        },
        reset() {
            return count = 0
        },
        set(desiredVal) {
            return count = desiredVal
        }
    }
    return () => {
        return funcObj
    }
}
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:

function superSum(n: number) {
    debugger
    if (n === 0) return 0;
    if (n === 1) return (num : number) => num;

    let _arguments: number[] = [];

    function helper(...args) {
        debugger
        _arguments = [..._arguments, ...args];
        if (_arguments.length >= n) {
            _arguments.length = n;
            return _arguments.reduce((acc, number) => acc + number)
        } else {
            return helper;
        }
    }

    return helper;
}

console.log(superSum(0)) //0
console.log(superSum(2)(2)(5, 9)) //10
console.log(superSum(3)(2)(5, 3)) //10
console.log(superSum(3)(2, 5, 3)) //10
console.log(superSum(3)(2, 5)(3)) //10
console.log(superSum(3)(2, 5)(3)(9)) //10
 */
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion
/*const sumTo = (num) => {
    if (num === 1) {
        return num
    } else {
        return num + sumTo(num -1 )
    }
}*/

/*
const sumTo = (num) => {
    let count = 0
    for (let i = 0; i <= num; i++) {
        count +=i
    }
    return count
}
*/

/*const sumTo = (num) => {
    return num * (num + 1) / 2
}*/
/*const factorial = (n)=> {
    if (n === 1) {
        return n
    } else {
        return n * factorial(n-1)
    }
}*/
/*const factorial = (n) => {
    let count = 1
    for (let i = 1; i <= n; i++) {
        count = count * i
    }
    return count
}*/

/*
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
*/

/*
function fib(n) {
    debugger
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        debugger
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
*/
// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {};
