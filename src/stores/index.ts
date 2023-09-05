import { configureStore, type Middleware } from '@reduxjs/toolkit'
// import jobsReducer from './features/job-slice'
import candidateReducer from './features/candidate-slice'
import recruiterReducer from './features/recruiter-slice'
import { trabajaYa } from '../api/trabajaYaApi'

const persistMiddleware: Middleware = (store) => (next) => (action) => {
  next(action)
  // guardar en localstorage el nuevo estado
  window.localStorage.setItem('__redux__state__', JSON.stringify(store.getState()))
}

const syncWithDatabaseMiddleware: Middleware = (store) => (next) => (action) => {

}

const store = configureStore({
  reducer: {
    [trabajaYa.reducerPath]: trabajaYa.reducer,
    recruiter: recruiterReducer,
    candidate: candidateReducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware().concat(trabajaYa.middleware), persistMiddleware, syncWithDatabaseMiddleware]
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
