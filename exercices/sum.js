function sum(chiffre) {
  let total = 0;
  for (let i = 1; i < chiffre; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total = total + i; //total+=i
    }
  }
  return total;
}

module.exports = { sum };
