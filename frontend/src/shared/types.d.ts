type CandidateId = `${string}-${string}-${string}-${string}-${string}`

type RecruiterJobOfferId = Pick<RecruiterJobOffer, 'id'>

type HexadecimalColor = `#${string}`

export { CandidateId, RecruiterJobOfferId, HexadecimalColor }