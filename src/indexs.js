import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
//auth
import App from "./views/Auth";
import "./views/Auth.css"

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";

ReactDOM.render(
  <ThemeContextWrapper>
    <BackgroundColorWrapper>
      <BrowserRouter>
        <App />
        {/* <Switch> */}
        {/* <Route path="/sistem-prediksi" render={(props) => <AdminLayout {...props} />} />
          <Redirect from="/" to="/sistem-prediksi/SignUp" /> */}
        {/* <Redirect from="/" to="/sistem-prediksi/dashboard" /> */}
        {/* </Switch> */}
      </BrowserRouter>
    </BackgroundColorWrapper>
  </ThemeContextWrapper>,
  document.getElementById("root")
);
