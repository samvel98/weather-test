import { configureStore } from '@reduxjs/toolkit';
import weaterReducer from './slices/weaterSlice';

const store = configureStore({
  reducer: {
    weater: weaterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
