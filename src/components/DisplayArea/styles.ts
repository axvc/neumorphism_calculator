import styled from 'styled-components';

export const DisplayAreaContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  height: 80px;
  padding: 24px;
  font-size: 56px;
  font-weight: bold;
  overflow-wrap: anywhere;
  width: 90vw;
  flex-direction: column;
`;

export const HistoryFormula = styled.div`
  font-family: 'SF Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 33px;
  text-align: right;
  color: ${({ theme }) => theme.SECONDARY_FONT};
`;

export const Value = styled.div`
  color: ${({ theme }) => theme.MAIN_FONT};
`;
