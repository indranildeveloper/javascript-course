// @ProgrammingWithIndra

let color = "green";

function outer() {
  let color = "blue";
  function inner() {
    let color = "red";

    function superInner() {
      let color = "purple";
      console.log(color.toUpperCase());
    }

    superInner();
  }
  inner();
}

outer();
