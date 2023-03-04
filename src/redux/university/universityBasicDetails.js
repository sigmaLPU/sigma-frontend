import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import { normalize } from '../normalize';

const initialState = {
  data: {
    message: 'Loading',
    loading: true,
    data: {},
    id: '',
  },
};

const universityBasicDetailsReducer = createAsyncThunk(
  'universityBasicDetails/universityBasicDetailsReducer',
  async (data) => {
    data = normalize(data);
    return axios.get(
      `https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/university/${data?.id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
    );
  }
);

const universityBasicDetailsUpdateReducer = createAsyncThunk(
  'universityBasicDetails/universityBasicDetailsUpdateReducer',
  async (data) => {
    data = normalize(data);
    return axios.put(
      `https://sigma-lpu-vsbd9.ondigitalocean.app/api/v2/university/${data?.id}/update`,
      data?.data,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
    );
  }
);

export const universityBasicDetailsSlice = createSlice({
  name: 'getSingleUniversityBasicDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      universityBasicDetailsReducer.fulfilled,
      (state, { payload }) => {
        state.data.message = 'Fulfilled';
        state.data.loading = false;
        state.data.data = {
          name: payload?.data?.university?.name
            ? payload?.data?.university?.name
            : 'Not available',
          country: payload?.data?.university?.country
            ? payload?.data?.university?.country
            : 'Not available',
          address:
            payload?.data?.university?.country +
            ', ' +
            payload?.data?.university?.city
              ? payload?.data?.university?.country +
                ', ' +
                payload?.data?.university?.city
              : 'Not available',
          website: payload?.data?.university?.website
            ? payload?.data?.university?.website
            : 'Not available',
          createdBy: payload?.data?.university?.createdBy?.name
            ? payload?.data?.university?.createdBy?.name
            : 'Not available',
          createdOn: payload?.data?.university?.createdAt
            ? payload?.data?.university?.createdAt
            : 'Not available',
          updatedBy: payload?.data?.university?.updatedBy?.name
            ? payload?.data?.university?.updatedBy?.name
            : 'Not available',
          updatedOn: payload?.data?.university?.updatedAt
            ? payload?.data?.university?.updatedAt
            : 'Not available',
        };
        state.data.id = payload?.data?.university?._id;
      }
    );
    builder.addCase(
      universityBasicDetailsReducer.pending,
      (state, { payload }) => {
        state.data.message = 'Loading';
        state.data.loading = true;
        state.data.data = {
          message: 'please wait (loading)',
        };
      }
    );
    builder.addCase(
      universityBasicDetailsReducer.rejected,
      (state, { payload }) => {
        state.data.message = 'Failed';
        state.data.loading = false;
        state.data.data = {
          message: 'unable to fetch data',
        };
      }
    );

    builder.addCase(
      universityBasicDetailsUpdateReducer.fulfilled,
      (state, { payload }) => {
        state.data.message = 'Fulfilled';
        state.data.loading = false;
        state.data.data = {
          name: payload?.data?.university?.name
            ? payload?.data?.university?.name
            : 'Not available',
          country: payload?.data?.university?.country
            ? payload?.data?.university?.country
            : 'Not available',
          address:
            payload?.data?.university?.country +
            ', ' +
            payload?.data?.university?.city
              ? payload?.data?.university?.country +
                ', ' +
                payload?.data?.university?.city
              : 'Not available',
          website: payload?.data?.university?.website
            ? payload?.data?.university?.website
            : 'Not available',
        };
      }
    );
    builder.addCase(
      universityBasicDetailsUpdateReducer.pending,
      (state, { payload }) => {
        state.data.message = 'Loading';
        state.data.loading = true;
        state.data.data = {
          message: 'please wait (loading)',
        };
      }
    );
    builder.addCase(
      universityBasicDetailsUpdateReducer.rejected,
      (state, { payload }) => {
        state.data.message = 'Failed';
        state.data.loading = false;
        state.data.data = {
          message: 'unable to fetch data',
        };
      }
    );
  },
});

export default universityBasicDetailsSlice.reducer;
export { universityBasicDetailsReducer, universityBasicDetailsUpdateReducer };
