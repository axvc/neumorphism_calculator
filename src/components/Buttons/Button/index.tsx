import React, { FC, MouseEventHandler } from 'react';
import * as ST from './styles';
import { ButtonType } from '@constants/ButtonType';

interface Props {
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  children?: React.ReactNode;
  type?: ButtonType;
  zeroButton?: boolean;
}

const Button: FC<Props> = ({
  onClick,
  type = ButtonType.Number,
  children,
  zeroButton,
}) => (
  <ST.ButtonWrapper
    onClick={onClick}
    buttonType={type}
    zeroButton={!!zeroButton}
  >
    <ST.Button buttonType={type} type="button"></ST.Button>
    <ST.ChildrenWrapper buttonType={type}>{children}</ST.ChildrenWrapper>
  </ST.ButtonWrapper>
);

export default Button;
