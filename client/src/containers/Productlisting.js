import React from 'react'
import { useSelector } from 'react-redux'

const Productlisting = () => {
    const products=useSelector ((state)=>state)
     
    return (
    <div>
    <h1>Productlisting</h1>
    </div>
  )
}
export default Productlisting
