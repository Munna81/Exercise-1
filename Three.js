let employee1 = {
    
    name:"mark",
    userId:"mark002",
    email:"munna.ahmed042@gmail.com",
    address:
         {building: 'A26', street:["12 nabab street road"]},
    }

/*
function toFindStreet() {
    return employee1.address.street
}*/
function toFindStreet(obj,path) {
for (let key in employee1) {
   if (typeof employee1[key] === "object") {
     for (let nestedKey in employee1[key]) {
       console.log(employee1[key][nestedKey])
            }
   } 
 }
}
toFindStreet();
