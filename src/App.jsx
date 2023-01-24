import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Components/GlobalStyles/GlobalStyles';
import { darkTheme, baseTheme } from './assets/Theme/theme';
import { AppLayout } from './Components/AppLayout/AppLayout';
import { PageNotFound } from './Components/PageNotFound/PageNotFound';
import { Page } from './Components/Page/Page';
import { Home } from './Components/Home/Home';

function App() {
  return (
    <ThemeProvider theme={{ ...darkTheme, ...baseTheme }}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="page/:slug" elemement={<Page />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
