import React from 'react'

const Todos = () => {
    const [input, setInput] = React.useState("");
    const [keepTodos, setKeepTodos] = React.useState([]);

    const addTodo = () => {
        console.log("Todo", input);
        if(input.trim() === "") return;
        setKeepTodos([...keepTodos, input]);
        setInput("");
    }
    console.log(keepTodos);

  return (
    <div>
        <h3>Todos</h3>
        <input type="text" placeholder="Add a new todo" onChange={(e) => setInput(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
        <ul>
            {keepTodos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    </div>
  )
}

export default Todos