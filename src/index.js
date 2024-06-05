import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,  RouterProvider} from "react-router-dom";
import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails/MovieDetails'
import MovieList from './pages/MovieList/MovieList';
import CategoryMovieList from './pages/CategoryMovieList/CategoryMovieList';
import SearchMovieList from './pages/SearchMovieList/SearchMovieList';
import About from './pages/About';
import Terms from './pages/Terms';
import Privicy from './pages/Privicy';
import Contact from './pages/contact';



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
    path: "/details/:movie_id",
    element : <MovieDetails />,
  },

  {
    path: "/about",
    element : <About />,
  },
  {
    path: "/terms",
    element : <Terms />,
  },
  {
    path: "/privicy",
    element : <Privicy />,
  },
  {
    path: "/contact",
    element : <Contact />,
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
