import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';

import { tourAPI } from '../api/tourAPI';

const initialState = {
  list: [],
  tour: {},
  loading: false,
  booking: {},
};

export const bookTour = createAsyncThunk('tours/booking', async params => {
  // const res = await tourAPI.getTourById(params)
  // return res
  console.log(params);
});

export const getDetailTour = createAsyncThunk('tours/detail', async params => {
  const res = await tourAPI.getTourById(params);
  return res;
});

export const getListTours = createAsyncThunk('tours/get-all', async () => {
  const res = await tourAPI.getAll();
  return res;
});

const toursSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getListTours.pending, state => {
      state.loading = true;
    });
    builder.addCase(getListTours.rejected, state => {
      state.loading = false;
      message.error('Can not connect to server. Please check your internet');
    });
    builder.addCase(getListTours.fulfilled, (state, action) => {
      let data = action.payload;
      console.log(data);
    });
    builder.addCase(getDetailTour.pending, state => {
      state.loading = true;
    });
    builder.addCase(getDetailTour.rejected, state => {
      state.loading = false;
      message.error('Can not connect to server. Please check your internet');
    });
    builder.addCase(getDetailTour.fulfilled, (state, action) => {
      let data = action.payload;
      state.loading = false;
      state.tour = data.data.data;
    });
    // builder.addCase(bookTour.pending, state => {
    //   state.loading = true;
    // });
    // builder.addCase(bookTour.rejected, state => {
    //   state.loading = false;
    //   message.error('Can not connect to server. Please check your internet');
    // });
    // builder.addCase(bookTour.fulfilled, (state, action) => {
    //   let data = action.payload;
    //   state.loading = false;
    //   console.log(data)
    // });
  },
});

export default toursSlice;