import React, { useState, useEffect, useRef } from 'react'
import Setting from "./Setting"
import Display from "./Display"

const Main = () => {
  const [viewPolice, setViewPolice] = useState("popularity");
  const [text, setText] = useState("Portez ce vieux whisky au juge blond qui fume !? 0123456789");
  const [sizePolice, setSizePolice] = useState(20);
  const [policeList, setPoliceList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const cancelRef = useRef(null);
  const controllerRef = useRef(null);

  useEffect(() => {
    cancelRef.current = false
    controllerRef.current = new AbortController()

    return () => {
      cancelRef.current = true
      controllerRef.current.abort()
    }
  }, [])

  useEffect(() => {
    setLoading(true);

    //Ajout de notre key sous le format REACT_APP_"nom key"
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?sort=${viewPolice}&key=${process.env.REACT_APP_GOOGLEFONTS_API_KEY}`, {
      signal: controllerRef.current.signal
    })
      // fetch(`https://webfonts.googleapis.com/v1/webfonts?sort=${viewPolice}&key=${process.env.REACT_APP_GOOGLEFONTS_API_KEY}`, {
      //   signal: controllerRef.current.signal
      // })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Nous n'avons pas pu charger les polices, status : ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        if (!cancelRef.current) {
          setPoliceList(data.items)
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error.message)
        if (!cancelRef.current) {
          setError(error.message);
          setLoading(false);
        }
      });

  }, [viewPolice]);


  const changePolice = (event) => {
    setViewPolice(event.target.value)
  }

  const changeText = (event) => {
    setText(event.target.value)
  }

  const changeSizePolice = (event) => {
    setSizePolice(event.target.value)
  }

  return (
    <main className="container min-vh-100">
      <div className="row 5">
        <Setting changePolice={changePolice} viewPolice={viewPolice} changeText={changeText} text={text} changeSizePolice={changeSizePolice} sizePolice={sizePolice} />
        <Display viewPolice={viewPolice} policeList={policeList} text={text} sizePolice={sizePolice} loading={loading} error={error} />
      </div>
    </main >
  )
}

export default Main