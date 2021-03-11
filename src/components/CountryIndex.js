import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CountryIndex = () => {

  const [countries, setCountries] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('https://restcountries.eu/rest/v2/all')
      setCountries(response.data)
    }
    getData()
  }, [])


  return (
    <ul>
      {countries.map(country => {
        return <Link to={`/${country.name}`} key={country.name}><li>{country.name}</li></Link>
      })}
    </ul>
  )
}

export default CountryIndex