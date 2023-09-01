import { Direction } from "../shared"
import { useAppSelector } from "../hooks/store"
import { CardJob } from "./CardJob"
import { ItemList } from "./ItemList"

export const JobList: React.FC = () => {
  const { jobs } = useAppSelector(state => state.jobs)

  return (
    <ItemList
      data={jobs}
      direction={Direction.COLUMN}
      emptyMessage="¡Upps, no tenemos vacantes registradas!"
      render={(job) => <CardJob job={job} />}
    />
  )
}
