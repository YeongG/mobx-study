import React, { FC } from "react";
import useStore from "../lib/useStore";
import { useObserver } from "mobx-react";
import TodoItem from "./TodoItem";

const TodoList: FC = () => {
  const {
    todo: { todos },
  } = useStore();

  return useObserver(() => (
    <div>
      {todos.map((data) => (
        <TodoItem key={data.id} {...data} />
      ))}
    </div>
  ));
};

export default TodoList;
