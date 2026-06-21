export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  company: {
    name: string;
  };
};

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

export type Comment = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};
