import React, { FC, MouseEventHandler } from 'react';
import Button from '@components/Buttons/Button';
import { ButtonType } from '@constants/ButtonType';

interface Props {
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  children?: React.ReactNode;
}

const SpecialButton: FC<Props> = ({ onClick, children }) => (
  <Button type={ButtonType.Special} onClick={onClick}>
    {children}
  </Button>
);

export default SpecialButton;
