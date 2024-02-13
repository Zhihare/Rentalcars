import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	// persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

// import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({
	// auth: persistReducer(authConfig, authReducer),
});
export const store = configureStore({
	reducer: rootReducer,

	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);