import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  character: {
    name: "",
    sort: "asc",
    race: [],
    gender: "",
    limit: "10",
    page: "1",
    pages: "",
  },
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setName(state, action) {
      state.character.name = action.payload;
    },
    setSort(state, action) {
      state.character.sort = action.payload;
    },
    setRace(state, action) {
      state.character.race.push(action.payload);
    },
    unsetRace(state, action) {
      state.character.race.pop(action.payload);
    },
    setGender(state, action) {
      state.character.gender = action.payload;
    },
    setLimit(state, action) {
      state.character.limit = action.payload;
    },
    setPage(state, action) {
      state.character.page = action.payload;
    },
    setPages(state, action) {
      state.character.page = action.payload;
    },
    charactersDataStore(state, action) {
      state.character.datac = action.payload;
    },
    setLoading(state, action) {
      state.character.loading = action.payload;
    },
  },
});

export const {
  setName,
  charactersDataStore,
  setLoading,
  setSort,
  setRace,
  unsetRace,
  setGender,
  setLimit,
  setPage,
  setPages,
} = characterSlice.actions;

export default characterSlice.reducer;
