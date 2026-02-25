import './App.css';
import React, { useState } from 'react';

function App() {


  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChanges = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form", form);
  }

  return (
    <>
      <div className="App">
        <h3>Form</h3>
        <form onSubmit={handleSubmit}>
          <input name="name" value={form.name} placeholder='Username' onChange={handleChanges}/>
          <input name="email" value={form.email} placeholder='Email' onChange={handleChanges}/>
          <input name="password" value={form.password} placeholder='Password' onChange={handleChanges}/>
          <button type="submit">Submit</button>

        </form>
      </div>
    </>
  )
}

export default App
