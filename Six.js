const myCalender = new calender();
function event (id,title,date,time,attendess){
  this.id = id;
  this.title = title;
  this.date = date;
  this.time = time;
  this.attendess = attendess;
}
this.event = [];
this.addEvent = function (event){
  this.events.push(event);
}
const event1 = new event (1,"meeting","27-11-2023","06:00","Faysal")
const event2 = new event (2,"Gossiping","27-11-2023","09:00","Sayham")
myCalender.addEvent(event1);
myCalender.addEvent(event2);
console.log(myCalender.addEvent(event));
