module.exports = {
  add: (...args) => {
    return args.reduce((prev, curr) => {
      return prev + curr
    })
  },
  mul: (...args) => {
    return args.reduce((prev, curr) => {
      return prev * curr
    })
  },
  cover: (a, b) => {
    return min(a,b)
  }

}
function min(a,b){
  return a+b

}

