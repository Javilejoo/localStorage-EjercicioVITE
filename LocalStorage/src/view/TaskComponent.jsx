import React from 'react';
import TaskList from '../components/TaskList';

const TaskComponent = ({ tasks, onDeleteTask }) => {
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskList tasks={tasks} onDeleteTask={onDeleteTask} />
    </div>
  );
};

export default TaskComponent;

