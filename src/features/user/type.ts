export type User = {
  id: string;
  name?: string;
  email: string;
  photoURL?: string;
  isAdmin?: boolean;
};

export type UserState = {
  handling: boolean;
  authenticated: boolean;
  data?: User;
};
