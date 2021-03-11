import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'

const CountryCard = () => {

  const [countryInfo, setCountriesInfo] = useState(null)
  const [month, setMonth] = useState([])

  const params = useParams()
  const history = useHistory()

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://travelbriefing.org/${params.id}?format=json`)
      setCountriesInfo(response.data)
    }
    getData()
  }, [])


  const handleChange = event => {
    console.log('event', event.target.value)
    setMonth(event.target.value)
  }

  const handleClick = () => {
    history.push('/')
  }

  console.log(typeof(parseInt(month)))
  if (!countryInfo) return null
  return (
    <>
      <h1>Average temperature: {month}C</h1>
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
      <p>Drinking Water: {countryInfo.water.short}</p>
      <p>Travel Advice: {countryInfo.advise.UA.advise}</p>
      {parseInt(month) < 20 ? <p>Blitz</p> : <p>Tops offf</p>}
    </>
    
  )
}
export default CountryCard
