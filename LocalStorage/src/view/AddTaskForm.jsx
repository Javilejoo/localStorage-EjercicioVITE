import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      description: description,
    };
    onAddTask(newTask);
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h1>Agregar Tarea</h1>
      <form onSubmit={handleSubmit} style={{ display: "inline-flex", flexDirection: "column" }}>
        <input
          type="text"
          placeholder="Título de la tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Descripción de la tarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Agregar Tarea</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
