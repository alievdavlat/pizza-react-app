import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// export  const fetchPizzas = createAsyncThunk("pizza/fetchPizzasStatus", async (params) => {
//   const {currentPage, categoryIndex,listValue} = params
//   const { data } = await axios.get(
//     `https://6456abe42e41ccf16922b42e.mockapi.io/items?page=${currentPage}&limit=4&${
//       categoryIndex > 0 ? `category=${categoryIndex}` : ""
//     }&sortBy=${listValue}&order=desc`
//   );
//   return data
  
// });

const initialState = {
  items: [],
  pizzaLoading: true,
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setPizzaLoading(state, action) {
      state.pizzaLoading = action.payload;
    },
  },
  // extraReducers: {
  //   [fetchPizzas.pending] : (state, action) => {
  //     console.log('pendig');
  //   },

  //   [fetchPizzas.fulfilled] : (state, action) => {

  //   },

  //   [fetchPizzas.rejected] : (state, action) => {
  //     console.log('erorr pending');
  //   }


  // }
});

export const { setItems, setPizzaLoading } = pizzaSlice.actions;
export default pizzaSlice.reducer;
