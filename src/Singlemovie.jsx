import React from 'react'
import { useParams } from 'react-router-dom'

function Singlemovie() {
  const { id } = useParams();
  return (
    <div>Singlemovie {id}</div>
  )
}

export default Singlemovie