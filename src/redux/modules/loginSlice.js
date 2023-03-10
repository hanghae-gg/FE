import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.withCredentials = true;
const initialState = {
  userList: [
    {
      username: "",
      password: "",
    },
  ],
  isLoading: false,
  error: null,
  isLogin: false,
};
//회원가입
export const __postUser = createAsyncThunk(
  "signup",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_LIST}/users/signup`,
        payload,
        {
          withCredentials: true,
        }
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      if (400 < error.status < 500) {
        alert(error.response.data.messages);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//로그아웃 시키기
export const __logoutUser = createAsyncThunk(
  "logout",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/logout", payload, {
        withCredentials: true,
      });
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

//로그인 POST요청
export const __postLogin = createAsyncThunk(
  "login",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios
        .post(`${process.env.REACT_APP_LIST}/users/login`, payload, {
          withCredentials: true,
        })

        .then((res) => {
          const accessToken = res.headers.authorization;
          localStorage.setItem("accessToken", accessToken);
          return res;
        });

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      if (400 < error.status < 500) {
        alert(error.response.data.message);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __checkId = createAsyncThunk(
  "account/checkId",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_LIST}/users/idcheck`,
        payload,
        {
          withCredentials: true,
        }
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      if (400 < error.status < 500) {
        alert("중복된 아이디입니다.");
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const userList = createSlice({
  name: "userList",
  initialState,
  reducers: {},
  extraReducers: {
    //post
    [__postUser.pending]: (state) => {
      //보내는 도중, 진행중
      state.isLoading = true;
    },
    [__postUser.fulfilled]: (state, action) => {
      //연결후
      state.isLoading = false;

      alert("가입이 완료 되셨습니다!");
    },
    [__postUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }, //post

    [__checkId.pending]: (state) => {
      //보내는 도중, 진행중
      state.isLoading = true;
    },

    [__checkId.fulfilled]: (state, action) => {
      //연결후
      state.isLoading = false;

      alert("사용가능 아이디입니다!");
    },
    [__checkId.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }, //post

    [__postLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [__postLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLogin = true;
    },
    [__logoutUser.pending]: (state) => {
      //보내는 도중, 진행중
      state.isLoading = true;
    },
    [__logoutUser.fulfilled]: (state, action) => {
      //연결후
      state.isLoading = false;
    },
    [__logoutUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userList.reducer;
