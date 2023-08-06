import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
name: "auth",
initialState: {
    userId: null,
    login: null ,
    email: null,
    password: null
},
reducers: {

}
})
export default authSlice.reducer;