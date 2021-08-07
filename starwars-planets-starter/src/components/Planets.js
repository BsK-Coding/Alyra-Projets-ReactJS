import { useState, useEffect, useRef } from "react"
import Planet from "./Planet"

const Planets = () => {
  const [planets, setPlanets] = useState([]);    //useState([]) => cela permettra d'avoir un tableau d'objets
  //Déclaration du loading
  const [loading, setLoading] = useState(false);
  //Déclaration des erreurs
  const [erreur, setError] = useState("");
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(null);
  const cancelRef = useRef(null)
  const controllerRef = useRef(null)
  // const controllerRef = useRef < AbortController | null > ("");


  /* useEffect specialement pour gérer le bouton "Activer" */
  //Utilisation de useRef pour utiliser notre isCancelled dans les 2 useEffect
  useEffect(() => {
    cancelRef.current = false
    controllerRef.current = new AbortController()
    // mounts
    console.log("I mounted")
    return () => {
      //unmounts
      console.log("I unmount")
      cancelRef.current = true
      controllerRef.current.abort()
    }
  }, [])

  useEffect(() => {
    //Affichage dans la consol de l'inspecteur du navigateur
    console.log("useEffect Start with", page)
    //Affichage dans la consol de l'inspecteur du navigateur
    console.log("isCancelRef.current")

    /*let isCancelled = false
const controller = new AbortController()
  
  //signal: controller.signal
}) */

    //Activer le loading
    setLoading(true);
    //Initialisation du changement useState de "erreur"
    setError("");
    //On met la variable "page"
    fetch(`https://swapi.dev/api/planets/?page=${page}`, {
      signal: controllerRef.current?.signal

      /* TEST DU LOADING */
      // ⚠️ surtout NE PAS OUBLIER d'ENLEVER Retarde Chargement ⚠️
      /*.then((response) => {
      console.log("don't forget me here!!!")
      return new Promise((resolved) => {
        setTimeout(() => resolved(response), 2000);
      });*/
    })

      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Nous n'avons pas pu lire le registre des planètes, status : ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log("I go data")
        console.log(data);
        //condition IF pour savoir si le components est activer ou pas (bouton activer)
        if (!cancelRef.current) {
          console.log("I will run setPlanets");
          //on pourrait également écrire setHasNext(data.next ? true : false)
          //Passage en boolean "!!"
          setHasNext(!!data.next)
          //Remplacement setPlanets(data.results); pour avoir les infos des planets
          setPlanets((p) => [...p, ...data.results]);
          //Désactivation du loading
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error.message)
        if (!cancelRef.current) {
          setError(error.message);
          setLoading(false);           //Désactivation du loading
        }
      });
    return () => {
      /*console.log("clean up")
      console.log("I want to cancel")
      isCancelled = true
      controller.abort()*/
    }
  }, [page]);                         //Ajout de "page" entre crochet, car demandé dans notre fetch en ligne 17

  return (
    <>
      <div className="row">
        {planets.map((planet) => {
          return <Planet key={planet.name} planet={planet} />
        })}
      </div>
      {/* Message de loading */}
      {loading && <p className="text-center">loading...</p>}
      {/* Message d'erreur */}
      {erreur && <p className="alert alert-danger">{erreur}</p>}
      {/* Intialisation du button */}
      {hasNext && (
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => {
            setPage(page + 1);
          }}
          disabled={loading}
        >
          Suivantes
        </button>
      )}

      {hasNext === false && (
        <p className="bg-dark text-white p-3">
          Nous avons listé toutes les planètes recensées.
        </p>
      )}
    </>
  )
}

export default Planets