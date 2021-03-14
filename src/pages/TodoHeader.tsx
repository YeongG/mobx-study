import React, {
  ChangeEvent,
  FC,
  FormEvent,
  useCallback,
  useState,
} from "react";
import useStore from "../lib/useStore";

const TodoHeader: FC = () => {
  const { todo } = useStore();
  const [todoValue, setTodoValue] = useState<string>("");

  const inputChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  }, []);

  const submitHandler = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      todo.addTodo(todoValue);
      setTodoValue("");
      (e.target as HTMLElement).focus();
    },
    [todoValue]
  );

  return (
    <form onSubmit={submitHandler}>
      <input
        value={todoValue}
        onChange={inputChangeHandler}
        placeholder="insert todo!"
      />
      <button type="submit">add</button>
    </form>
  );
};

export default TodoHeader;
