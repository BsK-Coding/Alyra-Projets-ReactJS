import React from 'react'
import Todos from "./components/Todos"
import DarkMode from "./components/DarkMode"

/* BOUTON EN OPTION */
function App() {

  return (
    <DarkMode>
      <div className="container">
        <h1 className="text-center">ToDos App</h1>
        <Todos />
      </div>
    </DarkMode>
  )
}

export default App

/* BOUTON EN DUR */

// function App() {
//   //Ajout de l'intéraction avec le bouton Mode Dark/Light
//   const [darkMode, setDarkMode] = React.useState(true);
//   const handleButtonClick = () => {
//     setDarkMode(!darkMode);
//   };
//   const modeClasses = darkMode ? "bg-dark text-white" : "bg-light";

//   return (
//     <body className={modeClasses}>
//       <div className="container min-vh-100">
//         {/* Ajout du bouton Mode Dark/Light */}
//         < button type="button" onClick={handleButtonClick} className="btn btn-light mb-2" >
//           Mode Dark/Light
//         </button >
//         <h1 className="text-center">ToDos App</h1>
//         <Todos />
//       </div>
//     </body >
//   )
// }

// export default App