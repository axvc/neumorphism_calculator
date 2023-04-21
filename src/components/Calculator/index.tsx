import React from 'react';
import { useTheme } from 'styled-components';
import * as ST from './styles';
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
    <ST.CalculatorWrapper>
      <DisplayArea value={value} history={history} />
      <ST.Grid>
        <ST.GridItem gridRow="1 / 2" gridColumn="1 / 2">
          <SpecialButton onClick={handleClear}>{ButtonValue.C}</SpecialButton>
        </ST.GridItem>
        <ST.GridItem gridRow="1 / 2" gridColumn="2 / 3">
          <SpecialButton onClick={handlePercentage}>
            {ButtonValue.Percent}
          </SpecialButton>
        </ST.GridItem>
        <ST.GridItem gridRow="1 / 2" gridColumn="3 / 4">
          <SpecialButton onClick={handlePlusMinus}>
            {theme === Theme.LIGHT ? <PlusMinusLight /> : <PlusMinusDark />}
          </SpecialButton>
        </ST.GridItem>
        <ST.GridItem gridRow="1 / 2" gridColumn="4 / 5">
          <OperatorButton onClick={() => handleOperator(ButtonValue.Divide)}>
            {theme === Theme.LIGHT ? <DivideLight /> : <DivideDark />}
          </OperatorButton>
        </ST.GridItem>
        <ST.GridItem gridRow="2 / 3" gridColumn="1 / 2">
          <NumberButton onClick={() => handleDigit(ButtonValue.Seven)}>
            {ButtonValue.Seven}
          </NumberButton>
        </ST.GridItem>
        <ST.GridItem gridRow="2 / 3" gridColumn="2 / 3">
          <NumberButton onClick={() => handleDigit(ButtonValue.Eight)}>
            {ButtonValue.Eight}
          </NumberButton>
        </ST.GridItem>
        <ST.GridItem gridRow="2 / 3" gridColumn="3 / 4">
          <NumberButton onClick={() => handleDigit(ButtonValue.Nine)}>
            {ButtonValue.Nine}
          </NumberButton>
        </ST.GridItem>
        <ST.GridItem gridRow="2 / 3" gridColumn="4 / 5">
          <OperatorButton onClick={() => handleOperator(ButtonValue.Multiply)}>
            {theme === Theme.LIGHT ? <MultiplyLight /> : <MultiplyDark />}
          </OperatorButton>
        </ST.GridItem>
        <ST.GridItem gridRow="3 / 4" gridColumn="1 / 2">
          <NumberButton onClick={() => handleDigit(ButtonValue.Four)}>
            {ButtonValue.Four}
          </NumberButton>
        </ST.GridItem>
        <ST.GridItem gridRow="3 / 4" gridColumn="2 / 3">
          <NumberButton onClick={() => handleDigit(ButtonValue.Five)}>
            {ButtonValue.Five}
          </NumberButton>
        </ST.GridItem>
        <ST.GridItem gridRow="3 / 4" gridColumn="3 / 4">
          <NumberButton onClick={() => handleDigit(ButtonValue.Six)}>
            {ButtonValue.Six}
          </NumberButton>
        </ST.GridItem>
        <ST.GridItem gridRow="3 / 4" gridColumn="4 / 5">
          <OperatorButton onClick={() => handleOperator(ButtonValue.Subtract)}>
            {theme === Theme.LIGHT ? <SubtractLight /> : <SubtractDark />}
          </OperatorButton>
        </ST.GridItem>
        <ST.GridItem gridRow="4 / 5" gridColumn="1 / 2">
          <NumberButton onClick={() => handleDigit(ButtonValue.One)}>
            {ButtonValue.One}
          </NumberButton>
        </ST.GridItem>
        <ST.GridItem gridRow="4 / 5" gridColumn="2 / 3">
          <NumberButton onClick={() => handleDigit(ButtonValue.Two)}>
            {ButtonValue.Two}
          </NumberButton>
        </ST.GridItem>
        <ST.GridItem gridRow="4 / 5" gridColumn="3 / 4">
          <NumberButton onClick={() => handleDigit(ButtonValue.Three)}>
            {ButtonValue.Three}
          </NumberButton>
        </ST.GridItem>
        <ST.GridItem gridRow="4 / 5" gridColumn="4 / 5">
          <OperatorButton onClick={() => handleOperator(ButtonValue.Add)}>
            {(theme as ITheme).VALUE === Theme.LIGHT ? (
              <AddLight />
            ) : (
              <AddDark />
            )}
          </OperatorButton>
        </ST.GridItem>
        <ST.GridItem gridRow="5 / 6" gridColumn="1 / 3">
          <NumberButton
            zeroButton
            onClick={() => handleDigit(ButtonValue.Zero)}
          >
            {ButtonValue.Zero}
          </NumberButton>
        </ST.GridItem>
        <ST.GridItem gridRow="5 / 6" gridColumn="3 / 4">
          <NumberButton onClick={handleDecimalPoint}>
            {ButtonValue.Decimal}
          </NumberButton>
        </ST.GridItem>
        <ST.GridItem gridRow="5 / 6" gridColumn="4 / 5">
          <OperatorButton onClick={handleEquals}>
            {(theme as ITheme).VALUE === Theme.LIGHT ? (
              <EqualsLight />
            ) : (
              <EqualsDark />
            )}
          </OperatorButton>
        </ST.GridItem>
      </ST.Grid>
    </ST.CalculatorWrapper>
  );
};

export default Calculator;
