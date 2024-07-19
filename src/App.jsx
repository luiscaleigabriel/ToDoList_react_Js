import { useState } from 'react'

function App() {
  const [task, setTask] = useState('')

  return (
   <div className="container">
    <div className="container_main">
      <input 
        type="text" 
        value={task}
        onChange={ (e) => setTask(e.target.value) }
        placeholder='Informe o nome da tarefa'
      />
    </div>
   </div>
  )
}

export default App
