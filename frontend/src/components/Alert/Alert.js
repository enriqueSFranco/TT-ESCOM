import React from 'react'

const Alert = ({ message }) => {

  return (
    <div className="alert alert-success" role="alert">
      {message}
    </div>
  )
}

export default Alert;