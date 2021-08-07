export const gradReducer = (state, action) => {
  
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
        error: "",
      }
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        error: "",
        gradients: action.payload,
      }
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
            error: action.payload,
        }
    default:
      throw new Error(`Unsupported action type ${action.type} in gradientsReducer`)
  }
}
