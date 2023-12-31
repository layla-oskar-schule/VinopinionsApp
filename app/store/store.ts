import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import winemakersReducer from '../features/winemakers/winemakersSlice';
import winesReducer from '../features/wines/winesSlice';
import storesReducer from '../features/stores/storesSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    wines: winesReducer,
    winemakers: winemakersReducer,
    stores: storesReducer
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
