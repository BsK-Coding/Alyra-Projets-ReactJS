import Todos from "./components/Todos"
import ColorModeContainer from "./components/ColorModeContainer"

function App() {
  return (
    <ColorModeContainer>
      <div className="container my-4">
        <h1 className="text-center">ToDos App</h1>
        <Todos />
      </div>
    </ColorModeContainer>
  )
}

export default App
