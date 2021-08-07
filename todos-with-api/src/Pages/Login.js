import React, { useReducer } from "react"
import { loginReducer } from "../reducers/loginReducer"
import { useIsMounted } from "../hooks/useIsMounted"

const login = {
  user: "",
  password: "",
  loading: false,
  connected: false,
  error: "",
  registration: false,
  errorReg: ""
}

const Login = () => {
  const [state, dispatch] = useReducer(loginReducer, login)
  const { registration, errorReg, loading, connected, error } = state
  const isMounted = useIsMounted()

  const handleLoginButton = (event) => {
    event.preventDefault()
    dispatch({ type: "INIT", payload: { user: event.target.elements.name.value, password: event.target.elements.password.value } })
    fetch(`http://${process.env.REACT_APP_API_URL}/login`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Something went wrong ${response.statusText}`)
        }
        return response.json()
      })
      .then((result) => {
        console.log(result)
        if (isMounted.current) {
          dispatch({ type: "CHECK", payload: result })
        }
      })
      .catch((error) => {
        if (isMounted.current) {
          dispatch({ type: "FETCH_LOGIN_FAILURE", payload: error.message })
        }
      })
  }

  const handleRegisterButton = (event) => {
    event.preventDefault()
    const user = event.target.elements.username.value
    const password = event.target.elements.regpassword.value
    if (user !== "" && password !== "") {
      fetch(`http://${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: user,
          password: password,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Something went wrong ${response.statusText}`)
          }
          return response.json()
        })
        .then((result) => {
          if (isMounted.current) {
            dispatch({ type: "ADD", payload: result })
          }
        })
        .catch((error) => {
          if (isMounted.current) {
            dispatch({ type: "FETCH_REGISTRATION_FAILURE", payload: error.message })
          }
        })
    } else {
      dispatch({ type: "FETCH_REGISTRATION_FAILURE", payload: { user: user, password: password } })
    }
  }


  return (<>
    <div className="container my-4">
      <h1 className="text-center">Login</h1>
      {error && <p className="alert alert-danger">{error}</p>}
      {connected && <div class="alert alert-success" role="alert">Success !</div>}
      <form onSubmit={handleLoginButton}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">UserName</label>
          <input className="form-control" id="name" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button id="login" type="submit" className="btn btn-primary">{loading ? <p>Loading....</p> : "Login"}</button>
      </form>
    </div>

    <div className="container my-4">
      <h1 className="text-center">Registration</h1>
      {errorReg && <p className="alert alert-danger">{errorReg}</p>}
      {registration && <div class="alert alert-success" role="alert">Welcome abroad !</div>}
      <form onSubmit={handleRegisterButton}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">UserName</label>
          <input className="form-control" id="username" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="regpassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="regpassword" />
        </div>
        <button id="register" type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  </>
  )
}

export default Login