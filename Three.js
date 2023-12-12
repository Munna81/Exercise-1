let employee1 = {
    user : {
    name:"mark",
    userId:"mark002",
    email:"munna.ahmed042@gmail.com",
    address:
         {building: 'A26', street:["12 nabab street road"]},
    }
}


function getObjectValue(obj, path) {
  const properties = path.split('.');
  return properties.reduce((currentObject, property) => {
    return currentObject ? currentObject[property] : undefined;
  }, obj);
}
const streetValue = getObjectValue(employee1,"user.address.street")
console.log(streetValue);



/*


/*let employee1 = {
    user : {
    name:"mark",
    userId:"mark002",
    email:"munna.ahmed042@gmail.com",
    address:
         {building: 'A26', street:["12 nabab street road"]},
    }
}
/*
function toFindStreet() {
    return employee1.address.street

function toFindStreet(obj,path) {
for (let key in employee1) {
   if (typeof employee1[key] === "object") {
     for (let nestedKey in employee1[key]) {
       const find = employee1[key][nestedKey]
         console.log (find.split("."))
            }
   } 
 }
}
toFindStreet();*/

/*
function toFindStreet(nastedKey)  {
const split = employee1.split(".")
    let result = employee1;
    split.forEach(i => { 
        result = result [i]
    })
         return result;                
                         }
*/

/*function toGetvalue (obj,path) {
    const value = path.split(".");
    return value.reduce((currentObject,value) => {
        return currentObject != undefined ? currentObject[value]:currentObject
    }, obj)
}

const actual = toGetvalue(employee1,"employee1.address.street");
console.log(actual);*/
/*function getObjectValue(obj, path) {
  const properties = path.split('.');
  return properties.reduce((currentObject, property) => {
    return currentObject ? currentObject[property] : undefined;
  }, obj);
}
const streetValue = getObjectValue(employee1,"employee1.address.street")
console.log(streetValue);*/




