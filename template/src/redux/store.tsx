import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
/* REDUCERS */
import SessionReducer from "./reducers/Session.reducer";
/* EXTRA */
import {
  saveToSessionStorage,
  loadFromSessionStorage,
} from "../assets/libs/extras";

const preloadedState: any = loadFromSessionStorage();

const store = configureStore({
  reducer: {
    Session: SessionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
  preloadedState,
});

store.subscribe(() => {
  saveToSessionStorage(store.getState());
});

export default store;
