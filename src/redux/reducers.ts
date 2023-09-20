import { Countries } from "./../interface/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCountries, filterData } from "./action";

interface CountriesState {
  countries: Countries[];
  filterCountries: Countries[];
  isLoading: boolean;
  isError: boolean;
}

const contriesInitialState: CountriesState = {
  countries: [],
  filterCountries: [],
  isLoading: false,
  isError: false,
};

const contriesSlice = createSlice({
  name: "contries",
  initialState: contriesInitialState,
  reducers: {
    setFilterCountries: (state, action: PayloadAction<any>) => {
      state.filterCountries = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state, action: PayloadAction<any>) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCountries.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.countries = action.payload;
      state.filterCountries = action.payload;
    });
    builder.addCase(fetchCountries.rejected, (state, action: PayloadAction<any>) => {
      console.log("Error: ", action.payload);
      state.isError = true;
    });
  },
});

export const { setFilterCountries } = contriesSlice.actions;

export default contriesSlice.reducer;
