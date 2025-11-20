import { Todo } from "../models";

const addTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = new Todo({ title, description });
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      id,
      { title, description },
      { new: true },
    );
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAllTodos = async (req, res) => {
  try {
    await Todo.deleteMany();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCompletedTodos = async (req, res) => {
  try {
    await Todo.deleteMany({ completed: true });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteIncompleteTodos = async (req, res) => {
  try {
    await Todo.deleteMany({ completed: false });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateTodoCompleted = async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    const todo = await Todo.findByIdAndUpdate(id, { completed }, { new: true });
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
