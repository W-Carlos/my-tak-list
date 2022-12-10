import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Logo from './assets/Logo.png'
import Icon from './assets/Clipboard.png'
import {
  Container,
  ContainerItems,
  ImageLogo,
  ContainerInput,
  Input,
  Button,
  AddButton,
  ListItem,
  Check,
  Trash,
  ContainerItemsEmpyt
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
    console.log(list)
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
      <ImageLogo src={Logo} alt="Logo"/>
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
          { list.length > 0 ? (
             list.map((item) => (
            <ListItem key={item.id} ischecked={item.finished}>
              <Check onClick={() => finishedTask(item.id)} />
              <li>{item.task}</li>
              <Trash onClick={ () => removeTask(item.id) } />
            </ListItem>
            ))
          ) : (
            <ContainerItemsEmpyt>
              <img src={Icon} alt="Icone de tarefa vazia" />
              <p className="paragraphBold">
                <b>Você ainda não tem tarefas cadastradas</b><br />
              </p>
              <p className="paragraphNormal">Crie tarefas e organize seus itens a fazer</p>
            </ContainerItemsEmpyt>
          )
        }
        </ul>
      </ContainerItems>
    </Container>
  );
}

export default App;
