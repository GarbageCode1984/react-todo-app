import React from "react";

function List({ todoDatas, setTodoDatas }) {
    const handleCompleChange = (id) => {
        let newTodoData = todoDatas.map((data) => {
            if (data.id === id) {
                data.completed = !data.completed;
            }
            return data;
        });
        setTodoDatas(newTodoData);
    };
    const handleClick = (id) => {
        let newTodoData = todoDatas.filter((data) => data.id !== id);
        setTodoDatas(newTodoData);
    };
    return (
        <div>
            {todoDatas.map((data) => (
                <div key={data.id}>
                    <input type="checkbox" defaultChecked={false} onChange={() => handleCompleChange(data.id)} />
                    {data.title}
                    <button onClick={() => handleClick(data.id)}>x</button>
                </div>
            ))}
        </div>
    );
}

export default List;
