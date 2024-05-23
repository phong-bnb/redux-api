// breedsSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface BreedsState {
  breeds: string[];
  loading: boolean;
  error: string | null;
}

const initialState: BreedsState = {
  breeds: [],
  loading: false,
  error: null,
};

export const fetchBreeds = createAsyncThunk("breeds/fetchBreeds", async () => {
    const response = await axios.get("https://dogapi.dog/api/v2/breeds");
    
      
  return response.data.data as string[];
});

const breedsSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBreeds.pending, (state) => {
        state.loading = true;
          state.error = null;
          
      })
      .addCase(fetchBreeds.fulfilled, (state, action) => {
        state.loading = false;
          state.breeds = action.payload;
          console.log(action.payload + 'sdsdsd')
      })
      .addCase(fetchBreeds.rejected, (state, action) => {
        state.loading = false;
        state.error =  action.error.message || "Lỗi fetch rồi";
      });
  },
});

export default breedsSlice.reducer;
