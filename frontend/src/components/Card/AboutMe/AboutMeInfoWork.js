import React from 'react'
import { useAuth } from 'context/AuthContext'
import { useGetCandidate } from 'hooks'
import { numberFormat } from 'utils'
import Chip from 'components/Chip/Chip'
import styles from './AboutMe.module.css'

const AboutMeInfoWork = () => {
  const { token } = useAuth()
  const { candidate } = useGetCandidate(token.user.user_id)

  if (!candidate) return null

  return (
    <article className={styles.infoWork}>
      <p style={{width: 'fit-content'}}>
        {candidate[0]?.t100_target_salary === null
          ? "No especificado"
          : <Chip label={`Sueldo deseado: ${numberFormat(candidate[0]?.t100_target_salary).replace(".00", "")}`} bg="#02B700" color="#FFF" />}
      </p>
      <p style={{width: 'fit-content'}}>
        {candidate[0]?.t100_modalities === null
          ? "No especificado"
          : <Chip label={`Modalidad de trabajo: ${candidate[0]?.t100_modalities}`} bg="#DDDEE2" color="#000" />}
      </p>
    </article>
  )
}

export default AboutMeInfoWork