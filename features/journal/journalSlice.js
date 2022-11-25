import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";

export const fetchJournalEntries = createAsyncThunk(
    'journal/fetchEntries',
    async () => {
        const response = await fetch(baseUrl + 'journal-entries');
        return response.json();
    }
);

export const postJournalEntry = createAsyncThunk(
    'journal/postJournalEntry',
    async (payload, { dispatch, getState }) => {
        const { journalEntries } = getState();
        payload.date = new Date().toLocaleDateString('en-US');
        payload.id = journalEntries.entriesArray.length;
        dispatch(addJournalEntry(payload));
    }
)

const journalEntriesSlice = createSlice({
    name: 'journalEntries',
    initialState: { isLoading: true, errMess: null, entriesArray: [] },
    reducers: {
        addJournalEntry: (state, action) => {
            state.entriesArray.push(action.payload);
        }
    },
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

export const journalEntriesReducer = journalEntriesSlice.reducer
export const { addJournalEntry } = journalEntriesSlice.actions;