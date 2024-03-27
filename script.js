const firstName = "Jane";
const Job = "software developer";
const birthYear = 1989;
const year = 2024;
let workStart = 2006;
const Jane =
  "I'm " + firstName + " a " + Job + " with  " + (workStart - year) + "!";
console.log(Jane);
const janeNew = ` I'm ${firstName} a ${Job} who has worked for ${
  year - workStart
} 
year`;
console.log(janeNew);
console.log(`Am Jane can I meet you?`);

// how to write string with multiple lines
console.log(`Am a softtware \n\ 
Engineer \n\ 
Front-end to be precise`);
// the \n\ is used to break into the new line
// or it can
console.log(`Programming 
demands constant 
practice`);
