import React from "react";
import styled from "styled-components";

const Conteudo = styled.div`
  width: 450px;
`;

const Carrousel = styled.div`
  display: grid;
  grid-auto-flow: column;
  scroll-behavior: auto;
  gap: 1.2rem;
  overflow-y: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.article`
  scroll-snap-align: start;
  border-radius: 30px;
  min-height: 200px;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-child(odd) {
    background: #578E88;
  }

  &:nth-child(even) {
    background: #578E88;
  }
`;

const Carousel = () => {
  return (
    <Conteudo>
      <Carrousel>
        <Card>
        </Card>
        <Card>
        </Card>
        <Card>
        </Card>
        <Card>
        </Card>
        <Card>
        </Card>
      </Carrousel>
    </Conteudo>
  );
};

export default Carousel;
