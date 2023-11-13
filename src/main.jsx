import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './hooks/auth';
import { OrdersProvider } from './hooks/orders';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/global';
import Routes from './Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <ToastContainer theme='dark' />
            <GlobalStyle />
            <AuthProvider>
                <OrdersProvider>
                    <Routes />
                </OrdersProvider>
            </AuthProvider>
        </ThemeProvider>
    </React.StrictMode>
);
