import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addOrUpdateTask = (task) => {
    if (editingTask) {
      setTasks((prev) =>
        prev.map((t) => (t.id === task.id ? task : t))
      );
      setEditingTask(null);
    } else {
      setTasks((prev) => [task, ...prev]);
    }
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto p-4 mt-6 bg-white shadow-lg rounded-lg">
      <h3 className="text-2xl font-bold text-center mb-4 text-purple-600">Your Tasks</h3>

      <TaskForm
        onSubmit={addOrUpdateTask}
        editingTask={editingTask}
        cancelEdit={() => setEditingTask(null)}
      />

      <div className="flex flex-col gap-3 mt-6">
        {tasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks yet</p>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleComplete}
              onDelete={deleteTask}
              onEdit={setEditingTask}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TaskList;
