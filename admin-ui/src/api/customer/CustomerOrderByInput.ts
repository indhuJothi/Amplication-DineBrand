import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  createdAt?: SortOrder;
  freedomPay?: SortOrder;
  id?: SortOrder;
  mobile?: SortOrder;
  password?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  username?: SortOrder;
};
