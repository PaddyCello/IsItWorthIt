# Project Two - Is It Worth It?

![screenshot](https://github.com/PaddyCello/IsItWorthIt/blob/107a3053dde86c82d9ef7e2f0004ad6622934267/screenshot/Screenshot%202021-05-02%20at%2008.28.04.png)

![screenshot](https://github.com/PaddyCello/IsItWorthIt/blob/2e1a08bc6ca99bc0b94035780f9021d31d76b976/screenshot/Screenshot%202021-05-05%20at%2016.35.25.png)

# Project Brief

Working in a pair (with [Hamza Butt](https://github.com/HamzaaMB)), build a React app in two days that uses data from one or more third-party APIs.

# Link to Deployed Project

[Is It Worth It?](https://isitworthit-hb.netlify.app/)

# Overview and Concept

After initially drawing a blank while browsing through numerous free APIs, my teammate and I eventually realised that we could make something more interesting by combining two APIs: specifically, [restcountries.eu](https://restcountries.eu/) and [travelbriefing.org](https://travelbriefing.org/api). Our idea was that we could use the data from restcountries.eu to provide a list of countries to choose from, attractively displayed with all of the national flags, flex-wrapped in CSS. On selection of one of these list items, a new API request would be made to travelbriefing.org, returning information about various potential impediments to visiting the selected country - things like water safety, required vaccinations, and most crucially, whether or not the weather would be warm and sunny. Our intention throughout was to take a somewhat tongue-in-cheek approach to ensuring that the user, sick of Covid lockdowns and desperate for a holiday, chooses wisely.

# Technologies Used

- React
- JavaScript
- CSS
- Axios
- GitHub
- Netlify

# Approach Taken

My teammate and I began by writing detailed pseudocode, using a Google Doc so that we could both contribute to it easily. We avoided being too ambitious in our scope, knowing that React and APIs were both very new to us, and that we were still discovering how to use them - as we had only two days to complete the project, our priority was to have a working product. Furthermore, this was also a first experience for both of us of working collaboratively on GitHub! Accordingly, we spent the majority of our time pair coding, making sure to take turns driving and navigating. The moments when we were not free to collaborate together were largely spent on further pseudocoding, researching, making mockups on Figma and generally ensuring that a lot of working code could be safely written and committed when we reconvened.

Arguably the biggest feature of our project was the use of data from the restcountries.eu API request to provide the endpoints for requests to travelbriefing.org. Requests to travelbriefing.org for information on one country are structured thusly:

![screenshot](https://github.com/PaddyCello/IsItWorthIt/blob/d19c55c981a9c6681b065f3ae0a7384d311a0693/screenshot/Screenshot%202021-05-05%20at%2016.56.03.png)

Accordingly, we needed a way to be able to pass the name of the country as params, instead of the ID, which is more conventional. My solution was as follows:

- Each page displaying information on a specific country would have a URL path that would end in a unique identifier (as is the convention):

```
<Route path='/countries/:id'>
  <CountryCard />
</Route>
```

- Instead of using the ID as the unique identifier, use the name instead - this works, as no two countries are named identically:

```
      <ul>
        {(filteredCountries.length > 0 ? filteredCountries : countries).map(country => {
          return <Link to={`/countries/${country.name}`} key={country.name}><li><p className='countryName'>{country.name}</p>               <img src ={country.flag}/></li></Link>
        })}
      </ul>
```

- Use params in the API request from the component that is linked to above (ie, the page that shows info on an individual country):

```
      const getData = async () => {
        const response = await axios.get(`https://travelbriefing.org/${params.id}?format=json`)
        setCountriesInfo(response.data)
      }
```

Although not infallible, this worked well enough for the purposes of a two-day hackathon.

Another crucial feature was the functionality for determining whether the temperature at the destination would justify the journey. Travelbriefing.org provides average temperature per month as one of its fields (tAvg); we decided that 20 degrees Celsius was the target to beat. A dropdown menu was provided, for the user to select the month in which they intended to travel; the value for each item on the dropdown was set to the average temperature for the month displayed, and set to state:

```
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
```

```
const handleChange = event => {
  setMonth(event.target.value)
}
```

A conditional render was then utilized in the return body, showing different statements depending on whether the average month was over or under the threshold:

```
{parseInt(month) < 20 ? <h1 className='message'>TOO COLD!!! Don’t bother.</h1> : <h1 className='yay-message'>WOOHOO!!!!! TOPS OFFFFF!!!!</h1>}
```

With this working successfully, our next priority was to make the list of countries more user-friendly and searchable. I created a simple search bar, rendering the list conditionally based on addition or removal of letters: 

```
      <ul>
        {(filteredCountries.length > 0 ? filteredCountries : countries).map(country => {
          return <Link to={`/countries/${country.name}`} key={country.name}><li><p className='countryName'>{country.name}</p>               <img src ={country.flag}/></li></Link>
        })}
      </ul>
```

Initially it behaved in a somewhat volatile fashion, until my teammate surmised that it might have been making case-sensitive searches. This was easy enough to fix:

```
  const handleChange = event => {
    const filteredArray = countries.filter(country => {
      return country.name.toUpperCase().includes(event.target.value.toUpperCase())
    })
    setFilteredCountries(filteredArray)
  }
```

With this taken care of, our focus then turned to the few, post-MVP items on our list - namely, a simple Home page, and some styling.

# Bugs, Blockers and Wins

We definitely experienced a few issues along the way. One large one, that remains to be fully resolved, is that the restcountries.eu API actually contains more countries than travelbriefing.org. Accordingly, some of the links (such as Antarctica, or anything else that is a region but not a sovereign state) will not actually work.

A possibly bigger obstacle we encountered was CORS volatility on the calls to travelbriefing.org. Their website gives instruction to be responsible with API calls, but does not provide an approximation as to how many daily calls they would expect to be able to handle - and we discovered the hard way that we had hit the threshold pretty quickly! Thankfully, two things helped to minimise the level of setback during development:

- cors-anywhere.herokuapp.com provides a URL that can be prepended to the URL of an API request, blocking CORS and thus allowing more requests. This too has a threshold, but it bought us much more time.
- We made extensive use of Chrome developer tools when tackling styling issues on the information page, to minimise page reloads (and thus API requests).

# Future Features and Key Learning

When this project was being built, I knew that the combination of the timeframe and the comparative lack of familiarity with the technologies meant that there would be changes that I would wish to make afterwards. Chief among these is to build out a back end, with a custom API that omits entries that do not appear in travelbriefing.org, and potentially aligns naming conventions more closely so as to maximise reliability when using params for the API request. I would also make the styling more consistent throughout the app - styling came as something of an afterthought at the time, as avoiding CORS errors was a far bigger priority! Finally, I would also make the searches more customisable, probably incorporating a additional dropdown to allow filtration by continent.

In terms of key learning, this was a crash course in many things: API requests, GitHub collaboration, React, and even the dreaded CORS. All of this would put me on much firmer footing for my next projects.
