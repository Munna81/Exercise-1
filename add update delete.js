const inventory = [
 {
  id:001,
  name: "I phone",
  price:500,
  quantity:10,
},
{
  id:002,
  name: "galaxy",
  price:250,
  quantity:30,
},
{
  id:003,
  name: "Lumia",
  price:100,
  quantity:20,
},
]
function addProduct (id,name,quantity,price){
let newProduct = {
   id: id,
   name:name,
   quantity:quantity,
   price:price
};

inventory.push(newProduct);
};

addProduct(001,"apple",500,12);
addProduct(001,"apple",500,12);
console.log(inventory);
function toDeletedId(id) {
inventory = inventory.filter(obj => obj.id !== id);
}
console.log(inventory);
const index = inventory.findIndex(obj => {
  return obj.id === 2;
});
console.log(index); 
 if (inventory){
  inventory[index].quantity = 500;
 }
console.log(inventory);
  
let employee1 = {
    
    name:"mark",
    userId:"mark002",
    email:"munna.ahmed042@gmail.com",
    address:"12 nabab street road",
    }

function toUpdatsEmoly(updatedEmail,UpdatedAddress) {
employee1.email = updatedEmail !== undefined ? updatedEmail:employee1.email;
employee1.address = updatedAddress !== undefined ? updatedAddress:employee1.address;
}
function toUpdatsEmoly(updatedEmail,UpdatedAddress) { console.log(updatedEmail,UpdatedAddress); } toUpdatsEmoly('mrmunna@gmail.com',"8/1 gopi kisan len road");



let employee1 = {
    
    name:"mark",
    userId:"mark002",
    email:"munna.ahmed042@gmail.com",
    address:
         {street:["12 nabab street road"]},
    }
console.log(employee1.address);
console.log(employee1.address.street);




let employee1 = {
    
    name:"mark",
    userId:"mark002",
    email:"munna.ahmed042@gmail.com",
    address:"12 nabab street road",
    }

let employee2 = {
    
    name:"munna",
    userId:"munna002",
    email:"munna.ahmed@gmail.com",
    address:"8/1 gopi kisan len",
    }


const x = function toEqualOrNot(employee1,employee2){


 employee1 !== employee2 ? false:true;
 
 };
 console.log(employee1==employee2);




let student1 = {
   
   name:"munna",
   value:3.56
    
  }
const toTransform = Object.keys(student1);
console.log(toTransform);



