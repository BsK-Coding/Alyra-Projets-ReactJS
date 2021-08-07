# Star Wars API
[Voir le site 🖖](https://starwars-api-v1.netlify.app/)  
Par defaut le site fonctionne avec le `useReducer`

## Utilisation des hooks React 
A l'aide de l'article de [Robin Wieruch](https://www.robinwieruch.de/react-hooks-fetch-data)

## Step 1
Utilisation de `useEffect` dans le components `StarWarsApp`  

```js
 // variable d'état
  const [planetsList, setplanetsList] = useState([])
  const [isLoadding, setIsLoadding] = useState(false)
  const [isError, setIsError] = useState(false)

  // fetch data
  useEffect(() => {
    const fetchData = async () => {
      setIsLoadding(true)
      setIsError(false)
      try {
        let data = await axios(url)
        setIsLoadding(false)
        // agrandir la liste
        for (let elem of data.data.results) {
          planetsList.push(elem)
        }
        // modification des variables d'état
        setplanetsList(() => planetsList)
        setNextUrl(() => data.data.next)
      } catch {
        setIsError(true)
      }
      setIsLoadding(false)
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])
```
On peut noter la gestion des erreurs ainsi que l'affichage du chargement :  
```js
  // Après le return :
      {isError && <h2 className="infos">Oups... Il y a eu une erreur</h2>}

      {isLoadding ? <h2 className="infos">Chargement...</h2> : ''}

```
Pour voir le code complet => [App.js](https://github.com/RaphaelHardFork/starwars-api-v1/blob/main/src/App.js) & [StarWarsApp.js](https://github.com/RaphaelHardFork/starwars-api-v1/blob/main/src/components/StarWarsApp.js)  
Pour voir si le code fonctionne, remplacer **ligne 4** le chemin à `'./App'` dans `index.js`
## Step 2 
**Utilisation d'un hook personnalisé (custom hook)**  
Pour simplifié le code tout est rassemblé dans `App.js`. Le Hook peut donc être importer depuis un autre fichier pour avoir un code plus modulaire.  
**ATTENTION:** un Custom Hook doit commencer par `use` suivi d'une majuscule : `useYourCustomHook`   
Ecriture du Hook : 
```js
// Custom Hook
const useDataFetcher = () => {
  const [url, setUrl] = useState('https://swapi.dev/api/planets/')
  const [nextUrl, setNextUrl] = useState('')
  const [isLoadding, setIsLoadding] = useState(false)
  const [isError, setIsError] = useState(false)
  const [planetsList, setplanetsList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoadding(true)
      setIsError(false)
      try {
        let data = await axios(url)
        setIsLoadding(false)
        // agrandir la liste
        for (let elem of data.data.results) {
          planetsList.push(elem)
        }
        // modification des variables d'état
        setplanetsList(() => planetsList)
        setNextUrl(() => data.data.next)
      } catch {
        setIsError(true)
      }
      setIsLoadding(false)
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])
  return [{ nextUrl, planetsList, isLoadding, isError }, setUrl]
}
```
Importation du Hook dans notre `App`:  
```js
  const [{ nextUrl, planetsList, isLoadding, isError }, doFetch] = useDataFetcher()
```
Et enfin utilisation / appelle de notre Hook :  
```js
  // Fonction bouton Plus
  const handleButtonMore = () => {
    doFetch(nextUrl)
  }
```
Pour voir le code complet => [AppNext.js](https://github.com/RaphaelHardFork/starwars-api-v1/blob/main/src/AppNext.js)  
Pour voir si le code fonctionne, remplacer **ligne 4** le chemin à `'./AppNext'` dans `index.js`

## Step 3 Utilisation de useReducer
Le `useReducer` se définit dans un custom hook. Il est composé d'un objet d'état `state` (comprenant des variables d'état) et d'une fonction `dispatch` pour altérer l'objet  :  
```js
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoadding: false,
    isError: false,
    nextUrl: '',
    planetsList: []
  })
```
La fonction `dataFetchReducer` est définit en dehors du custom hook et exécute les modifications que l'on veut faire à notre objet `state` :  
```js
const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoadding: true,
        isError: false
      }
    case 'FETCH_SUCCESS':
      let list = []
      for (let elem of action.myData) {
        list.push(elem)
      }
      for (let elem of action.payload.results) {
        list.push(elem)
      }
      return { ...state, isLoadding: false, planetsList: list, nextUrl: action.payload.next }
    case 'FETCH_FAILURE':
      return { ...state, isError: true }
    case 'FETCH_END':
      return { ...state, isLoadding: false }
    default:
      throw new Error()
  }
}
```
On voit que dans cette fonction plusieurs actions sont possibles, on fait appel à celle-ci à l'intérieur de notre `useEffect` (toujours à l'intérieur de notre custom hook) :  
```js
useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' })
      try {
        let data = await axios(url)
        dispatch({ type: 'FETCH_SUCCESS', payload: data.data, myData: state.planetsList })
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE' })
      }
      dispatch({ type: 'FETCH_END' })
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])
```
Ainsi dans notre component App on peut initie les variables et objets d'état comme ceci : 
```js
  const [state, doFetch] = useDataFetcherReducer()
  const { nextUrl, planetsList, isLoadding, isError } = state
  // Fonction bouton Plus
  const handleButtonMore = () => {
    doFetch(nextUrl)
  }
```
Pour voir le code complet => [AppReducer.js](https://github.com/RaphaelHardFork/starwars-api-v1/blob/main/src/AppReducer.js)
