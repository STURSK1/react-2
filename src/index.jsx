import React from "react";
import { ReactDOM } from "react-dom/client";
import Saba from "./aplicatioon";

class App extends React.Component{
    render() {
        return(
        <div>
            <h1>hello world</h1>
            <Saba></Saba>
        </div>
        );
    }
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>);