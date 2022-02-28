import { CustomerUpdateManyWithoutUsersInput } from "./CustomerUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  customers?: CustomerUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
