# Project Two - Is It Worth It?

# Project Brief

Working in a pair (with [Hamza Butt](https://github.com/HamzaaMB)), build a React app in two days that uses data from one or more third-party APIs.

# Link to Deployed Project

[Is It Worth It?](https://isitworthit-hb.netlify.app/)

# Overview and Concept

After initially drawing a blank while browsing through numerous free APIs, my teammate and I eventually realised that we could make something more interesting by combining two APIs: specifically, [restcountries.eu](https://restcountries.eu/) and [travelbriefing.org](https://travelbriefing.org/api). Our idea was that we could use the data from restcountries.eu to provide a list of countries to choose from, attractively displayed with all of the national flags, flex-wrapped in CSS. On selection of one of these list items, a new API request would be made to travelbriefing.org, returning information about various potential impediments to visiting the selected country - things like water safety, required vaccinations, and most crucially, whether or not the weather would be warm and sunny. Our intention throughout was to take a somewhat tongue-in-cheek approach to ensuring that the user, sick of Covid lockdowns and desperate for a holiday, chooses wisely.

![screenshot](https://github.com/PaddyCello/IsItWorthIt/blob/107a3053dde86c82d9ef7e2f0004ad6622934267/screenshot/Screenshot%202021-05-02%20at%2008.28.04.png)

![screenshot](https://github.com/PaddyCello/IsItWorthIt/blob/2e1a08bc6ca99bc0b94035780f9021d31d76b976/screenshot/Screenshot%202021-05-05%20at%2016.35.25.png)

![screenshot] (https://github.com/PaddyCello/IsItWorthIt/blob/bb6062290c89a27dde7a892e16caea978a0dba35/screenshot/Screenshot%202021-05-05%20at%2016.37.16.png)

# Technologies Used

React
JavaScript
CSS
Axios
GitHub
Netlify

# Approach Taken

My teammate and I began by writing detailed pseudocode, using a Google Doc so that we could both contribute to it easily. We avoided being too ambitious in our scope, knowing that React and APIs were both very new to us, and that we were still discovering how to use them - as we had only two days to complete the project, our priority was to have a working product. Furthermore, this was also a first experience for both of us of working collaboratively on GitHub! Accordingly, we spent the majority of our time pair coding, making sure to take turns driving and navigating. The moments when we were not free to collaborate together were largely spent on further pseudocoding, researching, making mockups on Figma and generally ensuring that a lot of working code could be safely written and committed when we reconvened.

Arguably the biggest feature of our project was the use of data from the restcountries.eu API request to provide the endpoints for requests to travelbriefing.org. Requests to travelbriefing.org for information on one country are structured thusly:
