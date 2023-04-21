import { FC, useEffect, useState } from 'react';
import Calculator from './components/Calculator';
import { ThemeProvider } from 'styled-components';
import { Dark, Light, Theme } from '@constants/Color';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from '@styles/globalStyles';

const App: FC = () => {
  const [theme, setTheme] = useState(Theme.LIGHT);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDarkMode.matches) {
      setTheme(Theme.DARK);
    }
    prefersDarkMode.addEventListener('change', event =>
      setTheme(event.matches ? Theme.DARK : Theme.LIGHT),
    );
  }, []);

  return (
    <ThemeProvider theme={theme === Theme.LIGHT ? Light : Dark}>
      <GlobalStyle theme={theme} />
      <Calculator />
      <Toaster
        position="top-center"
        toastOptions={{
          error: {
            duration: 1000,
          },
        }}
      />
    </ThemeProvider>
  );
};

export default App;
