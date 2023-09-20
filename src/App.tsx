import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './pages/Home';
import { useAppDispatch } from './redux/hook';
import { fetchCountries } from './redux/action';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Detail from './pages/Detail';
import ErrorPage from './pages/ErrorPage';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage/>,
    },
    {
      path: '/details/:countries_name',
      element: <Detail/>,
      errorElement: <ErrorPage/>,
    },
    {
      path: '/error',
      element: <ErrorPage/>,
    },
  ])
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
