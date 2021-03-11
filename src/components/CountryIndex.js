import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CountryIndex = () => {

  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('https://restcountries.eu/rest/v2/all')
      setCountries(response.data)
    }
    getData()
  }, [])

  const handleChange = event => {
    const filteredArray = countries.filter(country => {
      return country.name.toUpperCase().includes(event.target.value.toUpperCase())
    })
    setFilteredCountries(filteredArray)
    console.log(event.target.value)
  }


  return (
    <>
      <input type ='text' placeholder='search' onChange={handleChange}></input>
      <ul>
        {(filteredCountries.length > 0 ? filteredCountries : countries).map(country => {
          return <Link to={`/countries/${country.name}`} key={country.name}><li>{country.name} <img src ={country.flag}/></li></Link>
        })}
      </ul>
    </>
  )
}

export default CountryIndex