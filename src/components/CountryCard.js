import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'

const CountryCard = () => {

  const [countryInfo, setCountriesInfo] = useState(null)
  const [month, setMonth] = useState([])

  const params = useParams()
  const history = useHistory()

  useEffect(() => {
    try {
      const getData = async () => {
        const response = await axios.get(`https://travelbriefing.org/${params.id}?format=json`)
        setCountriesInfo(response.data)
      }
      getData()
    } catch (err) {
      console.log('bollocks')
    }
  
  }, [])


  const handleChange = event => {
    setMonth(event.target.value)
  }

  const handleClick = () => {
    history.push('/countries')
  }

  
  

  if (!countryInfo) return null
  const vaccinations = countryInfo.vaccinations
  console.log(vaccinations)
  return (
    <>
      <h2>Average temperature: {month}C</h2>
      <select onChange={handleChange}>
        <option value = {countryInfo.weather.January.tAvg}>January</option>
        <option value = {countryInfo.weather.February.tAvg}>February</option>
        <option value = {countryInfo.weather.March.tAvg}>March</option>
        <option value = {countryInfo.weather.April.tAvg}>April</option>
        <option value = {countryInfo.weather.May.tAvg}>May</option>
        <option value = {countryInfo.weather.June.tAvg}>June</option>
        <option value = {countryInfo.weather.July.tAvg}>July</option>
        <option value = {countryInfo.weather.August.tAvg}>August</option>
        <option value = {countryInfo.weather.September.tAvg}>September</option>
        <option value = {countryInfo.weather.October.tAvg}>October</option>
        <option value = {countryInfo.weather.November.tAvg}>November</option>
        <option value = {countryInfo.weather.December.tAvg}>December</option>
      </select>
      <button onClick={handleClick}>Escape</button>
      <h4>Drinking Water: {countryInfo.water.short}</h4>
      <h4>Travel Advice: {countryInfo.advise.UA.advise}</h4>
      {parseInt(month) < 20 ? <h1>TOO COLD!!! Don’t bother unless you really don’t get the whole holiday thing.</h1> : <h1>WOOHOO!!!!! TOPS OFFFFF!!!!</h1>}
      <h4>Vaccinations</h4>
      {vaccinations.map(item => {
        return <div key={item.name}>
          <h5>{item.name}</h5>
          <h6>{item.message}</h6>
        </div> 
      })
      }
    </>
    
  )
}
export default CountryCard
