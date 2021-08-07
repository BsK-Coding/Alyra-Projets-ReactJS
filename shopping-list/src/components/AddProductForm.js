// src/components/AddProductForm.js

const AddProductForm = (props) => {
  const { shopping, addToShoppingList } = props


  const handleFromSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.elements.product.value)
    const newProduct = event.target.elements.product.value
    if (!shopping.includes(newProduct)) {
      addToShoppingList(newProduct)
    } else {
      alert("produit déja sur la liste")
    }

  }
  return (
    <form class="mb-5" onSubmit={handleFromSubmit}>
      <div className="input-group mb-2">
        <input
          id="product"
          class="form-control"
          aria-label="Ajouter sur la liste"
          required
        /><button type="submit" class="btn btn-success btn-lg">
          J'ajoute !
            </button>
      </div>
    </form>
  )
}

export default AddProductForm