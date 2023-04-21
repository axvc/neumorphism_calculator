import React from 'react';
import styled, { useTheme } from 'styled-components';
import NumberButton from '@components/Buttons/NumberButton';
import { ButtonValue } from '@constants/ButtonValue';
import OperatorButton from '@components/Buttons/OperatorButton';
import SpecialButton from '@components/Buttons/SpecialButton';
import DisplayArea from '@components/DisplayArea';
import useCalculatorLogic from '@hooks/useCalculatorLogic';

import { ReactComponent as AddLight } from '@assets/light/add.svg';
import { ReactComponent as SubtractLight } from '@assets/light/subtract.svg';
import { ReactComponent as MultiplyLight } from '@assets/light/multiply.svg';
import { ReactComponent as DivideLight } from '@assets/light/divide.svg';
import { ReactComponent as PlusMinusLight } from '@assets/light/plus-minus.svg';
import { ReactComponent as EqualsLight } from '@assets/light/equals.svg';

import { ReactComponent as AddDark } from '@assets/dark/add.svg';
import { ReactComponent as SubtractDark } from '@assets/dark/subtract.svg';
import { ReactComponent as MultiplyDark } from '@assets/dark/multiply.svg';
import { ReactComponent as DivideDark } from '@assets/dark/divide.svg';
import { ReactComponent as PlusMinusDark } from '@assets/dark/plus-minus.svg';
import { ReactComponent as EqualsDark } from '@assets/dark/equals.svg';

import { ITheme, Theme } from '@constants/Color';

const CalculatorWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.background};
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
  transition: transform 0.5s linear;
  &:active {
    transform: translateY(12px);
  }
`;

const Calculator: React.FC = () => {
  const theme = useTheme();
  const {
    value,
    history,
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
      <DisplayArea value={value} history={history} />
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
            {theme === Theme.LIGHT ? <PlusMinusLight /> : <PlusMinusDark />}
          </SpecialButton>
        </GridItem>
        <GridItem gridRow="1 / 2" gridColumn="4 / 5">
          <OperatorButton onClick={() => handleOperator(ButtonValue.Divide)}>
            {theme === Theme.LIGHT ? <DivideLight /> : <DivideDark />}
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
            {theme === Theme.LIGHT ? <MultiplyLight /> : <MultiplyDark />}
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
            {theme === Theme.LIGHT ? <SubtractLight /> : <SubtractDark />}
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
            {(theme as ITheme).VALUE === Theme.LIGHT ? (
              <AddLight />
            ) : (
              <AddDark />
            )}
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
            {(theme as ITheme).VALUE === Theme.LIGHT ? (
              <EqualsLight />
            ) : (
              <EqualsDark />
            )}
          </OperatorButton>
        </GridItem>
      </Grid>
    </CalculatorWrapper>
  );
};

export default Calculator;
