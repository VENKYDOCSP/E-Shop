import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer/rootReducer";
import persistReducer from "redux-persist/es/persistReducer";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'order']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        })
    }
});

export const persistor = persistStore(store);