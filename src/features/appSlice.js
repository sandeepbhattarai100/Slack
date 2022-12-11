import { createSlice} from '@reduxjs/toolkit'

const appSlice = createSlice({
  name: 'app',
  initialState: {
    roomId:null,
  },
  reducers: {
    enterRoom: (state,action )=> {

      state.roomId = action.payload.roomId;
    },
   
  }
})

export const { enterRoom } = appSlice.actions;

// //selector selects the user
export const selectRoomId = state=>state.app.roomId;

export default appSlice.reducer;