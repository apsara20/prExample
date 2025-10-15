import   React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../src/redux/todoSlice";
import type { AppDispatch } from "./redux/store";
import TodoList from "./Todolist";

const TodoForm:   React.FC = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
<div className="  mt-28 align-middle  grid grid-colum ">
<div className="">
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
          <input
            className="border rounded p-2 w-64"
            placeholder="Add a new task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </form>
  
</div>



<div className="flex flex-col">
<div>
<TodoList/>
</div> 
</div>
</div>      
  );
};

export default TodoForm;
