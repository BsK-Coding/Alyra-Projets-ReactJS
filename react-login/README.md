# Express + react front-end - exemple

## login (express)

1. installer les dependencies
1. remplacer `LOCAL_IP` (dans `login`)
1. démarrer le serveur

## login-react (react-app)

1. installer les dependencies
1. créer un component `Dashboard`

```javascript
import React from "react"

const Dashboard = ({ user }) => {
  return <p>Welcome, {user} 🎉</p>
}

export default Dashboard
```

3. modifier `src/App.js`

```javascript
import React from "react"
import LoginForm from "./components/LoginForm.js"
import Dashboard from "./components/Dashboard.js"

function App() {
  return (
    <div className="container my-4">
      <h1 className="display-3 text-center mb-4">Authentification</h1>
      <LoginForm />
      <Dashboard />
      <button type="button" className="btn btn-danger">
        Log out
      </button>
    </div>
  )
}

export default App
```

4. Tous les components ne devraient pas être rendus sur la page en même temps, nous devons aussi passer `username` dans le component `Dashboard`

```javascript
import React, { useState } from "react"
import LoginForm from "./components/LoginForm.js"
import Dashboard from "./components/Dashboard.js"

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  return (
    <div className="container my-4">
      <h1 className="display-3 text-center mb-4">Authentification</h1>
      {!loggedIn && (
        <LoginForm setUsername={setUsername} setLoggedIn={setLoggedIn} />
      )}
      {loggedIn && (
        <>
          <Dashboard user={username} />
          <button className="btn btn-danger" onClick={handleLogoutClick}>
            Log out
          </button>
        </>
      )}
    </div>
  )
}
```

5. Dans `src/components/LoginForm.js`

```javascript
import React from "react"

const LoginForm = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault()
    fetch("http://192.168.1.70:7777/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .catch((error) => console.error(error))
  }
  return (
    <form onSubmit={handleFormSubmit} className="mt-4">
      {/* ... */}
    </form>
  )
}
```

## login (express)

1.  ### CORS (Cross Origin Ressource Sharing)

Nous devons ajouter middleware:

```javascript
// login/src/app.js
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Content-Type")
  next()
})
```

2. Nous allons remplacer `res.send(string)` par `res.send(object)` (`res.json(object)` fonctionne aussi)

```javascript
// src/app.js
// avant (x2) res.send('Username or password invalid')
res.send({ valid: false })
// avant res.send(`Welcome to your dashboard ${username}`)
res.send({ valid: true, username })
```

## login-react (react-app)

1. Nous allons completer `handleFormSubmit` dans `src/components/LoginForm.js`

```javascript
//

const handleFormSubmit = (e) => {
  e.preventDefault()
  const username = e.target.elements.username.value
  const password = e.target.elements.password.value
  e.target.reset()
  fetch("http://192.168.1.70:7777/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((data) => {
      if (data.valid) {
        setLoggedIn(true)
        setUsername(data.username)
      } else {
        alert("Your credentials are not valid, try again ;)")
      }
    })
    .catch((error) => console.error(error))
}
```

2. Finallemend dans `src/App.js` nous allons ajouter handler pour le bouton

```javascript
import React, { useState } from "react"
import LoginForm from "./components/LoginForm.js"
import Dashboard from "./components/Dashboard"

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  const handleLogoutClick = () => {
    setUsername("")
    setLoggedIn(false)
  }
  return (
    <div className="container my-4">
      <h1 className="display-3 text-center mb-4">Authentification</h1>
      {/* ... */}
      {loggedIn && (
        <>
          <Dashboard user={username} />
          <button className="btn btn-danger" onClick={handleLogoutClick}>
            Log out
          </button>
        </>
      )}
    </div>
  )
}

export default App
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
