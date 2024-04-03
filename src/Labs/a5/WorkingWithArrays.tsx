import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
function WorkingWithArrays() {
  const API = "http://localhost:4000/a5/todos";
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
  });
  const updateTodo = async () => {
    const response = await axios.put(`${API}/${todo.id}`, todo);
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
  };
  const [todos, setTodos] = useState<any[]>([]);
  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };

  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  const removeTodo = async (todo: { id: any }) => {
    const response = await axios.get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };
  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };
  const fetchTodoById = async (id: any) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };
  const deleteTodo = async (todo: { id: any }) => {
    const response = await axios.delete(`${API}/${todo.id}`);
    setTodos(todos.filter((t) => t.id !== todo.id));
  };
  return (
    <div>
      <h3>Completed Arrays</h3>
      <a className="add-button btn btn-primary" href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <h3>Description Arrays</h3>
      <a
        className="add-button btn btn-primary"
        href={`${API}?description=true`}
      >
        Get Description Todos
      </a>
      <h3>Deleting from an Array</h3>
      <a
        className="add-button btn btn-primary"
        href={`${API}/${todo.id}/delete`}
      >
        Delete Todo with ID = {todo.id}
      </a>
      <h3>Creating new Items in an Array</h3>
      <a className="add-button btn btn-primary" href={`${API}/create`}>
        Create Todo
      </a>
      <h2>Working with Arrays</h2>
      <button className="add-button btn btn-primary" onClick={createTodo}>Create Todo</button>{" "}
      <button className="add-button btn btn-primary"onClick={updateTitle}>Update Title</button>
      <br />
      <input
        type="number"
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: parseInt(e.target.value),
          })
        }
      />{" "}
      <br />
      <input
        type="text"
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
      />{" "}
      <br />
      <textarea
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />{" "}
      <br />
      <input
        value={todo.due}
        type="date"
        onChange={(e) =>
          setTodo({
            ...todo,
            due: e.target.value,
          })
        }
      />{" "}
      <br />
      <label>
        <input
          value={todo.completed.toString()}
          type="checkbox"
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: e.target.checked,
            })
          }
        />
        Completed
      </label>{" "}
      <br />
      <button className="add-button btn btn-primary" onClick={postTodo}> Post Todo </button>
      <button className="add-button btn btn-primary" onClick={updateTitle}>Update Title</button>
      <h3>Updating an Item in an Array</h3>
      <a
        className="add-button btn btn-primary"
        href={`${API}/${todo.id}/title/${todo.title}`}
      >
        <button onClick={updateTitle}>Update Title</button>
      </a>
      <h4>Retrieving Arrays</h4>
      <a className="add-button btn btn-primary" href={API}>
        Get Todos
      </a>
      <h3>Filtering Array Items</h3>
      <a className="add-button btn btn-primary" href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <h3>Creating new Items in an Array</h3>
      <a className="add-button btn btn-primary" href={`${API}/create`}>
        Create Todo
      </a>
      <h3>Deleting from an Array</h3>
      <a
        className="add-button btn btn-primary"
        href={`${API}/${todo.id}/delete`}
      >
        Delete Todo with ID = {todo.id}
      </a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}
      />
      <a className="add-button btn btn-primary" href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <h3>Filtering Array Items</h3>
      <a className="add-button btn btn-primary" href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <h4>Create Todo</h4>
      <button onClick={updateTodo}>Update Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <button
              onClick={() => deleteTodo(todo)}
              className="btn btn-danger float-end ms-2"
            >
              Delete
            </button>
            <input checked={todo.completed} type="checkbox" readOnly />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
            <button
              className="yellow-button"
              onClick={() => fetchTodoById(todo.id)}
            >
              Edit
            </button>
            <button onClick={() => removeTodo(todo)}>Remove</button>

            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default WorkingWithArrays;
