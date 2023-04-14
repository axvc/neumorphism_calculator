import React, { FC, MouseEventHandler } from 'react';
import Button from '@components/Buttons/Button';
import { ButtonType } from '@constants/ButtonType';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
  zeroButton?: boolean;
}

const NumberButton: FC<Props> = ({ onClick, children, zeroButton }) => (
  <Button type={ButtonType.Number} onClick={onClick} zeroButton={zeroButton}>
    {children}
  </Button>
);

export default NumberButton;
