import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CountryCard = () => {

  const [countryInfo, setCountriesInfo] = useState(null)
  const params = useParams()

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://travelbriefing.org/${params.id}?format=json`)
      setCountriesInfo(response.data)
    }
    getData()
  }, [])
  console.log('name', countryInfo.weather.January.tAvg)

  const handleChange = event => {
    console.log('event', event.target.value)
  }

  return (
    <div>
      <h1>{countryInfo.weather.January.tAvg}</h1>
      <select onChange={handleChange}>
        <option>January</option>
        <option>February</option>
        <option>March</option>
        <option>April</option>
        <option>May</option>
        <option>June</option>
        <option>July</option>
        <option>August</option>
        <option>September</option>
        <option>October</option>
        <option>November</option>
        <option>December</option>
      </select>
    </div>

  )
}
export default CountryCard
