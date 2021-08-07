import {createContext, useContext, useReducer, useEffect, useState} from "react"
import {gradReducer} from "../reducers/gradReducer"

export const GradientsContext = createContext()

function allTags(list) {
  
  let listTotal = []
  for (let element of list) {
    if ("tags" in element) {
      listTotal = listTotal.concat(element.tags)
    }
  }
  const listTagsUnique = []
  listTotal.forEach((el) => {
    if (!listTagsUnique.includes(el)) {
      
      listTagsUnique.push(el)
    }
  })
  return listTagsUnique
}

export const GradientsContextProvider = ({children}) => {
  const [state, gradientsDispatch] = useReducer(gradReducer, {
    loading: true,
    error: "",
    gradients: []
  })

  const {loading, error, gradients} = state
  const [uniqueTags, setUniqueTags] = useState([])

  const URL = 'https://gradients-api.herokuapp.com/gradients'

  useEffect(()=>{
  
  gradientsDispatch({type: "FETCH_INIT"})
  fetch(URL)
  .then((response) => {
        console.log("don't forget me here!!!");
        return new Promise((resolved) => {
          setTimeout(() => resolved(response), 800);
        });
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `something wrong with request : ${response.status}`
          );
        }
        return response.json();
      })
  .then(data => {
   
    gradientsDispatch({type: "FETCH_SUCCESS", payload: data})
  })
  .catch(e=> {
   
    console.log(e.message)
    gradientsDispatch({type: "FETCH_FAILURE", payload: e.message})
  })
},[])

  useEffect(() => {
    setUniqueTags(allTags(gradients))
  }, [gradients])
  
  return (
    <GradientsContext.Provider value={{loading, error, gradients, gradientsDispatch, uniqueTags}}>
      {children}
    </GradientsContext.Provider>
  )
}

export const useGradients = () => {
  const context = useContext(GradientsContext)
  if (context === undefined) {
    throw new Error('You should use useUser only within the GradientsContext.Provider')
  }
  return context
}