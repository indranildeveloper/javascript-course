// @ProgrammingWithIndra

function rollDice() {
  const roll = Math.floor(Math.random() * 6);
  console.log(`Rolled: ${roll}`);
}

function rollDiceTenTimes() {
  for (let i = 1; i <= 10; i++) {
    rollDice();
  }
}

rollDiceTenTimes();
