import React from "react";
import "./App.scss";

function App() {
    const todoData = [
        {
            id: "1",
            title: "공부 하기",
            completed: true,
        },
        {
            id: "2",
            title: "청소하기",
            completed: true,
        },
    ];

    return (
        <div className="container">
            <div className="todoBlock">
                <div className="title">
                    <h1>할 일 목록</h1>
                </div>

                {todoData.map((data) => (
                    <div className="getStyle" key={data.id}>
                        <input type="checkbox" defaultChecked={false} />
                        {data.title}
                        <button className="btnStyle">x</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
