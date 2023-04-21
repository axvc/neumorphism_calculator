import { createGlobalStyle } from 'styled-components';
import { ITheme } from '@constants/Color';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => (theme as ITheme).BACKGROUND};
  }
`;
