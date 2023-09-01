import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import type { Job, RecruiterJobOfferId } from "../../shared"

// DATA
const DEFAULT_STATE: Job[] = [
  {
    id: 1,
    title: "Desarrollador Frontend",
    company: "Empresa A",
    location: "Ciudad A",
    description: "Descripción del trabajo 1",
    salary: 60000,
    workType: "Tiempo completo",
    experienceLevel: "Experiencia intermedia",
    requirements: "Requisitos del trabajo 1",
    postedDate: "2023-09-01",
    applicantCount: 5
  },
  {
    id: 2,
    title: "Analista de Datos",
    company: "Empresa B",
    location: "Ciudad B",
    description: "Descripción del trabajo 2",
    salary: 55000,
    workType: "Tiempo completo",
    experienceLevel: "Experiencia avanzada",
    requirements: "Requisitos del trabajo 2",
    postedDate: "2023-09-02",
    applicantCount: 8
  },
  {
    id: 3,
    title: "Diseñador Gráfico",
    company: "Empresa C",
    location: "Ciudad C",
    description: "Descripción del trabajo 3",
    salary: 48000,
    workType: "Medio tiempo",
    experienceLevel: "Experiencia intermedia",
    requirements: "Requisitos del trabajo 3",
    postedDate: "2023-09-03",
    applicantCount: 3
  },
  {
    id: 4,
    title: "Ingeniero de Software",
    company: "Empresa D",
    location: "Ciudad D",
    description: "Descripción del trabajo 4",
    salary: 70000,
    workType: "Tiempo completo",
    experienceLevel: "Experiencia avanzada",
    requirements: "Requisitos del trabajo 4",
    postedDate: "2023-09-04",
    applicantCount: 10
  },
  {
    id: 5,
    title: "Analista de Marketing",
    company: "Empresa E",
    location: "Ciudad E",
    description: "Descripción del trabajo 5",
    salary: 58000,
    workType: "Tiempo completo",
    experienceLevel: "Experiencia intermedia",
    requirements: "Requisitos del trabajo 5",
    postedDate: "2023-09-05",
    applicantCount: 6
  },
  {
    id: 6,
    title: "Gerente de Proyectos",
    company: "Empresa F",
    location: "Ciudad F",
    description: "Descripción del trabajo 6",
    salary: 75000,
    workType: "Tiempo completo",
    experienceLevel: "Experiencia avanzada",
    requirements: "Requisitos del trabajo 6",
    postedDate: "2023-09-06",
    applicantCount: 12
  },
  {
    id: 7,
    title: "Diseñador de Interiores",
    company: "Empresa G",
    location: "Ciudad G",
    description: "Descripción del trabajo 7",
    salary: 52000,
    workType: "Medio tiempo",
    experienceLevel: "Experiencia intermedia",
    requirements: "Requisitos del trabajo 7",
    postedDate: "2023-09-07",
    applicantCount: 4
  },
  {
    id: 8,
    title: "Desarrollador Backend",
    company: "Empresa H",
    location: "Ciudad H",
    description: "Descripción del trabajo 8",
    salary: 65000,
    workType: "Tiempo completo",
    experienceLevel: "Experiencia avanzada",
    requirements: "Requisitos del trabajo 8",
    postedDate: "2023-09-08",
    applicantCount: 9
  },
  {
    id: 9,
    title: "Especialista en Recursos Humanos",
    company: "Empresa I",
    location: "Ciudad I",
    description: "Descripción del trabajo 9",
    salary: 58000,
    workType: "Tiempo completo",
    experienceLevel: "Experiencia intermedia",
    requirements: "Requisitos del trabajo 9",
    postedDate: "2023-09-09",
    applicantCount: 7
  },
  {
    id: 10,
    title: "Analista de Seguridad Informática",
    company: "Empresa J",
    location: "Ciudad J",
    description: "Descripción del trabajo 10",
    salary: 70000,
    workType: "Tiempo completo",
    experienceLevel: "Experiencia avanzada",
    requirements: "Requisitos del trabajo 10",
    postedDate: "2023-09-10",
    applicantCount: 11
  }
]

interface RecruiterJobsState {
  jobOffers: Job[]
}

const initialState: RecruiterJobsState = (() => {
  const store = window.localStorage.getItem('__redux__state__')
  return store != null ? JSON.parse(store).recruiter : { jobOffers: DEFAULT_STATE }
})()

const recruiterSlice = createSlice({
  name: 'recruiter',
  initialState,
  reducers: {
    createJob: (state, action: PayloadAction<Job>) => {
      state.jobOffers.push(action.payload)
    },
    deleteJob: (state, action: PayloadAction<RecruiterJobOfferId>) => {
      const jobIdx = action.payload.id
      state.jobOffers = state.jobOffers.filter(job => job.id !== jobIdx)
    }
  }
})

export const { deleteJob, createJob } = recruiterSlice.actions

export default recruiterSlice.reducer