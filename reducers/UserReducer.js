import { createSlice } from '@reduxjs/toolkit';
import data from '../data/data.json';

const initialState = {
  userData: {},
  followingStars: [],
  enabledPlatforms: data.socialPlatforms,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addFollowingStar: (state, action) => {
      state.followingStars = action.payload;
    },
    removeFollowingStar: (state, action) => {
      state.followingStars = state.followingStars.filter(
        followingStar => followingStar !== action.payload,
      );
    },
    resetFollowingStar: state => {
      state.followingStars = [];
    },
    addEnabledPlatform: (state, action) => {
      state.enabledPlatforms = action.payload;
    },
    removeEnabledPlatform: (state, action) => {
      state.enabledPlatforms = state.enabledPlatforms.filter(
        enabledPlatform => enabledPlatform !== action.payload,
      );
    },
    resetState: state => {
      state.followingStars = [];
      state.enabledPlatforms = data.socialPlatforms;
      userData: {
      }
    },
  },
});

export const {
  addFollowingStar,
  removeFollowingStar,
  addEnabledPlatform,
  removeEnabledPlatform,
  resetFollowingStar,
  resetState,
} = userSlice.actions;

export const userData = state => state.userReducer;

const userReducer = userSlice.reducer;

export default userReducer;
