import React from 'react'

interface Error{
    error: string
}

export  const Error = ({error}:Error) => {
  return (
    <div>{error}</div>
  )
}
