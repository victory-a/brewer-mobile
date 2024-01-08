interface IUser {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  username?: string;
  name?: string;
  mobile?: string;
}

type IUpdateUser = Pick<IUser, 'username' | 'name' | 'mobile'>;

export type { IUser, IUpdateUser };
