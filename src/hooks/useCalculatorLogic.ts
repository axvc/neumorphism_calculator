import { useState } from 'react';
import { ButtonValue } from '@constants/ButtonValue';
import toast from 'react-hot-toast';

const MAX_SYMBOLS = 24;
const notify = () => toast.error('Too long');

export type Operator =
  | ButtonValue.Add
  | ButtonValue.Subtract
  | ButtonValue.Multiply
  | ButtonValue.Divide
  | ButtonValue.Percent;

export interface CalculatorState {
  value: string;
  operator?: Operator;
  waitingForOperand: boolean;
}

const calculate = (x: number, y: number, operator: Operator): number => {
  switch (operator) {
    case ButtonValue.Add:
      return x + y;
    case ButtonValue.Subtract:
      return x - y;
    case ButtonValue.Multiply:
      return x * y;
    case ButtonValue.Divide:
      return x / y;
    case ButtonValue.Percent:
      return (x * y) / 100;
    default:
      throw new Error(`Invalid operator: ${operator}`);
  }
};

const useCalculatorLogic = () => {
  const [state, setState] = useState<CalculatorState>({
    value: '0',
    waitingForOperand: true,
  });
  const [previousValue, setPreviousValue] = useState('0');

  const handleDigit = (digit: string) => {
    const { value, waitingForOperand } = state;

    if (waitingForOperand) {
      setState({
        ...state,
        value: digit,
        waitingForOperand: false,
      });
    } else {
      if (value.length >= MAX_SYMBOLS) {
        notify();
        return;
      }
      setState({
        ...state,
        value: value === '0' ? digit : value + digit,
      });
    }
  };

  const handleOperator = (operator: Operator) => {
    const { value } = state;

    setPreviousValue(value);

    setState({
      ...state,
      operator,
      waitingForOperand: true,
      value,
    });
  };

  const handleDecimalPoint = () => {
    const { value, waitingForOperand } = state;

    if (waitingForOperand) {
      setState({
        ...state,
        value: '0.',
        waitingForOperand: false,
      });
    } else if (value.indexOf('.') === -1) {
      setState({
        ...state,
        value: value + '.',
      });
    }
  };

  const handleEquals = () => {
    const { value, operator } = state;

    if (operator) {
      const x = parseFloat(previousValue);
      const y = parseFloat(value);
      const result = calculate(x, y, operator);

      setState({
        ...state,
        value: String(result),
        operator: undefined,
        waitingForOperand: true,
      });
    }
  };

  const handleClear = () => {
    setState({
      value: '0',
      operator: undefined,
      waitingForOperand: true,
    });
    setPreviousValue('0');
  };

  const handlePercentage = () => {
    handleOperator(ButtonValue.Percent);
  };

  const handlePlusMinus = () => {
    const { value } = state;
    setState({
      ...state,
      value: String(parseFloat(value) * -1),
      waitingForOperand: true,
    });
  };

  return {
    value: state.value,
    history: `${state.operator ? previousValue : ''} ${state.operator || ''} ${
      state.value
    }`,
    handleDigit,
    handleOperator,
    handleDecimalPoint,
    handleEquals,
    handleClear,
    handlePercentage,
    handlePlusMinus,
  };
};

export default useCalculatorLogic;
