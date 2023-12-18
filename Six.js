function Event (id,title,date,time,attendess){
  this.id = id;
  this.title = title;
  this.date = date;
  this.time = time;
  this.attendess = attendess;
}
function Calendar ()  {
this.events = [];
this.addEvent = function (event){
  this.events.push(event);
}
  this.getEventsOnDate = function (date) {
    const eventsOnDate = this.events.filter(event => event.date === date);
    return eventsOnDate;
  };
}

const myCalendar = new Calendar();
const event1 = new Event("work01","meeting","2023-11-27","06:00","Faysal")
const event2 = new Event("work02","Gossiping","2023-11-27","09:00","Sayham")
myCalendar.addEvent(event1);
myCalendar.addEvent(event2);
const eventsOnDate = myCalendar.getEventsOnDate("2023-11-27");
console.log(eventsOnDate);
function remove () {
  this.events.remove(event)
}
remove()
