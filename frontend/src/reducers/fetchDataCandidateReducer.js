import { TYPES } from "actions/fetchDataCandidateActions"

export const fetchDataCandidateInit = {
  candidate: {},
  skills: {},
  academicHistorial: {},
  socialNetworks: {},
}

export function fetchDataCandidateReducer(state, action) {
  switch (action.type) {
    case TYPES.FETCH_CANDIDATE: 
      return {
        candidate: action.payload,
        skills: {},
        academicHistorial: {},
        socialNetworks: {}
      }
    case TYPES.FETCH_SKILLS:
      return {
        candidate: {},
        skills: action.payload,
        academicHistorial: {},
        socialNetworks: {}
      }
    case TYPES.FETCH_ACADEMIC_HISTORIAL:
      return {
        candidate: {},
        skills: {},
        academicHistorial: action.payload,
        socialNetworks: {}
      }
    case TYPES.FETCH_SOCIAL_NETWORK:
      return {
        candidate: {},
        skills: {},
        academicHistorial: {},
        socialNetworks: action.payload
      }
    default:
      return state
  }
}