
const obj ={
    name : 'Elad',
    role : 'FullStack'
}
const swapObjectProps = (obj) => {
    const obj2={}
   for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];  
    }
    obj2[obj[key]]=key
   } 
   return obj2;
}

console.log(swapObjectProps(obj));