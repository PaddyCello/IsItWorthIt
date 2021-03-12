import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = () => {

  const history = useHistory()
  
  const handleClick = () => {
    history.push('/countries')
  }

  return ( 
    <div className='home'>
      <p>Picture the scene: after months upon months of waiting, the world is vaccinated, Covid is vanquished, and you are ready and able to go on holiday again.  Desperate to leave your house, your street, your country, you buy the first airplane tickets you can get your hands on.  You don’t know where you’re flying to, and you don’t care - as long as you’re not in your living room with Joe Wicks on a five-inch screen and the pungent aroma of sourdough starter in the air, you’ll take it.</p>
      <p>But before you board that plane, ask yourself one thing...</p>
      <h1>IS IT WORTH IT?</h1>
      <button onClick={handleClick}>Click here</button><p> before you do anything stupid.</p>
    </div>
  )

}
export default Home

