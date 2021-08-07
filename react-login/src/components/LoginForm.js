import React from "react"

const LoginForm = () => {
  return (
    <form action="/login" method="POST" className="mt-4">
      <div className="input-group mb-2">
        <label className="input-group-text" htmlFor="username">
          username
        </label>
        <input
          className="form-control"
          id="username"
          name="username"
          required
        />
      </div>
      <div className="input-group mb-2">
        <label className="input-group-text" htmlFor="password">
          password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          required
        />
      </div>
      <button
        name="button"
        value="buttonId"
        type="submit"
        className="btn btn-light"
      >
        submit
      </button>
    </form>
  )
}

export default LoginForm
