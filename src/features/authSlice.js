import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: false,
        userData: null
    },
    reducers: {
        login: (state, action) => {
            
        },
        logout: (state, action) => {

        }
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
