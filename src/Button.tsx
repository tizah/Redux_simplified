import React from "react";
import { store } from "./store";
import { withdraw10, withdraw5, withdrawEverything } from "./actions";

import "./styles.css";

function dispatchWithdrawal(e) {
  const type = e.target.dataset.type;
  if (type === "Withdraw $10000") {
    store.dispatch(withdraw10());
  } else {
    store.dispatch(withdraw5());
  }
}

function dispatchWithDrawAll(){
  store.dispatch(withdrawEverything());
}

const WithdrawalButton = withdrawalType => {
  return withdrawalType.map((type, i) => {
    console.log(type);
    return (
      <button
        data-type={type}
        key={`btn-${i}`}
        className="button"
        onClick={dispatchWithdrawal}
      >
        {type}
      </button>
    );
  });
};

const Button = ({ withdrawalType }) => {
  return (
    <>
      <div>{WithdrawalButton(withdrawalType)}</div>
      <div>
        <div className="giveAll" onClick={dispatchWithDrawAll}>give away all your cash to charity</div>
      </div>
    </>
  );
};

export default Button;
