function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`)

  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}

// printFarmInventory(7, 1112)

function zeroPad(num, label) {
  let numberString = String(num);
  while(numberString.length < 3) {
    numberString = "0" + numberString;
  }
  return `${numberString} ${label}`
}

function printFarmInventory1(cows, chickens, pigs) {
  console.log(zeroPad(cows, "Cows"));
  console.log(zeroPad(chickens, "Chickens"));
  console.log(zeroPad(pigs, "Pigs"));
}

printFarmInventory1(7,11,3)



