import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {
  posts: [],
  loading: false,
  error: null,
};

// Create an async thunk for fetching data
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data; // This will be available as action.payload
  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
});

// Create the slice
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export reducer
export default postsSlice.reducer;
