import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gistsList:[]
}

export const gistsSlice = createSlice({
    name:'gists',
    initialState,
    reducers:{
        setGistList : (state,action)=>{ 
            state.gistsList = action.payload;
        }
    }
})

export const {setGistList} = gistsSlice.actions; 

export const selectGists = (state) => state.gists;

export default gistsSlice.reducer;