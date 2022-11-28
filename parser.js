const courses = require("./courses.json");

// console.log(courses[0]['credits']);
// console.log(courses[0]['eventId']);
// console.log(courses[0]['eventIdeventName']);
// console.log(courses[0]['eventSubType']);
// console.log(courses[0]['eventSubType']);
delete courses[0].credits;
console.log(courses[0]);
