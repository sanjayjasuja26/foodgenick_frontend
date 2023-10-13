import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import LoginSlice from "./LoginSlice";
import SignUpSlice from "./SignUpSlice";
import RestaurantSlice from "./Slices/RestaurantSlice";
import DynamicContentSlice from "./Slices/DynamicContentSlice";
import BlogSlice from "./Slices/BlogSlice";

// Redux Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  // Add any other configuration options you need
};

// Combine your reducers
const rootReducer = combineReducers({
  LoginSlice: LoginSlice,
  SignUpSlice: SignUpSlice,
  RestaurantSlice: RestaurantSlice,
  DynamicContentSlice: DynamicContentSlice,
  BlogSlice:BlogSlice
});

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create and export the store
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
