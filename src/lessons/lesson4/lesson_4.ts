console.log("lesson 4");

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

const p = new Promise(() => {
  console.log("Promise is created");
});
console.log("Task1 :", p);
// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

const p2 = Promise.resolve("Promise Data");
p2.then((data) => console.log("Task 2 Promise Result:", data));

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
Promise.reject("Promise Error").catch((err) =>
  console.log("Task 3 Promise error:", err)
);
// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
new Promise((res) => {
  setTimeout(() => {
    res("Promise Data");
  }, 3000);
}).then((data) => console.log("Task 4 Promise return Data:", data));
// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

export type handlePromiseType = {
  promise: any;
  resolve: any;
  reject: any;
  onsuccess: (someData: string) => string;
  onError: (someError: string) => string;
};

export const handlePromise = {
  promise: null,
  resolve: null,
  reject: null,
  onsuccess: (someData: string) => {
    console.log(`Promise is resolved with data: ${someData}`);
  },
  onError: (someError: string) => {
    console.log(`Promise is rejected with error: ${someError}`);
  },
};

export const createPromiseInit = (/*handlePromise: handlePromiseType*/) => {
  // @ts-ignore
  handlePromise.promise = new Promise((resolve, reject) => {
    // @ts-ignore
    handlePromise.resolve = resolve;
    // @ts-ignore
    handlePromise.reject = reject;
    console.log("Task 5 handlePromise check :", handlePromise);
  });
};

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("My name is ");
  }, 1000);
})
  .then((data) => {
    return onSuccess(data);
  })
  .then((finalData) => {
    print(finalData);
  });

const onSuccess = (someParam: any) => {
  return someParam + "Michael";
};

const print = (myParam: any) => {
  console.log("Task 6 My Param log: ", myParam);
};
// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}
const nameProm = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ name: "Anna" });
  }, 2000);
});
const ageProm = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ age: "16" });
  }, 3000);
});
const cityProm = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ city: "Kiev" });
  }, 4000);
});
Promise.all([nameProm, ageProm, cityProm]).then((result) => {
  console.log("Task 7 Promise all data: ", result);
});

// just a plug
export default () => {};

/*const fetchDataWithPromise = (url: string) => {
  return new Promise((resolve, reject) => {
    if (!url) {
      reject("Url is not defined");
    } else {
      resolve("some Data");
    }
  });
};*/
