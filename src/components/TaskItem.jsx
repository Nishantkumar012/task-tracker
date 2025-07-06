import React from 'react';

function TaskItem({ task, onDelete, onToggle, onEdit }) {
  const isDone = task.completed;

  return (
    <div
      className={`flex flex-col sm:flex-row justify-between gap-4 p-4 rounded-lg border shadow-md transition 
        ${isDone ? 'bg-green-100 text-gray-600 line-through' : 'bg-white'}
      `}
    >
      <div className="flex-1">
        <h3 className="font-semibold text-lg text-gray-800">{task.title}</h3>
        {task.description && (
          <p className="text-sm text-gray-600 mt-1">{task.description}</p>
        )}
        <small className="block mt-2 text-xs text-gray-500">
          Created: {new Date(task.createdAt).toLocaleString()}
        </small>
      </div>

      <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="checkbox"
            checked={isDone}
            onChange={() => onToggle(task.id)}
            className="cursor-pointer"
          />
          <span className={isDone ? 'text-green-700' : 'text-gray-700'}>
            {isDone ? 'Completed' : 'Mark Done'}
          </span>
        </label>

        <button
          onClick={() => onEdit(task)}
          className="text-blue-600 hover:underline text-sm"
        >
          ✏️ Edit
        </button>

        <button
          onClick={() => {
            if (window.confirm('Are you sure you want to delete this task?')) {
              onDelete(task.id);
            }
          }}
          className="text-red-500 hover:underline text-sm"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
