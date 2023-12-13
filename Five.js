const data = {'faysal ahmed': 'A', 'Munna Dhali': 'A+'};

   function toTransform (data) {
      const result = Object.entries(data)
      return result.map(([key,value]) => {
         return {[key]: value };
      });
      return result;
   }
toTransform(data);

  /*function toFind (nastedKey){
     const value = nastedKey.split(".");
     let result = student1;
     value.forEach(i =>{
        return result = result[i];
     })
     return result;
  }*/



