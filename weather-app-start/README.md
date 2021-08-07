# Weather App

## Installation

Ce projet est créé avec CRA et utilise Bootstrap 5.

```bash
yarn add bootstrap@next
```

## Architecture

Nous allons placer tous les components dans un nouveau dossier `components`. Voici la structure :

```bash
src
├── App.js
├── App.test.js
├── components
│   ├── CityForm.js
│   ├── Description.js
│   ├── Humidity.js
│   ├── Icon.js
│   ├── Temperature.js
│   └── WeatherApp.js
├── index.css
├── index.js
├── reportWebVitals.js
└── setupTests.js
```

## App.js

Pour l'instant nous allons afficher des conditions météo pour Paris. (Dans la version finale, un formulaire permettra de choisir la destination.)

```javascript
/* src/App.js */
import WeatherApp from "./components/WeatherApp"

function App() {
  return (
    <div className="container my-4">
      <h1 className="display-3 text-center mb-4">Météo Actuelle</h1>
      <WeatherApp />
    </div>
  )
}

export default App
```

## WeatherApp component

```javascript
import { useState, useEffect } from "react"

const Weather = ({ city }) => {
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=xxxxxx&units=metric&lang=fr`
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Météo untrouvable")
        }
        return response.json()
      })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [])

  return (
    <section className="text-center">
      <h2 className="mb-4">Conditions météo à Paris</h2>
    </section>
  )
}

export default Weather
```

Quelle informations de `data` allons nous utiliser ? Nous pouvons opter pour :

- **conditions :**

```javascript
{
  feelsLike: Math.round(data.main.feels_like),
  mainTemp: Math.round(data.main.temp),
  humidity: data.main.humidity,
}
```

- **description :** `data.weather[0].description`
- **icon :** `data.weather[0].icon`
- **location :** `data.name`, `data.sys.country`

## .env

Les clés API sont souvent gardées dans un fichier `.env` dans la racine du projet. Nous allons utiliser `.env.local`. Vous poucez vérifier que `.env.local` est inclue dans `.gitignore`)

Attention le nom de la variable [doit commencer par REACT_APP](https://create-react-app.dev/docs/adding-custom-environment-variables/)

```bash
touch .env.local
```

```
# .env.local
REACT_APP_OPENWEATHER_API_KEY=votrekeyvientici
```

Ensuite, dans `WeatherApp.js` nous allons avoir accès à notre key en tant qu `process.env.REACT_APP_OPENWEATHER_API_KEY`

## Décomposer WeatherApp en plusieurs components

Voici la structure des fichiers

Notre compenent `Weather` devient

```javascript
/* src/components/WeatherApp.js */

import { useState, useEffect } from "react"
import Icon from "./Icon"
import Description from "./Description"
import Temperature from "./Temperature"
import Humidity from "./Humidity"

const Weather = ({ city }) => {
  const [conditions, setConditions] = useState({})
  const [description, setDescription] = useState("")
  const [iconID, setIconID] = useState("")
  const [location, setLocation] = useState("")

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric&lang=fr`
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("météo untrouvable")
        }
        return response.json()
      })
      .then((data) => {
        setLocation(`${data.name}, ${data.sys.country}`)
        setConditions({
          feelsLike: Math.round(data.main.feels_like),
          mainTemp: Math.round(data.main.temp),
          humidity: data.main.humidity
        })
        setDescription(data.weather[0].description)
        setIconID(data.weather[0].icon)
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [])
  return (
    <>
      {!!location && (
        <section className="text-center">
          <Icon iconID={iconID} />
          <h2 className="mb-4">Conditions météo à {location}</h2>
          <Description description={description} />
          <Temperature mainTemp={mainTemp} feelsLike={feelsLike} />
          <Humidity humidity={humidity} />
        </section>
      )}
    </>
  )
}

export default Weather
```

## Description

```javascript
/* src/components/Description.js */
const Description = ({ description }) => {
  return <p>{description}</p>
}

export default Description
```

## Temperature

```javascript
/* src/components/Temperature.js */
const Temperature = ({ mainTemp, feelsLike }) => {
  return (
    <p>
      <b>température</b> {mainTemp}&deg;C - ressentie {feelsLike}&deg;C
    </p>
  )
}

export default Temperature
```

## Icon

```javascript
/* src/components/Icon.js */
const Icon = ({ iconID }) => {
  return (
    !!iconID && (
      <img
        src={`https://openweathermap.org/img/wn/${iconID}@4x.png`}
        alt=""
        width="100"
        height="100"
      />
    )
  )
}

export default Icon
```

## Humidity

```javascript
/* src/components/Humidity.js */
const Humidity = ({ humidity }) => {
  return (
    <p>
      <b>humidité</b> {humidity}%
    </p>
  )
}

export default Humidity
```

## Et si on pouvait choisir la ville ?

```javascript
/* src/App.js */
import { useState } from "react"
import WeatherApp from "./components/Weather"
import CityForm from "./components/CityForm"

function App() {
  const [city, setCity] = useState("Paris")
  return (
    <div className="container my-4">
      <h1 className="display-3 text-center mb-4">Météo Actuelle</h1>
      <WeatheApp city={city} />
      <CityForm city={city} setCity={setCity} />
    </div>
  )
}

export default App
```

## CityForm Component

```javascript
/* src/components/CityForm.js */
const CityForm = ({ setCity }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault()
    setCity(e.target.elements.city.value)
    e.target.reset()
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="input-group mb-2">
        <label className="input-group-text" htmlFor="city">
          Choisissez une ville
        </label>
        <input className="form-control" id="city" required />
      </div>
    </form>
  )
}

export default CityForm
```

```js
/* src/components/WeatherApp.js */
useEffect(() => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric&lang=fr`
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("météo untrouvable")
      }
      return response.json()
    })
    .then((data) => {
      console.log(data)
      setLocation(`${data.name}, ${data.sys.country}`)
      setConditions({
        feelsLike: Math.round(data.main.feels_like),
        mainTemp: Math.round(data.main.temp),
        humidity: data.main.humidity
      })
      setDescription(data.weather[0].description)
      setIconID(data.weather[0].icon)
    })
    .catch((error) => {
      alert(error.message)
    })
}, [city])
```
