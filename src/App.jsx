import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import {
  Container,
  ContainerItems,
  ContainerInput,
  Input,
  Button,
  AddButton,
  ListItem,
  Check,
  Trash
} from "./styles";

function App() {
  const [list, setList] = useState([]); // Estado para montar a lista
  const [inputValue, setInputValue] = useState(""); // Estado com o valor digitado no input

  // Função que pega o valor do input
  function inputChange(event) {
    setInputValue(event.target.value);
  }

  // Função para adicionar nova tarefa
  function AddTask() {
    // Array com o objeto das novas tarefas
    // Spread operator vai esparramar tudo dentro do array e vai colocar um item abaixo do outro
    setList([...list, { id: uuid(), task: inputValue, finished: false }]);
  }

  // Função para marcar tarefa como concluida
  function finishedTask(id) {
    
    const newList = list.map( (item) => 
      item.id === id ? {...item, finished: !item.finished} : item
    )

    setList(newList)
  }

  // Função para remover tarefa
  function removeTask(id) {
    const newList = list.filter((item) => {
      if(item.id === id) return false

      return true
    })

    setList(newList)
  }

  return (
    <Container>
      <ContainerItems>
        <ContainerInput>
          <Input
            onChange={inputChange}
            type="text"
            placeholder="Adicionar uma nova tarefa"
          />
          <Button onClick={AddTask}>
            Criar
            <AddButton />
          </Button>
        </ContainerInput>

        <ul>
          {list.map((item) => (
            <ListItem key={item.id} ischecked={item.finished}>
              <Check onClick={() => finishedTask(item.id)} />
              <li>{item.task}</li>
              <Trash onClick={ () => removeTask(item.id) } />
            </ListItem>
          ))}
        </ul>
      </ContainerItems>
    </Container>
  );
}

export default App;
