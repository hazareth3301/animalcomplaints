import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
	name: "Animal-complaints-data",
	initialState: {
		postcode: "0000",
		suburb: "",
		data: {},
	},
	reducers: {
		updateData: (state, action) => {
			state.data = action.payload;
		},
		updatePostcode: (state, action) => {
			state.postcode = action.payload;
		},
		updateSuburb: (state, action) => {
			state.suburb = action.payload;
		},
	},
});

export const { updateData, updatePostcode, updateSuburb } = dataSlice.actions;
export default dataSlice.reducer;
