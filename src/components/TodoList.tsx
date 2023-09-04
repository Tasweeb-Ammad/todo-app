import { FaRegTrashAlt } from "react-icons/fa";

interface TodoListProps {
  task: string;
}

const style = {
  li: `flex justify-between bg-slate-200 p-4 mt-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 mt-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
};

const TodoList = ({ task }: TodoListProps) => {
  return (
    <li className={style.li}>
      <div className={style.row}>
        <input type="checkbox" />
        <p className={style.text}>{task}</p>
      </div>
      <button>
        <FaRegTrashAlt />
      </button>
    </li>
  );
};

export default TodoList;
