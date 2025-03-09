import axios from "axios";

const API_URL = "http://localhost:5000/api/todos"; // Adjust if needed

// Fetch all todos
export const getTodos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};

// Add a new todo
export const addTodo = async (title) => {
  try {
    const response = await axios.post(API_URL, { title });
    return response.data;
  } catch (error) {
    console.error("Error adding todo:", error);
  }
};

// Delete a todo
export const deleteTodo = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};
