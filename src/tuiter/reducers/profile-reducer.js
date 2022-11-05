import { createSlice } from "@reduxjs/toolkit";
import profile from "../data/profiles.json";

const profileSlice = createSlice({
 name: "profile",
 initialState: {profile},
 reducers: {
    updateProfile(state, action){
        state.profile = action.payload
    }
  }
});


export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;
