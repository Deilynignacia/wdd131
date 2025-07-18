const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// for Loop
    for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    }

// while Loop
    let i = 0;
    while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
    }

// fearEach Loop
    studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
    });

// for...in Loop
    for (let i in studentReport) {
        if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
        }
    }
