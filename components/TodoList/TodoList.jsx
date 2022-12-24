import { useState } from 'react';
import TaskInput from '../TaskInput';
import TaskList from '../TaskList';
import DoneList from '../DoneList';

const TodoList = () => {
  const [todoData, setTodoData] = useState([]);
  const [hasDoneData, setHasDoneData] = useState([]);
  const todoEnterHandler = (value) => {
    setTodoData((prev) => [...prev, value]);
  };

  const deleteHandler = (index) => {
    const todos = [...todoData];
    todos.splice(index, 1);
    setTodoData(todos);
  };

  const hasDoneHandler = (index) => {
    const todo = todoData.splice(index, 1);
    setHasDoneData((prev) => [...prev, ...todo]);
  };

  return (
    <div>
      <TaskInput handleClick={todoEnterHandler} />
      <TaskList data={todoData} handleDelete={deleteHandler} handleCheck={hasDoneHandler} />
      {hasDoneData && <DoneList data={hasDoneData} />}
    </div>
  );
};

export default TodoList;
