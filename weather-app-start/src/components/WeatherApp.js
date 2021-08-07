import { useEffect, useState } from "react"
import Icon from "./Icon"
import Description from "./Description"
import Temperature from "./Temperature"
import Humidity from "./Humidity"

const WeatherApp = ({ city }) => {
  const [conditions, setConditions] = useState({})
  const [description, setDescription] = useState("")
  const [iconID, setIconID] = useState("")
  const [location, setLocation] = useState("")
  const { mainTemp, feelsLike, humidity } = conditions

  useEffect(() => {
    //Déclaration d'une API stocké dans un fichier "env.local", afin de ne pas mettre la KEY en Public dasn l'URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric&lang=fr`
    //On passe une fonction dans le useEffect, car sinon le compteur tournerait en boucle
    fetch(url)
      .then((response) => {
        // setApiCallsCount(apiCallsCount + 1)                   //Equivalent à setApiCallsCount(a => a + 1)
        console.log(response)
        if (!response.ok) {
          throw new Error("Météo untrouvable")
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
        setLocation(`${data.name}, ${data.sys.country}`)
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [city])

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

export default WeatherApp
