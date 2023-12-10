let employee1 = {
    
    name:"mark",
    userId:"mark002",
    email:"munna.ahmed042@gmail.com",
    address:
         {street:["12 nabab street road"]},
    }

function toFindStreet() {
    return employee1.address.street
}
toFindStreet();
