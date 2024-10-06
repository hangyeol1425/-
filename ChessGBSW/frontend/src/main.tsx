import { createRoot } from 'react-dom/client';
import AppProviders from './contexts/AppProviders';
import App from './App';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useTheme } from './contexts/ThemeContext';
import { lightTheme, darkTheme } from './theme';
import './i18n';
import { BrowserRouter } from 'react-router-dom';

const Root = () => {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StyledThemeProvider>
  );
};

createRoot(document.getElementById('root')!).render(
  <AppProviders>
    <Root />
  </AppProviders>
);
