'use strict'

const num = 0
const max = 1000
const ini = 13

function calculateCollatzTree(n,m,i) {
  for (n = 13; n <= m; n++){
      if(n % 2 === 0 ){
         n = n / 2
         console.log('_' + n + '#_')
         return n
      } else {
         n = n * 3 + 1
         console.log('_' + n + '+_')
         return n
      }
      console.log(n)
  }
}

console.log(calculateCollatzTree(num,max,ini))

