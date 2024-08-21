import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { notification } from "../../ultil/helper";

export const login = createAsyncThunk("login", async (inforLogin) => {
  const res = await axios.get("http://localhost:3001/userList");
  return {
    users: res.data,
    inforLogin: inforLogin,
  };
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    isError: false,
    userList: [],
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;

      let user = action.payload.users.find(
        (user) =>
          user.email === action.payload.inforLogin.email &&
          user.password === action.payload.inforLogin.password
      );

      if (!user) {
        notification("Tài khoản hoặc mật khẩu không đúng", "error");
      } else {
        notification("Đăng nhập thành công");
      }

      console.log("action", action.payload);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default userSlice.reducer;
