let eventCalendar = [];

function addEvents (evenId,title,date,time,attendess){
  let newEvent = {evenId,title,date,time,attendess};
   eventCalendar.push(newEvent);
} 
addEvents(1,"meeting with x","2023-12-21","6:00pm","[alex],[mike]")
console.log(eventCalendar);
function updateEvent (evenId,updatedinfo){
  let event = eventCalendar.find(item => item.evenId === evenId);
  if(event){
    Object.assign(event,updatedinfo);
  }
}
function deleteEvent(evenId){
 let eventCalendar = eventCalendar.find(item => item.evenId === evenId);
   if(event){
    delete eventCalendar.attendess
  }
} 

updateEvent(1,{title:"meeting with y"})
console.log(eventCalendar);
deleteEvent(1)
console.log(eventCalendar);
