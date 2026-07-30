// JavaScript Conditionals

let password = "abc def";

if (password.length >= 6) {
  if (password.indexOf(" ") !== -1) {
    console.log(
      "Password length is good, but password can not contain spaces.",
    );
  } else {
    console.log("Valid password.");
  }
} else {
  console.log("Password must be at least 6 characters.");
}
