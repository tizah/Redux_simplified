import * as React from "react";
import { render } from "react-dom";
import {store} from './store';

import App from "./App";

const newrender = () => render(<App />, document.getElementById("root"));

newrender();
store.subscribe(newrender);