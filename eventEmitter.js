let events = require('events')
const event = new events.EventEmitter();
//1.
// event.on('event',()=>{ //绑定事件
//   console.log("event事件触发")
// })
// setTimeout(()=>{
//   event.emit('event') //触发事件
// },1000)


//2.每个事件支持多个事件监听器，事件触发时，监听器依次被调用，参数作为回调参数传递
event.on('event',(a,b)=>{
  console.log('listener1',a,b)
})
event.on('event',(a,b)=>{
  console.log('listener2',a,b)
})
event.addListener('event',()=>{
  console.log('监听')
})
event.emit('event',1,2)
console.log(event.listenerCount('event'))
