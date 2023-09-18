import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
// import { useAsyncValue } from "react-router-dom";
interface Note {
  id: number;
  image: string;
  title: string;
  text: string;
}

export interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [],
};

export const fetchBlogs = createAsyncThunk(
  "notes/fetchBlogs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<Note[]>(
        "http://localhost:5000/allNotes"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }   
  }
);

export const deleteNote = createAsyncThunk(
  "notes/thisdoesnotwork",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/allNotes/${id}`
      );
      if(response.status == 200){
        return true;
      }else{
        return false;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addNote = createAsyncThunk(
  "notes/thisalsodoesnotwork",
  async (note: Note, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5000/allNotes", note);
      if (response.status == 200) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    // addNote: (state, action) => {
    //   state.notes.push(action.payload);
    // },
    // deleteNote: (state, action) => {
    //   state.notes = state.notes.filter((note) => note.id !== action.payload.id);
    //   console.log("ola");
    // },
    updateNote: (state, action) => {
      state.notes.map((note) => {
        if (note.id === action.payload.id) {
          note.text = action.payload.text;
          note.title = action.payload.title;
        }
      });
    },
    setNotes: (state, action: PayloadAction<Note[]>) => {
      state.notes = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      state.notes = action.payload;
    });
    // builder.addCase(fetchBlogs.pending, (state, action)=>{

    // }),
    // builder.addCase(fetchBlogs.rejected, (state, action)=>{

    // })
  },
});

export const { updateNote, setNotes } = notesSlice.actions;
export default notesSlice.reducer;
