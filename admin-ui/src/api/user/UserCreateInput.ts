import { CustomerCreateNestedManyWithoutUsersInput } from "./CustomerCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  customers?: CustomerCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
