import styled from "styled-components";
import { FiPlusCircle, FiCheck, FiTrash2 } from "react-icons/fi";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #454545;
`;

export const ContainerItems = styled.div``;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 6.4rem;
`;

export const Input = styled.input`
  width: 638px;
  height: 54px;
  padding-left: 1.6rem;

  background: #262626;

  border: 1px solid #0d0d0d;
  border-radius: 0.8rem;

  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 140%;

  color: #808080;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 0.8rem;

  width: 9rem;
  height: 5.2rem;
  margin-left: 0.8rem;

  background: #1e6f9f;
  border-radius: 0.8rem;

  border: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 140%;

  color: #f2f2f2;
`;

export const AddButton = styled(FiPlusCircle)`
  width: 1.6rem;
  height: 1.6rem;
`;

export const ListItem = styled.div`
  width: 73.6rem;
  height: 7.2rem;
  padding: 0 1.6rem;
  margin-bottom: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  background: #262626;

  border: 1px solid #333333;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;

  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 140%;
  text-decoration: ${props => props.ischecked ? 'line-through' : 'none'};

  color:${props => props.ischecked ? '#808080' : '#f2f2f2'};
  
  
`;

export const Check = styled(FiCheck)`
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
    color: #1e6f9f;
`;

export const Trash = styled(FiTrash2)`
    width: 2.1rem;
    height: 2.1rem;
    cursor: pointer;
    color: #f2f2f2;
`;
