let accounting = +prompt("Enter your accounting marks");
let physics = +prompt("Enter your physics marks");
let maths = +prompt("Enter your maths marks");
let statistics = +prompt("Enter your statistics marks");
let computerScience = +prompt("Enter your computer science marks");
let totalMarks = accounting + physics + maths + statistics + computerScience;
let percentage = (totalMarks/500) * 100;

let grade = (percentage <= 90 && percentage >= 70) ?  'A' 
: (percentage >= 60 && percentage <= 69) ? 'B' 
: (percentage >= 40 && percentage <= 49) ? 'C'
: (percentage >= 33 && percentage <= 39) ? 'D'
: `INVALID PERCENTAGE`;

document.write("<h1> MARKSHEET  </h1>")
document.write(` Accounting: ${accounting} <br> `)
document.write(` Physics: ${physics} <br> `)
document.write(` Maths: ${maths} <br> `)
document.write(` Statistics: ${statistics} <br> `)
document.write(` Computer: ${computerScience} <br> `)
document.write(`Total Marks: ${totalMarks} / 500  <br>`)
document.write(`Percentage: ${percentage.toFixed(2)}%  <br>`)
document.write(`Grade: ${grade}  <br>`)