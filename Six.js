let eventCalendar = [];

function addEvents (evenId,title,date,time,attendess){
  let newEvent = {evenId,title,date,time,attendess};
   eventCalendar.push(newEvent);
} 
addEvents();
