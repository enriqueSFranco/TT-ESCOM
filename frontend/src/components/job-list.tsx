import { DEVICE, Direction } from '../shared'
import { useViewport, useAppSelector } from '../hooks'
import { CardJob } from './card-job'
import { ItemList } from './ItemList'

export const JobList: React.FC = () => {
  const viewport = useViewport()
  const { jobOffers } = useAppSelector(state => state.recruiter)

  return (
    <ItemList
      data={jobOffers}
      direction={viewport.device === DEVICE.DESKTOP ? Direction.ROW : Direction.COLUMN}
      emptyMessage='¡Upps, no tenemos vacantes registradas!'
      render={(job) => <CardJob job={job} />}
    />
  )
}
