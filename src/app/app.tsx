import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import TodoList from "components/TodoList";

const style = {
  bg: `h-screen w-screen flex justify-center items-center p-4 bg-gradient-to-r from-[#2F80ED] to-[#1C85E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between `,
  input: `border p-2 w-full text-xl`,
  button: ` border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: "text-center p-2",
};
const App = (): JSX.Element => {
  const [taskList, setTaskList] = useState([
    "Learn Firebase",
    "Learn Three.js",
  ]);

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form className={style.form}>
          <input
            className={style.input}
            type="text"
            placeholder="Add Task"
          ></input>
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {taskList.map((task, index) => (
            <TodoList key={index} task={task} />
          ))}
        </ul>
        <p className={style.count}>You have 2 todos</p>
      </div>
    </div>
  );
};

export default App;
