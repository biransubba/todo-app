import { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const handleAdd = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const handleDelete = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="app-container">
      <div className="todo-card">
        <h1 className="title">📝 My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleAdd}>Add</button>
        </div>

        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <span>{task}</span>
              <button onClick={() => handleDelete(index)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
