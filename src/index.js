import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';

import App from './pages/App';
import CharacterPage from './pages/CharacterPage';
import FavouritePage from './pages/FavouritePage';
import Layout from './components/Layout/Layout';
import RandomPage from './pages/RandomPage';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: true
    }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />

            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/favourites" element={<FavouritePage />} />
                        <Route path="/random" element={<RandomPage />} />
                        <Route
                            path="/character/:characterId"
                            element={<CharacterPage />}
                        />
                        <Route
                            path="*"
                            element={
                                <main style={{ padding: '1rem' }}>
                                    <p>There's nothing here!</p>
                                </main>
                            }
                        />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </ChakraProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
