import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/header";
import Main from "./components/main";

import "./index.css";



function Page(){
    return(
        <div className="container">
            <Header />
            <Main />
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Page />)