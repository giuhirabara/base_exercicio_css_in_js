import styled from 'styled-components'

type Props = {
  titulo: string;
  localizacao: string;
  nivel: string;
  modalidade: string;
  salarioMin: number;
  salarioMax: number;
  requisitos: string[];
};

const VagaContainer = styled.li`
  border: 1px solid #a7727d;
  background-color: #f9f5e7;
  color: #a7727d;
  padding: 16px;
  transition: all ease .3s;
  border-radius: 8px;

  &:hover {
    background-color: #a7727d;
    color: #f9f5e7;
  }
`;

const VagaTitulo = styled.h3`
  font-weight: bold;
`;

const VagaInfo = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const VagaInfoItem = styled.li`
  margin-bottom: 8px;
`;

const VagaLink = styled.a`
  border-color: #f9f5e7;
  background-color: #a7727d;
  color: #f9f5e7;
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    border-color: #a7727d;
    background-color: #f9f5e7;
    color: #a7727d;
  }
`;

const Vaga = (props: Props) => (
  <VagaContainer>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <VagaInfo>
      <VagaInfoItem>Localizacao: {props.localizacao}</VagaInfoItem>
      <VagaInfoItem>Senioridade: {props.nivel}</VagaInfoItem>
      <VagaInfoItem>Tipo de contratacao: {props.modalidade}</VagaInfoItem>
      <VagaInfoItem>
        Salário: {props.salarioMin} - {props.salarioMax}
      </VagaInfoItem>
      <VagaInfoItem>Requisitos: {props.requisitos.join(', ')}</VagaInfoItem>
    </VagaInfo>
    <VagaLink href="#">
      Ver detalhes e candidatar-se
    </VagaLink>
  </VagaContainer>
);

export default Vaga