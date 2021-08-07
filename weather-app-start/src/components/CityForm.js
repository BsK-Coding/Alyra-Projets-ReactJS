const CityForm = ({ setCity, darkMode }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault()
    setCity(e.target.elements.city.value)
    e.target.reset()
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="input-group mb-2">
        <label className={`input-group-text ${darkMode ? 'dark-theme' : ''}`} htmlFor="city">
          Choisissez une ville
        </label>
        <input className={`form-control ${darkMode ? 'dark-theme' : ''}`} id="city" required />
      </div>
    </form>
  )
}

export default CityForm
