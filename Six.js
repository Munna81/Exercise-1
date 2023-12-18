let eventCalendar = [];

function addEvents (evenId,title,date,time,attendess){
  let newEvent = {evenId,title,date,time,attendess};
   eventCalendar.push(newEvent);
} 
addEvents();
function updateEvent (evenId,updatedinfo){
  let event = eventCalendar.find(item => item.evenId === evenId);
  if(event){
    Object.assign(event,updatedinfo);
  }
}
function deleteEvent(evenId){
 let eventCalendar = eventcalendar.find(item => item.evenId !== evenId);
} 
