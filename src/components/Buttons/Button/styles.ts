import styled from 'styled-components';
import { ButtonType } from '@constants/ButtonType';
import { Color } from '@constants/Color';

interface IWithButtonType {
  buttonType: ButtonType;
}

interface IButtonWrapper extends IWithButtonType {
  zeroButton: boolean;
}

const getOuterBackground = (buttonType: ButtonType) =>
  ({
    [ButtonType.Number]: Color.LIGHT_NUMBER_BUTTON_OUTER_BACKGROUND,
    [ButtonType.Operator]: Color.LIGHT_OPERATOR_BUTTON_OUTER_BACKGROUND,
    [ButtonType.Special]: Color.LIGHT_SPECIAL_BUTTON_OUTER_BACKGROUND,
  }[buttonType]);

const getOuterBoxShadow = (buttonType: ButtonType) =>
  ({
    [ButtonType.Number]: Color.LIGHT_NUMBER_BUTTON_OUTER_BOX_SHADOW,
    [ButtonType.Operator]: Color.LIGHT_OPERATOR_BUTTON_OUTER_BOX_SHADOW,
    [ButtonType.Special]: Color.LIGHT_SPECIAL_BUTTON_OUTER_BOX_SHADOW,
  }[buttonType]);

const getInnerBackground = (buttonType: ButtonType) =>
  ({
    [ButtonType.Number]: Color.LIGHT_NUMBER_BUTTON_INNER_BACKGROUND,
    [ButtonType.Operator]: Color.LIGHT_OPERATOR_BUTTON_INNER_BACKGROUND,
    [ButtonType.Special]: Color.LIGHT_SPECIAL_BUTTON_INNER_BACKGROUND,
  }[buttonType]);

const getFont = (buttonType: ButtonType) =>
  ({
    [ButtonType.Number]: Color.LIGHT_NUMBER_BUTTON_FONT,
    [ButtonType.Operator]: Color.LIGHT_OPERATOR_BUTTON_FONT,
    [ButtonType.Special]: Color.LIGHT_SPECIAL_BUTTON_FONT,
  }[buttonType]);

export const ButtonWrapper = styled.div<IButtonWrapper>`
  width: ${({ zeroButton }) => (zeroButton ? '96%' : '92%')};
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  box-shadow: ${({ buttonType }) => getOuterBoxShadow(buttonType)};
  border-radius: 23px;
  background: ${({ buttonType }) => getOuterBackground(buttonType)};
`;

export const Button = styled.button<IWithButtonType>`
  all: unset;
  user-select: none;
  outline: none;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //padding: 4px;
  filter: blur(1px);
  border-radius: 18px;
  background: ${({ buttonType }) => getInnerBackground(buttonType)};
  color: ${Color.LIGHT_MAIN_FONT};
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  width: 100%;
  height: 100%;
  :hover {
    cursor: pointer;
  }
`;

export const ChildrenWrapper = styled.div<IWithButtonType>`
  position: absolute;
  cursor: pointer;
  user-select: none;
  font-size: 21px;
  line-height: 25px;
  color: ${({ buttonType }) => getFont(buttonType)};
`;
