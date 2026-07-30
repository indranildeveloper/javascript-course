// @ProgrammingWithIndra

let day = 6;

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Hey please select a day between 1 and 7.");
}

switch (day) {
  case 1:
  case 6:
  case 7:
    console.log("I love weekends.");
    break;
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Working hard.");
    break;
  default:
    console.log("Please select a valid date.");
}
