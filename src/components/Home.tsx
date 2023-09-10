import { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";

import TodoList from "components/TodoList";
import { db } from "../config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const style = {
  bg: `h-screen w-screen flex justify-center items-center p-4 bg-gradient-to-r from-[#2F80ED] to-[#1C85E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between `,
  input: `border p-2 w-full text-xl`,
  button: ` border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: "text-center p-2",
  li: `flex justify-between bg-slate-200 p-4 mt-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 mt-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
};
const Home = () => {
  const todosCollectionRef = collection(db, "todos");

  const [taskList, setTaskList] = useState<
    { id: string; title: string; isCompleted: boolean }[]
  >([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      const data = await getDocs(todosCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        isCompleted: doc.data().isCompleted,
      }));
      setTaskList(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddTask = async (event: { preventDefault: () => void }) => {
    event?.preventDefault();
    if (newTaskTitle === "") {
      alert("Please enter a valid task title");
      return;
    }
    try {
      await addDoc(todosCollectionRef, {
        title: newTaskTitle,
        isCompleted: false,
      });
      setNewTaskTitle("");
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    const taskDoc = doc(db, "todos", taskId);
    await deleteDoc(taskDoc);
    getTodos();
  };

  const toggleTaskCompletion = async (task: {
    id: string;
    title: string;
    isCompleted: boolean;
  }) => {
    await updateDoc(doc(db, "todos", task.id), {
      isCompleted: !task.isCompleted,
    });
    getTodos();
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form className={style.form} onSubmit={handleAddTask}>
          <input
            className={style.input}
            type="text"
            placeholder="Add Task"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          ></input>
          <button className={style.button} type="submit">
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {taskList.map((task, index) => (
            <div key={index}>
              <li className={task.isCompleted ? style.liComplete : style.li}>
                <div className={style.row}>
                  <input
                    type="checkbox"
                    checked={task.isCompleted ? true : false}
                    onChange={() => toggleTaskCompletion(task)}
                  />
                  <p
                    className={
                      task.isCompleted ? style.textComplete : style.text
                    }
                  >
                    {task.title}
                  </p>
                </div>
                <button onClick={() => handleDeleteTask(task.id)}>
                  <FaRegTrashAlt />
                </button>
              </li>
            </div>
          ))}
        </ul>
        {taskList.length > 0 && (
          <p className={style.count}>{`You have ${taskList.length} todos`}</p>
        )}
      </div>
    </div>
  );
};

export default Home;
