import React, { useState } from "react";
import "./App.scss";

function App() {
    const [todoDatas, setTodoDatas] = useState([
        {
            id: "1",
            title: "공부하기",
            completed: true,
        },
        {
            id: "2",
            title: "청소하기",
            completed: true,
        },
    ]);
    const [valueText, setValueText] = useState("");

    const handleClick = (id) => {
        let newTodoData = todoDatas.filter((data) => data.id !== id);
        setTodoDatas(newTodoData);
    };

    const handleChange = (e) => {
        setValueText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newTodo = {
            id: Date.now(),
            title: valueText,
            completed: false,
        };
        setTodoDatas([...todoDatas, newTodo]);
    };

    return (
        <div className="container">
            <div className="todoBlock">
                <div className="title">
                    <h1>할 일 목록</h1>
                </div>

                {todoDatas.map((data) => (
                    <div className="getStyle" key={data.id}>
                        <input type="checkbox" defaultChecked={false} />
                        {data.title}
                        <button className="btnStyle" onClick={() => handleClick(data.id)}>
                            x
                        </button>
                    </div>
                ))}

                <form style={{ display: "flex" }} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="value"
                        style={{ flex: "10", padding: "5px" }}
                        placeholder="해야 할 일을 입력해주세요"
                        value={valueText}
                        onChange={handleChange}
                    />
                    <input type="submit" value="입력" className="btn" style={{ flex: "1" }} />
                </form>
            </div>
        </div>
    );
}

export default App;
