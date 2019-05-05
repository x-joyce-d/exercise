//深拷贝的3中方式
function deepClone(obj){ //1.JSON方法实现
  let tmp = JSON.stringify(obj);
  let tmp2 = JSON.parse(tmp);
  return tmp2
}
let obj = {
  dtt: {
    age:11,
    sex:'woman'
  },
  lff: {
    age:10,
    sex:'woman'
  }
}
let result = deepClone(obj)
console.log(result);

//2.
function deepClone2(obj){ //2.for...in实现拷贝
  let result = typeof obj.splice === "function" ? [] : {};
  if(obj && typeof obj ==='object'){
    for(let key in obj){
      if(obj[key] && typeof obj[key] ==='object'){
        result[key] = deepClone2(obj[key]) //如果对象的属性值为object时，递归调用，即把某个值对象复制一份到新对象的对应值中
      } else{
        result[key] = obj [key] //如果对象的属性值不为object时，直接复制参数对象的每一个键值到新对象对应的键值对中
      }
    }
    return result
  }
  return obj
}
let arr = ['a','fd','zx','xzx','mm'];
let arrClone = deepClone2(arr);
console.log(arrClone,"111",typeof arrClone[1]);
let testObj = {
  dtt: {
    school:'xxx',
    age:12,
    weight:'90'
  },
  cat:'hello kitty',
  dog:'小黄',
  mouse:'mikey',
}
let objClone = deepClone2(testObj);
objClone.dtt.age = 15
console.log(objClone);

//3.
function deepClone3(obj) { //3.使用Array.prototype.forEach进行拷贝
  let copy = Object.create(Object.getPrototypeOf(obj)) //创建一个新对象，返回指定对象的原型
  let propNames = Object.getOwnPropertyNames(obj) //返回指定对象自身属性的属性名组成的数组
  propNames.forEach(items=>{
    let item = Object.getOwnPropertyDescriptor(obj,items) //返回自有属性对应的属性描述符
    Object.defineProperty(copy,items,item) //在该对象上定义一个新属性或修改现有属性，并返回该对象
  })
  return copy
}
let  clonedObj = {
  dtt: {
    school:'xxx',
    age:80,
    weight:'150'
  },
  cat:'cai gen hua',
  dog:'su da qiang',
  mouse:'mickey',
}
let copyResult = deepClone3(clonedObj)
console.log(copyResult)

//浅拷贝
let target = []
let testArr = ["12","13","11","45","11"]
Object.assign(target,testArr)
console.log(target)
testArr.push("7878","9898")
console.log("前"+target+"后"+testArr)
