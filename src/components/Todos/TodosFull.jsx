import React, { useEffect, useState } from 'react'

const TodosFull = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
    const [input, setInput] = useState('');
  
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
  
    const addTodo = () => {
      if (input.trim()) {
        setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
        setInput('');
      }
    };
  
    const toggleTodo = (id) => {
      setTodos(todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ));
    };
  
    const deleteTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
    };
  
    return (
      <div>
        <h2>Todo App</h2>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addTodo}>Add</button>
        
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <span 
                onClick={() => toggleTodo(todo.id)}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
              >
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo.id)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default TodosFull