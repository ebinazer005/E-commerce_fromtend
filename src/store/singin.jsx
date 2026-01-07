import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "axios";


const url = "https://e-commerce-backend-5p1b.onrender.com/signin" 

const initialState={
    userdata : null,
    error  : null,
    loading : false,
    token : null,

}

export const signinUser = createAsyncThunk("suth/singin",
    async(credential,{ rejectWithValue })=>{
        try{
            const singin = await axios.post(url,credential);

            if(!singin){
                return rejectWithValue(credential)
            }

            return singin.data;
        }
        catch (error){
            return rejectWithValue(error.response?.data || "signin Failed");
        } 
    }) 

    const siginSlice = createSlice({
        name : "singin",
        initialState,
        reducers:{
            
        },
        extraReducers : (builder) => {
            builder
                .addCase(signinUser.pending,(state)=>{
                state.loading =true;
                state.error =null;
            })
            .addCase(signinUser.fulfilled,(state, action)=>{
                state.loading =false;
                state.error =null;
                state.token = action.payload.token;
                
            })
            .addCase(signinUser.rejected,(state, action)=>{
                state.loading =false;
                state.error =action.payload || "signin failed";
                
                
            });
                
        },

    });

    export default siginSlice.reducer;