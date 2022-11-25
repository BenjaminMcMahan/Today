import { configureStore } from "@reduxjs/toolkit";
import { journalEntriesReducer } from "../features/journal/journalSlice";

export const store = configureStore({
    reducer: {
        journalEntries: journalEntriesReducer
    }
});