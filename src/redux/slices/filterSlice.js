import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryIndex: 0,
  categories: [ "Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые", ],
  listActive: 0,
  listValue:'',
  list : [
    { name: "популярности", sortProperty: "rating" },
    { name: "цене", sortProperty: "price" },
    { name: "алфавиту", sortProperty: "title" },
  ],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryIndex(state,action) {
      state.categoryIndex = action.payload
    },
    setListValue(state, action) {
      state.listValue = action.payload
    },
    setListActive(state, action) {
      state.listActive = action.payload
    },
  },
});


export const { setCategoryIndex, setListValue, setListActive, } = filterSlice.actions

export default filterSlice.reducer