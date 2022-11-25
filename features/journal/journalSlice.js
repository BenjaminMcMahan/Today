import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";

export const fetchJournalEntries = createAsyncThunk(
    'journal/fetchEntries',
    async () => {
        const response = await fetch(baseUrl + 'journal-entries');
        return response.json();
    }
);

const journalEntriesSlice = createSlice({
    name: 'journal-entries',
    initialState: { isLoading: true, errMess: null, entriesArray: [] },
    reducers: {},
    extraReducers: {
        [ fetchJournalEntries.pending ]: (state) => {
            state.isLoading = true;
        },
        [ fetchJournalEntries.fulfilled ]: (state, action) => {
            state.isLoading = false;
            state.errMess = null;
            state.entriesArray = action.payload;
        },
        [ fetchJournalEntries.rejected ]: (state, action) => {
            state.isLoading = false;
            state.errMess = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const journalEntriesReducer = journalEntriesSlice.reducer;