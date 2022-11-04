import { createSlice } from "@reduxjs/toolkit";
import posts from '../data/tuits.json';

const postsSlice = createSlice({
 name: 'posts',
 initialState: posts
});

export default postsSlice.reducer;