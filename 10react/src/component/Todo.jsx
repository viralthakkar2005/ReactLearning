import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../fetatures/todo/todoSlice";

export default function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center mb-5">📝 Todos</h2>

      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md border"
          >
            <span className="text-gray-800">{todo.text}</span>

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          No todos available.
        </p>
      )}
    </div>
  );
}