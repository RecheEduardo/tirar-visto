import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold">
        Tirar Visto!
      </h1>
      <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
        onClick={()=> setCount(count + 1)}
      >
        {count}
      </button>
    </>
  )
}

export default App
