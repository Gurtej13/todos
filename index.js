const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data with "priority" field
let todos = [
  { id: 1, task: "Learn Node.js", completed: false, priority: "high" },
  { id: 2, task: "Build a REST API", completed: false, priority: "medium" }
];

// GET /todos - Retrieve all to-do items or filter by completed status
app.get('/todos', (req, res) => {
  const { completed } = req.query;
  if (completed !== undefined) {
    const filteredTodos = todos.filter(todo => todo.completed === (completed === "true"));
    return res.json(filteredTodos);
  }
  res.json(todos);
});

// POST /todos - Add a new to-do item with priority
app.post('/todos', (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
    completed: false,
    priority: req.body.priority || "low" // Default to "low" if not provided
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// PUT /todos/:id - Update an existing to-do item
app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);
  if (!todo) {
    return res.status(404).send("To-Do item not found");
  }
  todo.task = req.body.task || todo.task;
  todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
  todo.priority = req.body.priority || todo.priority;
  res.json(todo);
});

// PUT /todos/complete-all - Mark all to-do items as completed
app.put('/todos/complete-all', (req, res) => {
  todos = todos.map(todo => ({ ...todo, completed: true }));
  res.json({ message: "All to-do items marked as completed", todos });
});

// DELETE /todos/:id - Delete a to-do item
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) {
    return res.status(404).send("To-Do item not found");
  }
  todos.splice(index, 1);
  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
