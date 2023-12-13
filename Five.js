const student1 = {'faysal ahmed': 'A', 'Munna Dhali': 'A+'}


  function toFind (nastedKey){
     const value = nastedKey.split(".");
     let result = student1;
     value.forEach(i =>{
        return result = result[i];
     })
     return result;
  }



