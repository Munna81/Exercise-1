const data = {'faysal ahmed': 'A', 'Munna Dhali': 'A+'}

   function toFind(name,grade){
    return  object.keys(data).map(([name,grade]) =>                                  
       ({ name, grade }))
   }     
toFind(data);

  /*function toFind (nastedKey){
     const value = nastedKey.split(".");
     let result = student1;
     value.forEach(i =>{
        return result = result[i];
     })
     return result;
  }*/



