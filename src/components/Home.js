import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {

  const history = useHistory()
  
  const handleClick = () => {
    history.push('/countries')
  }

  return ( 
    <>
      <h1>Welcome home</h1>
      <button onClick={handleClick}>Enter</button>
    </>
  )

}
export default Home

