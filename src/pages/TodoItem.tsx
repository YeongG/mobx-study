import React, { FC, useCallback } from "react";
import useStore from "../lib/useStore";
import { TodoData } from "../stores/todo";

interface Props extends TodoData {}

const TodoItem: FC<Props> = ({ content, id }) => {
  const { todo } = useStore();

  const removeItem = useCallback(() => {
    todo.removeTodo(id);
  }, [id]);
  return (
    <div>
      <span>{content}</span>
      <button onClick={removeItem}>X</button>
    </div>
  );
};

export default TodoItem;
