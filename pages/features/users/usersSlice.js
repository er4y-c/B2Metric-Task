import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {id: 1,
    name: "Eray Aynacı",
    username: "Er4y",
    email: "erayaynaci1@gmail.com",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "5348508854",
    website: "hildegard.org",
    company: {
      name: "B2Metric",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }},
  ]
export const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
      updateUserList(state,action) {
        for(let i=0; i<action.payload.length;i++)
          state.push(action.payload[i]);
      }
    }
})

export const {updateUserList} = usersSlice.actions;
export default usersSlice.reducer;