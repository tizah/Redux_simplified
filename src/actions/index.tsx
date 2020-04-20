export function withdraw10() {
  return {
    type: "WITHDRAWAL_AMOUNT_10",
    amount: 10000
  };
}

export function withdraw5() {
  return {
    type: "WITHDRAWAL_AMOUNT_10",
    amount: 5000
  };
}

export function withdrawEverything() {
  return {
    type: "WITHDRAW_EVERYTHING",
    amount: 50000
  };
}
