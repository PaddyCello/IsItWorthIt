import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useHistory } from 'react-router-dom'

const CountryCard = () => {

  const [countryInfo, setCountriesInfo] = useState(null)
  const [month, setMonth] = useState('?')

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

  
  
  
  if (!countryInfo) return (
    <div className='fail'>
      <h4>Come on, pick a real country.</h4>
      <button className='back-button' onClick={handleClick}>Back to the countries</button>
    </div>
  )
  
  const vaccinations = countryInfo.vaccinations
  return (
    <div className='container-container'>
      <div className='card-container'>
        <div className='left-container'>
          <aside className='header'>
            <h2>{countryInfo.names.name} ({countryInfo.names.iso3})</h2>
            <h4>Official Language: {countryInfo.language[0].language}</h4>
            <h4>Time Zone: {countryInfo.timezone.name}</h4>
            <h4>Currency: {countryInfo.currency.name}</h4>
          </aside>
          <aside className='vaccinations'>
            <h4>Vaccinations:</h4>
            {vaccinations.map(item => {
              return <div key={item.name}>
                <h5>{item.name}</h5>
                <h6>{item.message}</h6>
              </div> 
            })
            }
          </aside>
        </div>
        <div className='right-container'>
          <aside className='travel-advice'>
            <h4>Drinking Water: {countryInfo.water.short}</h4>
            <h4>Travel Advice: {countryInfo.advise.UA.advise}</h4>
          </aside>
          <aside className='weather'>
            <h2>But more importantly, how is the weather???</h2>
            <h4>Choose a month to find out:</h4>
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
            <h2>Average temperature: {month}C</h2>
          </aside>
        </div>
      </div>
      <footer>
        {parseInt(month) < 20 ? <h1 className='message'>TOO COLD!!! Don’t bother.</h1> : <h1 className='yay-message'>WOOHOO!!!!! TOPS OFFFFF!!!!</h1>}
        <button className='back-button' onClick={handleClick}>Back to the countries</button>
      </footer>
    </div>
    
  )
}
export default CountryCard
