import React from "react";
import "./App.scss";

function App() {
    return (
        <div className="container">
            <div className="todoBlock">
                <div className="title">
                    <h1>할 일 목록</h1>
                </div>

                <div className="getStyle">
                    <input type="checkbox" defaultChecked={false} />
                    공부하기
                    <button className="btnStyle">x</button>
                </div>
            </div>
        </div>
    );
}

export default App;
