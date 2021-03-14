import React, { FC } from "react";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

const Todo: FC = () => {
  return (
    <>
      <TodoHeader />
      <TodoList />
    </>
  );
};

export default Todo;
