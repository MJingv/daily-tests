var arr = [1, [2, [3, 4]]];
var test = [1, 2, 3]
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

const sleep = (time) => {
  return new Promise((res) => {
    setTimeout(res, time)
  }, (err) => {
    console.log(err)
  })
}

const fn = async(val,ms) => {
  console.log('start')
  await sleep(ms)
  console.log(val)

}

fn('hello world',1000)
