import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'normalize.css/normalize.css';
import { GlobalStyles } from './Components/GlobalStyles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { darkTheme, baseTheme, lightTheme } from './assets/Theme/theme';
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
            <Route index path="page/:pageId" element={<Page />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
