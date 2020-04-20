import * as React from "react";
import Button from "./Button";
import { store } from "./store";

import "./styles.css";

export default function App() {
  const { imageUrl, userName, amount } = store.getState();
  return (
    <>
      <div className="App">
        <h1>Welcome to David's Bank</h1>
        <h2>Where your money is safe</h2>
      </div>
      <div className="container">
        <div className="image-container">
          <img src={imageUrl} alt="user-david" />
          <p className="name">{userName}</p>
          <div className="amount">
            {" "}
            <h1>$ {amount} </h1>
          </div>
        </div>
        <div>
          <div>
            {amount <= 0 ? (
              <div>NO CASH</div>
            ) : (
              <Button withdrawalType={["Withdraw $10000", "Withdraw $5000"]} />
            )}
          </div>
        
        </div>
      </div>
    </>
  );
}
