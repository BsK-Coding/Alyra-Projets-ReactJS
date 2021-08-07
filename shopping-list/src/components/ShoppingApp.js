// src/components/ShoppingApp.js

import { useState, useEffect } from "react"
import ShoppingList from "./ShoppingList"
import AddPopularProducts from "./AddPopularProducts"
import AddProductForm from "./AddProductForm"

const ShoppingApp = () => {
  const getInitialShopping = () => JSON.parse(window.localStorage.getItem("my-shopping-list")) || []

  const [shopping, setShopping] = useState(getInitialShopping)

  const [filter, setFilter] = useState("")

  const addToShoppingList = (product) => {
    setShopping([...shopping, product])
    setFilter("")
  }

  const removeFromShoppingList = (product) => {
    setShopping(shopping.filter(el => el !== product))
  }

  useEffect(() => {
    document.title = shopping.length ? `Vous avez ${shopping.length} produits à acheter` : "Préparez votre liste des course !"
  }, [shopping.length])

  useEffect(() => {
    window.localStorage.setItem("my-shopping-list", JSON.stringify(shopping))
  }, [shopping])

  return (
    <main className="row">
      <section className="col-lg-8">
        <ShoppingList shopping={shopping} removeFromShoppingList={removeFromShoppingList} filter={filter} setFilter={setFilter} />
      </section>
      <section className="col-lg-4">
        <div className="bg-light border p-4">
          <h2 className="mb-3 h4">Ajouter un produit :</h2>
          <AddProductForm
            shopping={shopping}
            addToShoppingList={addToShoppingList}
          />
          <AddPopularProducts
            shopping={shopping}
            addToShoppingList={addToShoppingList}
          />
        </div>
      </section>
    </main>
  )
}

export default ShoppingApp

//Pour les balises <.../>, (<ShoppingList />, <AddProductForm />, <AddPopularProducts />) ceux-ci se base sur les fichiers js dans components "import"