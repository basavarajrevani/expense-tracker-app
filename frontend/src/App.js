import React from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import styled from "styled-components";
import bg from './img/bg.png'
import {MainLayout} from './styles/Layouts'
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income'
import Expenses from './Components/Expenses/Expenses';
import Transactions from './Components/Transactions/Transactions';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import PrivateRoute from './Components/Auth/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import { GlobalProvider } from './context/globalContext';
import { AuthProvider } from './context/authContext';

function App() {
  const [active, setActive] = React.useState(1);  

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/",
      element: <Navigate to="/dashboard" />
    },
    {
      path: "/dashboard",
      element: (
        <PrivateRoute>
          <MainLayout>
            <Navigation active={active} setActive={setActive} />
            <Dashboard />
          </MainLayout>
        </PrivateRoute>
      )
    },
    {
      path: "/transactions",
      element: (
        <PrivateRoute>
          <MainLayout>
            <Navigation active={active} setActive={setActive} />
            <Transactions />
          </MainLayout>
        </PrivateRoute>
      )
    },
    {
      path: "/income",
      element: (
        <PrivateRoute>
          <MainLayout>
            <Navigation active={active} setActive={setActive} />
            <Income />
          </MainLayout>
        </PrivateRoute>
      )
    },
    {
      path: "/expenses",
      element: (
        <PrivateRoute>
          <MainLayout>
            <Navigation active={active} setActive={setActive} />
            <Expenses />
          </MainLayout>
        </PrivateRoute>
      )
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);

  return (
    <ErrorBoundary>
      <AuthProvider>
        <GlobalProvider>
          <AppStyled bg={bg}>
            <Orb />
            <RouterProvider router={router} />
          </AppStyled>
        </GlobalProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
