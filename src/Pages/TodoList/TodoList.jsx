import { CiCirclePlus, CiSquareMinus } from "react-icons/ci";
import "./TodoList.css";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import { toast } from "react-toastify";


export const TodoList = () => {
  const [task, setTask] = useState("");
  const [todolist, setTodoList] = useState([]);
  const [edit, setEdit] = useState(false);
  // const [updatedValue, setUpdatedValue] = useState("");
  const [index, setIndex] = useState(null);

  const handleButtonClick = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      toast.error("Task is empty");
      return;
    }

    if (edit===true) {
      const updatedList = todolist.map((item, idx) => {
        if (idx === index) {
          return task;
        }
        return item;
      });

      setTodoList(updatedList);
      setEdit(false);
      setIndex(null);
    } else {
      setTodoList((prev) => [...prev, task]);
    }

    setTask("");
  };


  const handleDeleteBtn = (index) => {
    // console.log(index, "index_check");

    setTodoList(
      todolist.filter((currtodo, idx) => {
        return idx !== index;
      }),
    );
  };

  const handleEditBtn = (index, value) => {
    console.log(index);
    setEdit(true);
    setTask(value);
    setIndex(index);
  };

  // const handleUpdate = (currtask) => {
  //   console.log(currtask, "check_lates");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main-todo">
      <form onSubmit={handleSubmit}>
        <div className="todo-top">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button className="addicon-btn" onClick={handleButtonClick}>
            <CiCirclePlus />

            <span>{edit ? "Update" : "Add"}</span>
          </button>
        </div>
      </form>

      <div className="todo-panel">
        <h1>Todo List</h1>
        {
          <div className="todo-items">
            {todolist?.map((currtask, index) => {
              return (
                <div className="todolist-items" key={index}>
                  <input type="checkbox" className="checkbox" />
                  <CiSquareMinus color="#dc2626" size="35px" />

                  <span>{currtask}</span>

                  <button
                    className="todoedit-btn"
                    onClick={() => handleEditBtn(index, currtask)}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDeleteBtn(index)}
                    className="tododelete-btn"
                  >
                    <AiOutlineDelete
                      style={{ color: "#dc2626" }}
                      fontSize="20px"
                    />
                  </button>
                </div>
              );
            })}
          </div>
        }

        {/* <div className="todo-items">
            <div className="todolist-items">
              <input type="checkbox" className="checkbox" />
              <CiSquareMinus color="#dc2626" size="35px" />
              <span>Text React Ant Design Todo List</span>
              <button>
                <AiOutlineDelete style={{ color: "#dc2626" }} fontSize="20px" />
              </button>
            </div>
          </div> */}
      </div>
    </div>
  );
};
