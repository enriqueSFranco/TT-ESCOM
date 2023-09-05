import { useMemo } from "react"
import { useAppSelector } from "../hooks/store"
import { Direction } from "../shared"
import { ItemList } from "../components/ItemList"
import { CardJob } from "../components/CardJob"

const CandidateJobsSave = () => {
  const { myJobs } = useAppSelector(state => state.candidate)

  const totalJobs = useMemo(() => myJobs.length, [myJobs])

  return (
    <section>
      <header>
        <h2>vacantes guardadas {totalJobs}</h2>
      </header>

      <article>
        <ItemList
          data={myJobs}
          direction={Direction.COLUMN}
          emptyMessage="Aun no tienes vacantes guardadas"
          render={job => <CardJob job={job} />}
        />
      </article>
    </section>
  )
}

export default CandidateJobsSave