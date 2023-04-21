import React, { useEffect, useRef } from 'react';
import * as ST from './styles';

interface Props {
  value: string | number;
  history: string | number;
}

const DisplayArea: React.FC<Props> = ({ value, history }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const adjustFontSize = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const fontSize = parseInt(
          window.getComputedStyle(container).fontSize,
          10,
        );

        container.style.fontSize = fontSize + 'px';

        while (container.scrollHeight > container.clientHeight) {
          const newSize = parseInt(container.style.fontSize, 10) - 1;
          container.style.fontSize = newSize + 'px';
          window
            .getComputedStyle(container, null)
            .getPropertyValue('font-size'); // Force recalculation of layout
        }
      }
    };

    adjustFontSize();
  }, [value, containerRef.current?.style.fontSize]);

  return (
    <ST.DisplayAreaContainer ref={containerRef}>
      <ST.HistoryFormula>{history || '10 + 10'}</ST.HistoryFormula>
      <ST.Value>{value}</ST.Value>
    </ST.DisplayAreaContainer>
  );
};

export default DisplayArea;
