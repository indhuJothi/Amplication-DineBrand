import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerCreateInput = {
  freedomPay?: "Yes" | "No" | null;
  mobile?: string | null;
  password?: string | null;
  user?: UserWhereUniqueInput | null;
  username?: string | null;
};
