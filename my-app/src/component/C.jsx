import React from 'react'
import { useSelector } from 'react-redux'

function C() {
    const store = useSelector(store=>store.text)

  return (
    <h1>value : {store.data}</h1>
  )
}

export default C