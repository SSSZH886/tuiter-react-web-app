import { createSlice } from "@reduxjs/toolkit";
import profileArray from "../data/profiles.json";

const profileSlice = createSlice({
 name: "profiles",
 initialState: profileArray,
 reducers: {
    updateProfile(state, action){
        const profileName = state.findIndex((profile)=> profile.lastName === action.payload.lastName)
        state[profileName] = action.payload;
    }
  }
});


export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;
