import React, { useState } from "react"
import { v4 as uuid } from 'uuid';

function App() {
  const [ list, setList ] = useState([])
  const [ inputValue, setInputValue ] = useState('')

  // Função com o valor do input
  function inputChange(event) {
    setInputValue(event.target.value)
  }

  // Função para adicionar nova tarefa
  function AddTask() {
    setList([...list, { id: uuid(), task: inputValue }])
  }

  return (
    <div>
      <input onChange={inputChange} type="text" placeholder="Adicionar uma nova tarefa" />
      <button onClick={AddTask}>Criar</button>

      <ul>
        {
          list.map( item => (
            <li key={item.id}>{item.task}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
