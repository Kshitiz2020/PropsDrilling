import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataRedux = createAsyncThunk(
  "data/getDataRedux",
  async (url) => {
    try {
      const response = await axios(`${url}/data`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: undefined,
    isLoading: false,
  },
  reducers: {
    // internal application logic goes here
  },
  extraReducers: (builder) => {
    builder.addCase(
      getDataRedux.fulfilled,
      (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      } // this is the reducer function
    );
  },
});

export default dataSlice.reducer;
