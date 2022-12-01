import styled from "styled-components";

export const Container = styled.div`
  padding: 5px 5px;
  align-items: center;
  justify-content: center;
  display: grid;

`;

 export const Title = styled.h1`
  font-size: 20px;
  color: #808080;
  text-align: center;
  display: block;
`;

export const Paragraph = styled.p`
  text-align: center;
  font-size: 15px;
  color: #808080;
  display: block;
`;

export const Card = styled.div`
  max-width: 200px;
  max-height: 100px;
  min-width: 50px;
  min-height: 60px;
  background-color: grey;
  font-size: 16px;
  border-radius: 10px;
`;

export const CardTitle = styled.h2`
  display: block;
  top: 5px;
  text-align: center;

`;

export const Row = styled.div`
  margin: 0 auto;
  display: block;
  justify-content: center;
  align-items: center:
`;

export const Spacing = styled.div`
  min-height: 200px;
`;