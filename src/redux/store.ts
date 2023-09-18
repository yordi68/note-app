import { configureStore } from '@reduxjs/toolkit'
import notesSlice from './notesSlice' 

const store = configureStore({
    reducer: {
        notes: notesSlice
    }
})


export type RootState = ReturnType<typeof store.getState>
export default store
