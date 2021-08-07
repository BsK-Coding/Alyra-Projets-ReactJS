const Login = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section>
      <h2 className="text-center">Log in</h2>
      <form className="row g-3 mt-3" onSubmit={handleFormSubmit}>
        <div className="col-auto">
          <label htmlFor="login" className="visually-hidden">
            Login
          </label>
          <input
            type="text"
            className="form-control"
            id="login"
            placeholder="login"
            required
          />
        </div>
        <div className="col-auto">
          <label htmlFor="password" className="visually-hidden">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Log in
          </button>
        </div>
      </form>
    </section>
  )
}

export default Login
