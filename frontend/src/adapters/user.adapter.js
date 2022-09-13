/* Usado para iniciar sesión de Candidatos y Reclutadores */
export const createUser = (user) => {
  const formatterUser = {
    t100_email: user.t100_email,
    password: user.password
  }
  return formatterUser
}

