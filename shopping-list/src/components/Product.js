// src/components/Product.js

const Product = (props) => {
  const { product, removeFromShoppingList } = props
  const handleButtonClick = () => {
    removeFromShoppingList(product)
  }
  return (
    <div className="d-flex align-items-center justify-content-between">
      {product}
      <button className="btn btn-sm btn-warning" onClick={handleButtonClick}>
        <span role="img" aria-hidden>
          ✖️
        </span>{" "}
        ok
      </button>
    </div>
  )
}

export default Product