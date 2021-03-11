import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CountryCard = () => {

  const [countryInfo, setCountriesInfo] = useState(null)
  const params = useParams()

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://travelbriefing.org/${params.id}?format=json`)
      setCountriesInfo(response)
    }
    getData()
  }, [])
  console.log(countryInfo.data.names.name)
  return (
    <h1>{countryInfo.data.names.name}</h1>
  )
}
export default CountryCard