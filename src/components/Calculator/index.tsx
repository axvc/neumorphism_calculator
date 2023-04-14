import React from 'react';
import styled from 'styled-components';
import NumberButton from '@components/Buttons/NumberButton';
import { ButtonValue } from '@constants/ButtonValue';
import OperatorButton from '@components/Buttons/OperatorButton';
import SpecialButton from '@components/Buttons/SpecialButton';
import DisplayArea from '@components/DisplayArea';
import { Color } from '@constants/Color';
import useCalculatorLogic from '@hooks/useCalculatorLogic';

const CalculatorWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${Color.LIGHT_BACKGROUND};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 10px;
  padding: 0 20px;
  margin-bottom: 40px;
`;

const GridItem = styled.div<{ gridRow: string; gridColumn: string }>`
  grid-row: ${({ gridRow }) => gridRow};
  grid-column: ${({ gridColumn }) => gridColumn};
`;

const Calculator: React.FC = () => {
  const {
    value,
    handleDigit,
    handleOperator,
    handleDecimalPoint,
    handleEquals,
    handleClear,
    handlePercentage,
    handlePlusMinus,
  } = useCalculatorLogic();

  return (
    <CalculatorWrapper>
      <DisplayArea value={value} />
      <Grid>
        <GridItem gridRow="1 / 2" gridColumn="1 / 2">
          <SpecialButton onClick={handleClear}>{ButtonValue.C}</SpecialButton>
        </GridItem>
        <GridItem gridRow="1 / 2" gridColumn="2 / 3">
          <SpecialButton onClick={() => handlePercentage()}>
            {ButtonValue.Percent}
          </SpecialButton>
        </GridItem>
        <GridItem gridRow="1 / 2" gridColumn="3 / 4">
          <SpecialButton onClick={() => handlePlusMinus()}>
            {ButtonValue.PlusMinus}
          </SpecialButton>
        </GridItem>
        <GridItem gridRow="1 / 2" gridColumn="4 / 5">
          <OperatorButton onClick={() => handleOperator(ButtonValue.Divide)}>
            {ButtonValue.Divide}
          </OperatorButton>
        </GridItem>
        <GridItem gridRow="2 / 3" gridColumn="1 / 2">
          <NumberButton onClick={() => handleDigit(ButtonValue.Seven)}>
            {ButtonValue.Seven}
          </NumberButton>
        </GridItem>
        <GridItem gridRow="2 / 3" gridColumn="2 / 3">
          <NumberButton onClick={() => handleDigit(ButtonValue.Eight)}>
            {ButtonValue.Eight}
          </NumberButton>
        </GridItem>
        <GridItem gridRow="2 / 3" gridColumn="3 / 4">
          <NumberButton onClick={() => handleDigit(ButtonValue.Nine)}>
            {ButtonValue.Nine}
          </NumberButton>
        </GridItem>
        <GridItem gridRow="2 / 3" gridColumn="4 / 5">
          <OperatorButton onClick={() => handleOperator(ButtonValue.Multiply)}>
            {ButtonValue.Multiply}
          </OperatorButton>
        </GridItem>
        <GridItem gridRow="3 / 4" gridColumn="1 / 2">
          <NumberButton onClick={() => handleDigit(ButtonValue.Four)}>
            {ButtonValue.Four}
          </NumberButton>
        </GridItem>
        <GridItem gridRow="3 / 4" gridColumn="2 / 3">
          <NumberButton onClick={() => handleDigit(ButtonValue.Five)}>
            {ButtonValue.Five}
          </NumberButton>
        </GridItem>
        <GridItem gridRow="3 / 4" gridColumn="3 / 4">
          <NumberButton onClick={() => handleDigit(ButtonValue.Six)}>
            {ButtonValue.Six}
          </NumberButton>
        </GridItem>
        <GridItem gridRow="3 / 4" gridColumn="4 / 5">
          <OperatorButton onClick={() => handleOperator(ButtonValue.Subtract)}>
            {ButtonValue.Subtract}
          </OperatorButton>
        </GridItem>
        <GridItem gridRow="4 / 5" gridColumn="1 / 2">
          <NumberButton onClick={() => handleDigit(ButtonValue.One)}>
            {ButtonValue.One}
          </NumberButton>
        </GridItem>
        <GridItem gridRow="4 / 5" gridColumn="2 / 3">
          <NumberButton onClick={() => handleDigit(ButtonValue.Two)}>
            {ButtonValue.Two}
          </NumberButton>
        </GridItem>
        <GridItem gridRow="4 / 5" gridColumn="3 / 4">
          <NumberButton onClick={() => handleDigit(ButtonValue.Three)}>
            {ButtonValue.Three}
          </NumberButton>
        </GridItem>
        <GridItem gridRow="4 / 5" gridColumn="4 / 5">
          <OperatorButton onClick={() => handleOperator(ButtonValue.Add)}>
            {ButtonValue.Add}
          </OperatorButton>
        </GridItem>
        <GridItem gridRow="5 / 6" gridColumn="1 / 3">
          <NumberButton
            zeroButton={true}
            onClick={() => handleDigit(ButtonValue.Zero)}
          >
            {ButtonValue.Zero}
          </NumberButton>
        </GridItem>
        <GridItem gridRow="5 / 6" gridColumn="3 / 4">
          <NumberButton onClick={() => handleDecimalPoint()}>
            {ButtonValue.Decimal}
          </NumberButton>
        </GridItem>
        <GridItem gridRow="5 / 6" gridColumn="4 / 5">
          <OperatorButton onClick={() => handleEquals()}>
            {ButtonValue.Equal}
          </OperatorButton>
        </GridItem>
      </Grid>
    </CalculatorWrapper>
  );
};

export default Calculator;
