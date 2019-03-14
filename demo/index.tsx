import React from "react";
import ReactDOM from "react-dom";
import { Device } from "../src";

class Demo extends React.Component {
    public render() {
        return (
            <div>
                <h1>Demo</h1>
                <Device />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, document.getElementById("Demo"));