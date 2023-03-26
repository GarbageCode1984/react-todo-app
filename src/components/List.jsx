import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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

    const handleEnd = (result) => {
        console.log(result);

        if (!result.destination) return;

        const newTodoDatas = [...todoDatas];
        const [reorderedItem] = newTodoDatas.splice(result.source.index, 1);
        newTodoDatas.splice(result.destination.index, 0, reorderedItem);

        setTodoDatas(newTodoDatas);
    };

    return (
        <div>
            <DragDropContext onDragEnd={handleEnd}>
                <Droppable droppableId="todo">
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {todoDatas.map((data, index) => (
                                <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            key={data.id}
                                            {...provided.draggableProps}
                                            ref={provided.innerRef}
                                            {...provided.dragHandleProps}
                                            className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} 
                                            flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
                                        >
                                            <div className="items-center">
                                                <input
                                                    type="checkbox"
                                                    defaultChecked={false}
                                                    onChange={() => handleCompleChange(data.id)}
                                                />
                                            </div>
                                            <span className={data.completed ? "line-through" : undefined}>
                                                {data.title}
                                            </span>
                                            <div className="items-center">
                                                <button
                                                    className="px-4 py-2 float-right"
                                                    onClick={() => handleClick(data.id)}
                                                >
                                                    x
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}

export default List;
