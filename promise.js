// function callback(){
//   console.log("done")
// }
// console.log('beforw setTimeout')
// setTimeout(callback,1000)
// console.log('after setTimeout')

//Promise
function test(resolve,reject){
  let timeOut = Math.random()*2
  console.log('set Timeout to:'+timeOut+'seconds')
  setTimeout(()=>{
    if(timeOut<1){
      console.log('call resolve()...');
      resolve('200 OK');
    }else {
      console.log('call reject()...');
      reject('timeout in ' + timeOut + ' seconds.');
    }
  },timeOut*1000)
}

// let p1 = new Promise(test)
// let p2 = p1.then((result)=>{
//   console.log('成功：'+result)
// })
// let p3 = p2.catch((error)=>{
//   console.log('失败：'+error)
// })
let p = new Promise(test).then((result)=>{
  console.log('成功：'+result)
}).catch((error)=>{
  console.log('失败：'+error)
})
//job1.then(job2).then(job3).catch(handleError)
// 并行执行的任务，Promise.all()
var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'P1');
});
var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 600, 'P2');
});
// 同时执行p1和p2，并在它们都完成后执行then:
Promise.all([p1, p2]).then(function (results) {
    console.log(results); // 获得一个Array: ['P1', 'P2']
});
