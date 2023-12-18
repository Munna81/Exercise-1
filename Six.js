let eventCalendar = [];

function addEvents (evenId,title,date,time,attendess){
  let newEvent = {evenId,title,date,time,attendess};
   eventCalendar.push(newEvent);
} 
addEvents();
function updateEvent (evenId,updatedinfo){
  let event = eventCalendar.filter(item => item.evenId === evenId);
  if(event){
    Object.assign(event,updatedinfo);
  }
}
function deleteEvent(evenId){
 let reupdatedEvent = eventcalendar.filter(item => item.evenId !== evenId);
} 
