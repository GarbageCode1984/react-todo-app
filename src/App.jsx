import React, { useState, useCallback } from "react";
import "./App.scss";
import Form from "./components/Form";
import Lists from "./components/Lists";

const initialTodoDatas = localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : [];

const App = () => {
    const [todoDatas, setTodoDatas] = useState(initialTodoDatas);
    const [valueText, setValueText] = useState("");

    const handleSubmit = (e) => {
        if (valueText.trim() !== "") {
            e.preventDefault();
            let newTodo = {
                id: Date.now(),
                title: valueText,
                completed: false,
            };
            setTodoDatas((prev) => [...prev, newTodo]);
            localStorage.setItem("todoData", JSON.stringify([...todoDatas, newTodo]));
            setValueText("");
        } else {
            return 0;
        }
    };

    const handleClick = useCallback(
        (id) => {
            let newTodoData = todoDatas.filter((data) => data.id !== id);
            setTodoDatas(newTodoData);
            localStorage.setItem("todoData", JSON.stringify(newTodoData));
        },
        [todoDatas]
    );

    const handleRemoveClick = () => {
        setTodoDatas([]);
        localStorage.setItem("todoData", JSON.stringify([]));
    };

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
            <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
                <div className="flex justify-between mb-3">
                    <h1 className="text-sky-400 font-bold text-lg">Todo List</h1>
                    <button className="text-red-700" onClick={handleRemoveClick}>
                        Delete All
                    </button>
                </div>
                <Lists todoDatas={todoDatas} setTodoDatas={setTodoDatas} handleClick={handleClick} />
                <Form handleSubmit={handleSubmit} valueText={valueText} setValueText={setValueText} />
            </div>
        </div>
    );
};

export default App;
