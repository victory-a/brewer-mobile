export interface IUser {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  username?: string;
  name?: string;
  mobile?: string;
}
