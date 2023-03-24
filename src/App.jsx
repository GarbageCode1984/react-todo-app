import React, { useState } from "react";
import "./App.scss";
import Form from "./components/Form";
import List from "./components/List";

function App() {
    const [todoDatas, setTodoDatas] = useState([]);
    const [valueText, setValueText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let newTodo = {
            id: Date.now(),
            title: valueText,
            completed: false,
        };
        setTodoDatas((prev) => [...prev, newTodo]);
        setValueText("");
    };

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
            <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
                <div className="flex justify-between mb-3">
                    <h1>할 일 목록</h1>
                </div>
                <List todoDatas={todoDatas} setTodoDatas={setTodoDatas} />
                <Form handleSubmit={handleSubmit} valueText={valueText} setValueText={setValueText} />
            </div>
        </div>
    );
}

export default App;
