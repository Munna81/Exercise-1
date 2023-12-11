let employee1 = {
    
    name:"mark",
    userId:"mark002",
    email:"munna.ahmed042@gmail.com",
    address:
         {building: 'A26', street:["12 nabab street road"]},
    }

/*function toFindStreet() {
    return employee1.address.street
}*/
function toFindStreet(building,street) {
for (let key in employee1) {
   if (typeof employee1[key] === "object") {
     for (let nestedKey in employee1[key]) {
       if(employee1[key][nestedKey]==="builing"){
           return employee1.address.building
       } else {
          return employee1.address.street 
       }
     }
   } 
 }
}
toFindStreet();
