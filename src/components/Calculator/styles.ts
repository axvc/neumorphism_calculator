import styled from 'styled-components';

export const CalculatorWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 10px;
  padding: 0 20px;
  margin-bottom: 40px;
`;

export const GridItem = styled.div<{ gridRow: string; gridColumn: string }>`
  grid-row: ${({ gridRow }) => gridRow};
  grid-column: ${({ gridColumn }) => gridColumn};
  transition: transform 0.5s linear;
  &:active {
    transform: translateY(12px);
  }
`;
