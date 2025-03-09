import React, { useState, useEffect } from "react";
import { getTodos, addTodo, deleteTodo } from "../api";
import "../styles/TodoList.css";


const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  const handleAddTodo = async () => {
    if (!newTodo.trim()) return;
    await addTodo(newTodo);
    setNewTodo("");
    fetchTodos();
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    fetchTodos();
  };

  return
};

export default TodoList;
