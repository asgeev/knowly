import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './Components/GlobalStyles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { darkTheme, baseTheme, lightTheme } from './assets/Theme/theme';
import { AppLayout } from './Components/AppLayout/AppLayout';
import { PageNotFound } from './Components/PageNotFound/PageNotFound';
import { Page } from './Components/Page/Page';
import { Home } from './Components/Home/Home';
import { SkeletonTheme } from 'react-loading-skeleton';
import './assets/Theme/normalize.css';

function App() {
  return (
    <ThemeProvider theme={{ ...darkTheme, ...baseTheme }}>
      <GlobalStyles />
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route index path="page/:pageId" element={<Page />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
            <Route path="not-found" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </SkeletonTheme>
    </ThemeProvider>
  );
}

export default App;
