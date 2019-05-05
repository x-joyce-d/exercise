function unique(arr){ //去重
  let result = arr.filter((item,index,array)=>{ //元素的值，索引，被遍历的数组本身
    return array.indexOf(item)===index; //首个被找到的元素在数组中的位置
  })
  return result
}
 let testArr = [1,3,4,2,2,1,6,7,5,3]
 console.log(unique(testArr))
 //扁平化数组
 function flatten(arr){ //reduce
   return arr.reduce((result,item)=>{
     return result.concat(Array.isArray(item) ? flatten(item) :item); //若值为数组则递归遍历，否则concat
   },[])
 }

function flatten2(arr){ //转为字符串后再拼接‘toString’,'join'
  return arr.toString().split(',').map(item=>{
    return Number(item);  //[ 1, 2, 3, 3, 4, 4, 5, 6, 7, 0, 8, 9 ]
  })
  // return arr.join(',').split(',').map(item=>{
  //   return parseInt(item);  //[ 1, 2, 3, 3, 4, 4, 5, 6, 7, NaN, 8, 9 ]
  // })
}
function flatten3(arr){
  let result = []
  arr.map(item=>{
    if(Array.isArray(item)){
      result = result.concat(flatten3(item))
    } else {
      result.push(item)
    }
  })
  return result;
}
let overArr = [1,2,3,[3,4],[4,5,6,[7,,8,9]]];
[].concat(...overArr) //扩展运算符
console.log(flatten(overArr));
console.log(flatten2(overArr));
console.log(flatten3(overArr));

//柯里化=>逐步传参，逐步求解的过程
// function disassemble(){
//
// }
