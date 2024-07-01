import React, { useState } from 'react'

function BT3() {
  const todoList = [
    {
      name: "Quét nhà",
      isCheck: false

    },
    {
      name: "Lau nhà",
      isCheck: true
    }
  ]

  const [list, setList] = useState(todoList);
  const [value, setValue] = useState("");

  const addTask = () => {
    if (value !== "") {
      const newTask = {
        name: value,
        isCheck: false,
      }
      const newList = [...list];
      newList.push(newTask)
      setList(newList)
      setValue("");
      console.log("1")
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const deleteTask = (index) => {
    const newList = [...list];
    newList.splice(index, 1)
    setList(newList)
    console.log(newList)
  }

  const resetTask = () => {
    setList(todoList)
  }

  const handleCheck = (index) => {
    const newTask = { ...list[index], isCheck: !list[index].isCheck };
    const newList = [...list];
    newList.splice(index, 1, newTask);
    setList(newList);
  }

  const clearCompleted = () => {
    const newList = list.filter(task => !task.isCheck);
    setList(newList);
  }


  return (
    <div className="w-full h-screen bg-gray-100 pt-8">
      <div className="bg-white p-3 max-w-md mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold">ToDo App</h1>
          <div className="mt-4 flex">
            <input
              className="w-80 border-b-2 border-gray-500 text-black focus:outline-none" type="text" placeholder="Enter your task here"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={addTask}
              className="ml-2 border-2 px-7 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex">
              <span>Add</span>
            </button>
          </div>
        </div>
        <div className="mt-8">
          <ul>
            {list.map((item, index) => (
              <li className="p-2 rounded-lg" key={index}>
                <div className="flex align-middle flex-row justify-between">
                  <div className="p-2">
                    <input
                      type="checkbox"
                      className="h-6 w-6 "
                      checked={item.isCheck}
                      onChange={() => handleCheck(index)}
                    />
                  </div>
                  <div className="p-2">
                    <p className={`text-lg ${item.isCheck ? `line-through text-gray-400` : ` text-black-400`}`}>{item.name}</p>
                  </div>
                  <button
                    onClick={() => deleteTask(index)}
                    className="flex text-red-500 border-2 border-red-500 p-2 rounded-lg">
                    <span>Remove</span>
                  </button>
                </div>
                <hr className="mt-2" />
              </li>
            ))
            }
          </ul>
        </div>
        <div className="mt-8 flex justify-around">
          <button
            onClick={clearCompleted}
            className="border-2 border-red-500 p-2 text-red-500"
          >
            Clear Completed Task
          </button>
          <button
            onClick={resetTask}
            className="border-2 border-indigo-500 p-2 text-indigo-500 ml-4"
          >
            Reset Todo List
          </button>
        </div>
      </div>
    </div>
  )
}

export default BT3