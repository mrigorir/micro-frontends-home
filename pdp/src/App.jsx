import React from "react";
import ReactDOM from "react-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import SafeComponent from '../components/SafeComponent';

import "./index.scss";

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <SafeComponent>
      <Header />
    </SafeComponent>
    <div className="my-10">
      PDP Page Content
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
