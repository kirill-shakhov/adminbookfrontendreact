import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Book} from "@modules/book/static/types";


interface BookState {
  books: Book[] | null
}

const initialState: BookState = {
  books: null
}

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBooks: (
      state,
      action: PayloadAction<{ books: Book[] }>
    ) => {
      state.books = action.payload.books;
    },
  }

})

export const {
  setBooks
} = bookSlice.actions;

export default bookSlice.reducer;