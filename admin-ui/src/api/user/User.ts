import { Customer } from "../customer/Customer";

export type User = {
  createdAt: Date;
  customers?: Array<Customer>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
