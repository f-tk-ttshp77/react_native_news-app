import { createStore, combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import userReducer from './reducers/user'
import { composeWithDevTools } from 'redux-devtools-extension'
import AsyncStorage from '@react-native-async-storage/async-storage'

const rootReducer = combineReducers({
	user: userReducer,
})

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['user'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeWithDevTools())

export const persistor = persistStore(store)
export default store