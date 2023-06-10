import { createSlice } from '@reduxjs/toolkit'

export const contactSlice = createSlice({
  name: 'contact',
  initialState: { items: [], filter: '',},
  reducers: {
    addContact(state, action) {
        // console.log(action.payload);
        state.items.push(action.payload);
    },
    deleteContact(state, action) {
       
        state.items = state.items.filter((contact) => contact.id !== action.payload)
    },
    
  },
})

export const { addContact, deleteContact} = contactSlice.actions
