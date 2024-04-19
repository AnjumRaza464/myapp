import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  contacts: [],
}

export const contactSlice = createSlice({
  name: 'contactBook',
  initialState,
  reducers: {
    addToContacts: (state,action) => {
        state.contacts.push(action.payload)
    },
    deleteContact: (state,action) => {
        const id = action.payload
        const filteredArr = state.contacts.filter(contact=>contact.id != id)
        state.contacts = filteredArr
    },
   
  },
})

export const { addToContacts, deleteContact } = contactSlice.actions

export default contactSlice.reducer