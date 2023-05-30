import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  id: "",
  name: "",
};
export const congigSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    createConfig: (state, action) => {
      return action.payload},
    updateConfig:(state,action)=>{
      const res={...state,...action.payload};
      return res
    },
    resetConfig:()=>{
      return initialState;
    }
  },
});
export const {createConfig,updateConfig,resetConfig} = congigSlice.actions;
export default congigSlice.reducer;
