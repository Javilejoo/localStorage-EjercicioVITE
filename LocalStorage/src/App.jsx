import React, { useState } from 'react';
import './App.css';
import TaskComponent from './view/TaskComponent';
import AddTaskForm from './view/AddTaskForm';

function App() {
  const [rutaActual, setRutaActual] = useState("/");
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Hacer la compra', description: 'Comprar alimentos para la semana' },
    { id: 2, title: 'Lavar el coche', description: 'Limpiar el coche por fuera y por dentro' },
  ]);

  const cambiarRuta = (nuevaRuta) => {
    setRutaActual(nuevaRuta);
  };

  const agregarTarea = (nuevaTarea) => {
    setTasks([...tasks, nuevaTarea]);
    // Cambiar la ruta a la lista de tareas después de agregar una nueva tarea
    cambiarRuta("/");
  };

  const eliminarTarea = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className='sitio-web'>
      <div className='header'>
        <nav style={{ gap: "8px", display: "flex" }}>
          <button onClick={() => cambiarRuta("/")}>Ver Tareas</button>
          <button onClick={() => cambiarRuta("/add")}>Agregar Tarea</button>
        </nav>
      </div>
      <div className='paginas'>
        {rutaActual === "/" ? (
          <TaskComponent tasks={tasks} onDeleteTask={eliminarTarea} />
        ) : (
          <AddTaskForm onAddTask={agregarTarea} />
        )}
      </div>
    </div>
  );
}

export default App;
