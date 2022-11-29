const courses = require("./json/courses.json");

let sql = false;
let csv = false;

let sqlOutput = "";
let csvOutput = "";
courses.forEach((course) => {
    if (course.schedules !== null) {
        let credit = course.credits;
        let code = course.eventId;
        let name = course.eventName;
        let subType = course.eventSubType;
    }

    // console.log(`credit = ${course.credits} code = ${course.eventId} name = ${course.eventName} subjectType = ${course.eventSubType} `);
});