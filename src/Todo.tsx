// import { TodoType } from "./types/todo";
import { VFC } from "react";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
