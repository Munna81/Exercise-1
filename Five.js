let student1 = {
   user: {
   name:"munna",
   value:3.56
   },
   
   user2:{
   name:"kawser",
   value:5,
      },
  }
  function toFind (obj,path){
   const value = path.split(".");
   return value.reduce((currentObject,value) =>{
      return currentObject ? currentObject[value] : undefined;
   },obj)
}

const Number = toFind(student1,"user2")
console.log(Number);





/*let student1 = {
   user: {
   name:"munna",
   value:3.56
   },
   
   user2:{
   name:"kawser",
   value:5,
      },
  }
  function toFind (obj,path){
   const value = path.split(".");
   return value.reduce((currentObject,value) =>{
      return currentObject ? currentObject[value] : undefined;
   },obj)
}

const Number = toFind(student1,"user.value")
console.log(Number);

*/
