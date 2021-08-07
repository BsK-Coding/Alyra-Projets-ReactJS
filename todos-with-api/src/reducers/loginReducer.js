export const loginReducer = (state, action) => {
  // ADD, DELETE, TOGGLE, FETCH_INIT, FETCH_SUCCESS, FETCH_FAILURE
  switch (action.type) {
    case "INIT":
      return {
        ...state,
        user: action.payload.user,
        password: action.payload.password,
        loading: true
      }

    case "ADD":
      return {
        ...state,
        registration: true,
        loading: false,
      }

    case "CHECK":
      let newObject = { ...state, error: "login: Wrong Username ! please register if you are new :)", loading: false, connected: false }
      action.payload.forEach(element => {
        if (element.user === state.user) {
          element.password === state.password ? newObject = { ...state, loading: false, connected: true, error: "" } : newObject = { ...state, error: "login: Wrong password !", loading: false, connected: false }
        }
      })
      return newObject

    case "FETCH_LOGIN_FAILURE":
      return {
        ...state,
        connected: false,
        error: action.payload,
        loadin: false
      }
    case "FETCH_REGISTRATION_FAILURE":
      let newObj = {}
      if (action.payload.user === "") {
        newObj = { ...state, errorReg: "Please put a userName", loading: false }
      } else {
        newObj = { ...state, errorReg: "Please put a password", loading: false }
      }
      return newObj

    default:
      throw new Error(`Unsupported action type ${action.type} in todosReducer`)
  }
}