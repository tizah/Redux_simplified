import { createStore } from "redux";
import reducer from "../reducers";

const initialState = {
  imageUrl: "https://homepages.cae.wisc.edu/~ece533/images/watch.png",
  userName: "David Zagi",
  amount: 50000
};
export const store = createStore(reducer, initialState);
