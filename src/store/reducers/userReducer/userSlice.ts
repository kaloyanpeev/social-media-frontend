import { createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "../../../types";

const initialState: UserInterface = {
  name: "kaloyan",
  email:"kaloyan@email.com"
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
