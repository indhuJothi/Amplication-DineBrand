import { User } from "../user/User";

export type Customer = {
  createdAt: Date;
  freedomPay?: "Yes" | "No" | null;
  id: string;
  mobile: string | null;
  password: string | null;
  updatedAt: Date;
  user?: User | null;
  username: string | null;
};
