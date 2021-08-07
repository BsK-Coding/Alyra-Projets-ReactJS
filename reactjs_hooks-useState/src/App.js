import React from 'react'
import ClassState from './components/ClassState'
import FunctionState from './components/FunctionState'
import Todo from './components/Todo'

function App() {
  return (
    <div>
      <h1 className="text-center">useState hooks</h1>
      <ClassState />
      <hr />
      <FunctionState />
      <hr />
      <Todo />
    </div>
  );
}

export default App