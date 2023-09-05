import { configureStore, type Middleware } from '@reduxjs/toolkit'
// import jobsReducer from './features/job-slice'
import { savedJob } from '../services'
import { toast } from 'sonner'
import candidateReducer from './features/candidate-slice'
import recruiterReducer from './features/recruiter-slice'

const persistMiddleware: Middleware = (store) => (next) => (action) => {
  next(action)
  // guardar en localstorage el nuevo estado
  window.localStorage.setItem('__redux__state__', JSON.stringify(store.getState()))
}

const syncWithDatabaseMiddleware: Middleware = (store) => (next) => (action) => {
  const { type, payload } = action
  // console.log(store.getState()) // fase 1
  const previousState = store.getState()
  console.log({ type, payload })

  next(action)
  if (type === 'candidate/jobToSave') {
    console.log('agregando vacante favoritos')
    toast.success(`Se ha guardado ${payload.title} correctamente`)
    // TODO: CREAR SERVICIO PARA GUARDAR UNA VACANTE EN FAVORITOS
    savedJob({ jobId: payload.id })
      .then((res: Response) => {
        if (res.ok) {
          toast.success(`Se ha guardado ${payload.title} correctamente`)
        }
      })
      .catch(error => console.log('error: ', error))
  }

  if (type === 'candidate/removeJobToFavs') {
    console.log('quitando vacante de favoritos')
    toast.success(`Se ha eliminado la vacante ${payload.title} de tus favoritos`)
    // TODO: CREAR SERVICIO PARA REMOVER UNA VACANTE EN FAVORITOS

  }
  // console.log(store.getState()) // fase 2
}

const store = configureStore({
  reducer: {
    recruiter: recruiterReducer,
    candidate: candidateReducer
  },
  middleware: [persistMiddleware, syncWithDatabaseMiddleware]
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
