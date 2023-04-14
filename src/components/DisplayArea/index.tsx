import React from 'react';
import * as ST from './styles';

interface Props {
  value: string | number;
}

const DisplayArea: React.FC<Props> = ({ value }) => {
  return <ST.DisplayAreaContainer>{value}</ST.DisplayAreaContainer>;
};

export default DisplayArea;
