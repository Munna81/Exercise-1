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
function toUpdatsEmoly(updatedEmail,UpdatedAddress) { console.log(updatedEmail,UpdatedAddress); } toUpdatsEmoly("mrmunna@gmail.com","8/1 gopi kisan len road");


function toUpdate() =>{
    if(updatedEmail){
        employee1.email=updatedEmail
    }
    if(updatedAddress){
        employee1.address=updatedAddress
    }
}


toUpdate({email:"mrmunna196@gmail.com",address:"8/1 goppi kisan len road"})
