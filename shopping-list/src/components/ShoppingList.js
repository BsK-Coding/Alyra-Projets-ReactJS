// src/components/ShoppingList.js

import Product from "./Product"

const ShoppingList = (props) => {
  const { shopping, removeFromShoppingList, filter, setFilter } = props

  const handleInputChange = (event) => {
    setFilter(event.target.value)
  }

  const filteredList = shopping.filter(el =>
    el.trim().toLowerCase().startsWith(filter.trim().toLowerCase())
  )
  return (
    <>
      <h2 className="mb-3 h4">Produits à acheter ({shopping.length}):</h2>
      <div className="input-group mb-3">
        <span role="img" aria-label="search" className="input-group-text">
          🔎
        </span>
        <input
          type="search"
          value={filter}
          onChange={handleInputChange}
          placeholder="Rechercher dans votre liste des courses ..."
          aria-label="Chercher"
          className="form-control"
        />
      </div>
      {filter && (
        <p className="d-flex justify-content-between">
          <span>
            Produits qui commencent par <i>{filter}</i>
          </span>
          <button
            className="btn btn-light btn-sm"
            onClick={() => setFilter("")}
          >
            <span role="img" aria-hidden>
              🔄
            </span>
            Réinitialiser
          </button>
        </p>
      )}
      <ol className="list-group mb-3 shadow">
        {filteredList.map((el) => {
          return (
            <li className="list-group-item" key={el}>
              <Product
                product={el}
                removeFromShoppingList={removeFromShoppingList}
              />
            </li>
          )
        })}
      </ol>
    </>
  )
}

export default ShoppingList

/* Ancien version du code non modulable
const ShoppingList = (props) => {
  //const shopping = ["cumin", "curry"]
  const { shopping, removeFromShoppingList } = ["cumin", "curry"]
  return (
    <>
      <h2 className="mb-3 h4">Produits à acheter ({shopping.length}):</h2>
      <ul className="list-group mb-3 shadow">
        {shopping.map((product) => {
          return (
            <li className="list-group-item" key={product}>
              <Product
                product={product}
                removeFromShoppingList={removeFromShoppingList}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ShoppingList
*/