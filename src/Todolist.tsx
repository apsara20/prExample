// src/components/TodoList.tsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../src/redux/store";
import { toggleTodo, deleteTodo, updateTodo } from "../src/redux/todoSlice";

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch<AppDispatch>();
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (id: number, text: string) => {
    setEditId(id);
    setEditText(text);
  };

  const handleUpdate = (id: number) => {
    dispatch(updateTodo({ id, text: editText }));
    setEditId(null);
    setEditText("");
  };

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          {editId === todo.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="border rounded p-1"
              />
              <button
                onClick={() => handleUpdate(todo.id)}
                className="bg-green-500 text-white px-2 rounded"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <span className={todo.completed ? "line-through text-gray-500" : ""}>{todo.text}</span>
              <button
                onClick={() => handleEdit(todo.id, todo.text)}
                className="bg-yellow-500 text-white px-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="bg-red-500 text-white px-2 rounded"
              >
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
