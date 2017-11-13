// var arr = [1, [2, [3, 4]]];
// var test = [1, 2, 3]
// const flatten = (arr) => {
//   let res = []
//   for (let i = 0, len = arr.length; i < len; i++) {
//     if (Array.isArray(arr[i])) {
//       res = res.concat(flatten(arr[i]))
//     } else {
//       res.push(arr[i])
//     }
//   }
//   return res
// }

// const flatten = (arr) => {
//   return arr.reduce((p, n) => {
//     return p.concat(Array.isArray(n)?flatten(n):n)
//   },'')
// }

// const flatten = (arr) => {
//   while (arr.some(item => Array.isArray(item))) {
//      arr=[].concat(...arr)
//   }
//   return arr
// }

// console.log(flatten(arr))

// let jsonData = {
//   id: 42,
//   status: "OK",
//   data: [867, 5309]
// };

// let{data:num}=jsonData

// console.log(num);

// const fn = async() => {

//   await sleep().then(()=>{
//     console.log(val)
//   })
// }

// const sleep = () => {
// return new Promise((res,rej)=>{

// })
// }
// fn()

// const sleep = async() => {
//   await setTimeout(function () {
//     console.log('hello world111111')
//   }, 1000);
//   await setTimeout(function () {
//     console.log('hello world222222')
//   }, 2000);
//   return new Promise((res, rej) => {
//     rej('i am jehol+err')
//   })
// }

// sleep().then((v) => {
//   console.log('start')
//   console.log(v)
// }).finally(console.log('i am finish'))

// setTimeout(function () {
//   console.log(a);
// }, 0);

// var a = 10;

// console.log(b);
// console.log(fn);

// var b = 20;

// function fn() {
//   setTimeout(function () {
//     console.log('setTImeout 10ms.');
//   }, 10);
// }

// fn.toString = function () {
//   return 30;
// }

// console.log(fn);

// setTimeout(function () {
//   console.log('setTimeout 20ms.');
// }, 20);

// fn();

//this 各种练习

// var name = "window";
// var obj = {
//   name: "kxy",
//   sayName: function () {
//     console.log(this.name);
//   }
// };
// console.log(obj.sayName())

// var name = "window";

// function sayName() {
//   console.log(this.name);
// }
// sayName();

// var person = {
//   name: 'jehol',

// }
// var sayName = function () {
//   return this.name
// }


// console.log(sayName.call(person))

// var name = "window";

// function showName() {
//   console.log(this.name);
// }
// var person1 = {
//   name: "kxy",
//   sayName: showName
// }
// var person2 = {
//   name: "Jake",
//   sayName: function () {
//     var fun = person1.sayName;
//     fun();
//   }
// }
// person1.sayName();
// person2.sayName();

// promise 各种练习

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success')
//   }, 1000)
// })
// const promise2 = promise1.then(() => {
//   throw new Error('error!!!')
// })

// console.log('promise1', promise1)
// console.log('promise2', promise2)

// setTimeout(() => {
//   console.log('promise1', promise1)
//   console.log('promise2', promise2)
// }, 2000)

// const promise = new Promise((resolve, reject) => {
//   resolve('success1')
//   reject('error')
//   resolve('success2')
// })

// promise
//   .then((res) => {
//     console.log('then: ', res)
//   })
//   .catch((err) => {
//     console.log('catch: ', err)
//   })


//链式调用

// Promise.resolve(1)
//   .then((res) => {
//     console.log(res+"first")
//     return 'jehol   '
//   })
//   .catch((err) => {
//     return 3
//   })
//   .then((res) => {
//     console.log(res+'second')
//   })

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('once')
//     resolve('success')

//   }, 1000)
// })

// const start = Date.now()
// promise.then((res) => {
//   console.log(res, Date.now() - start)
// })
// promise.then((res) => {
//   console.log(res, Date.now() - start)
// })

// const promise = Promise.resolve()
//   .then(() => {
//     return promise
//   })
// promise.catch(console.error)


// Promise.resolve(1)
//   .then(2)
//   .then(Promise.resolve(3))
//   .then(console.log)

// Promise.resolve()
//   .then(function success(res) {
//     throw new Error('error')
//   }, function fail1(e) {
//     console.error('fail1: ', e)
//   })
//   .catch(function fail2(e) {
//     console.error('fail2: ', e)
//   })

// setImmediate(() => {
//   console.log('setImmediate')
// })
// process.nextTick(() => {
//   console.log('nextTick')
// })
// setTimeout(() => {
//   console.log('settimeout')
// })
// Promise.resolve()
//   .then(() => {
//     console.log('then')
//   })

// console.log('end')

// setTimeout(function () {
//   console.log(4)
// }, 0);
// new Promise(function (resolve) {
//   console.log(1)
//   for (var i = 0; i < 10000; i++) {
//     i == 9999 && resolve()
//   }
//   console.log(2)
// }).then(function () {
//   console.log(5)
// });
// console.log(3);

// setTimeout(function () {
//   console.log(1)
// }, 0);
// new Promise(function (resolve) {
//   console.log(2)
//   for (var i = 100000; i > 0; i--) {
//     i == 1 && resolve()
//   }
//   console.log(3)
// }).then(function () {
//   console.log(4)
// });
// console.log(5);

const url =require('url')
const querystring = require('querystring');

var res = querystring.stringify(
  {
    name:'jehol',
    like:['css','js','html'],
  }
)
// console.log(res)
var parse = querystring.parse('name=jehol,like=css,like=js,like=html')


