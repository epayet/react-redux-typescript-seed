/// <reference path="../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Store } from "redux";
import { Provider } from "react-redux";
import App from "./containers/App";
import configureStore from "./store/configureStore";

const store: Store<any> = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById("app")
);