import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { carsReducer } from "./CarSlice";
import { favoriteReducer } from "./FavoriteSlice";

const authPersistConfig = {
  key: "favorite",
  storage,
  whitelist: ["data"],
};

export const store = configureStore({
  reducer: {
    favorite: persistReducer(authPersistConfig, favoriteReducer),
    cars: carsReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);