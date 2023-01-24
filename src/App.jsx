import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Components/GlobalStyles/GlobalStyles';
import { darkTheme, baseTheme } from './assets/Theme/theme';

function App() {
  return (
    <ThemeProvider theme={{ ...darkTheme, ...baseTheme }}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
