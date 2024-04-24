import React, { useState } from 'react';
import './App.css';
import TaskComponent from './view/TaskComponent';
import AddTaskForm from './view/AddTaskForm';

function App() {
  const [rutaActual, setRutaActual] = useState("/");

  // Función para cambiar la ruta actual
  const cambiarRuta = (nuevaRuta) => {
    setRutaActual(nuevaRuta);
  };

  // Función para renderizar el componente correspondiente según la ruta actual
  const renderizarComponente = () => {
    switch (rutaActual) {
      case "/":
        return <TaskComponent />;
      case "/add":
        return <AddTaskForm />;
      default:
        return <div>No se encontró la página</div>;
    }
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
        {renderizarComponente()}
      </div>
    </div>
  );
}

export default App;
