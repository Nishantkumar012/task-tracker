import React, { useState, useEffect } from 'react';

function TaskForm({ onSubmit, editingTask, cancelEdit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert('Title is required');
      return;
    }

    const task = {
      id: editingTask ? editingTask.id : Date.now(),
      title: title.trim(),
      description: description.trim(),
      completed: editingTask ? editingTask.completed : false,
      createdAt: editingTask ? editingTask.createdAt : new Date().toISOString(),
    };

    onSubmit(task);
    setTitle('');
    setDescription('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-purple-50 p-4 rounded-xl shadow"
    >
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
      />

      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-purple-300"
      />

      <div className="flex gap-2 justify-end">
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
        >
          {editingTask ? 'Update Task' : 'Add Task'}
        </button>

        {editingTask && (
          <button
            type="button"
            onClick={cancelEdit}
            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded transition"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default TaskForm;
