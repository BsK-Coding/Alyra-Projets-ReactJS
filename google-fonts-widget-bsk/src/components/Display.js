import React from 'react'
import Articles from './Articles'

const Display = ({ viewPolice, policeList, text, sizePolice, loading, error }) => {

  return (
    <div className="col-lg-9">
      <section className="row mb-5">
        <h2 className="mb-3">
          <span className="badge bg-danger" style={{ color: "white" }}>{viewPolice}</span>
        </h2>
        {loading && <p className="text-center">loading...</p>}
        {error && <p className="px-2 text-center alert alert-danger">{error}</p>}
        {
          policeList.slice(0, 10).map((elem) => {
            return (
              <Articles key={elem.family}                             //Key utilisé pour sélectionner les elements "map" dans le fichier JSON fonts de google
                text={text}                                   //Text renseigné dans Setting.js
                sizePolice={sizePolice}                       //sizePolice choisit dans Setting.js
                policeFamily={elem.family}                    //Nom de la Police dans le JSON fonts de google
                policeVariant={elem.variants.length}          //Nombre de variant de cette police dans le JSON fonts de google
                policeCategory={elem.category}                //Nom de la category "sans-serif, etc..." dans le JSON fonts de google
              />
            )
          }
          )
        }
      </section>
    </div >
  )
}

export default Display