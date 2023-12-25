import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,  RouterProvider} from "react-router-dom";
import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails/MovieDetails'
import MovieList from './pages/MovieList/MovieList';
import CategoryMovieList from './pages/CategoryMovieList/CategoryMovieList';
import SearchMovieList from './pages/SearchMovieList/SearchMovieList';


const router = createBrowserRouter ([

  {
    path: "/",
    element : <Home />,
  },
  {
    path: "/list/:movie_id",
    element : <MovieList />,
  },
  {
    path: "/search/:slug",
    element : <SearchMovieList />,
  },

  {
    path: "/category-movie-list/:slug/:name",
    element : <CategoryMovieList />,
  },
  
  {
    path: "/details",
    element : <MovieDetails />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
