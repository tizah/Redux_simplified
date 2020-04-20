export default (state, action) => {
  console.log(state.amount - action.amount);
  console.log(action);
  switch (action.type) {
    case "WITHDRAWAL_AMOUNT_10":
      return {
        ...state,
        amount: state.amount - action.amount
      };
    case "WITHDRAWAL_AMOUNT_5":
      return {
        ...state,
        amount: state.amount - action.amount
      };
    case "WITHDRAW_EVERYTHING":
      return {
        ...state,
        amount: state.amount - action.amount
      };
    default:
      return state;
  }
};
