import { User } from '../user/type';

export type Feedback = {
  id: string;
  name: string;
  email: string;
  phone: string;
  content: string;
  createdAt: string;
};

export type ManagerSate = {
  handling: boolean;
  users: CustomObject<User>;
  feedbacks: CustomObject<Feedback>;
};

export type UpdateUsersAction = {
  action: string;
  data: User;
};
