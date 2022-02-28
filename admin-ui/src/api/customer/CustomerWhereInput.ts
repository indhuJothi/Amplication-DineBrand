import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CustomerWhereInput = {
  freedomPay?: "Yes" | "No";
  id?: StringFilter;
  mobile?: StringNullableFilter;
  password?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  username?: StringNullableFilter;
};
