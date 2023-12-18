let myCalendar = [];

function addEvents (evenId,title,date,time,attendess){
  let newEvent = {evenId,title,date,time,attendess};
   myCalendar.push(newEvent);
} 
addEvents();
