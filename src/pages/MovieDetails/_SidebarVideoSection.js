import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiService from "../../services/ApiService";

// function SidebarVideoSection ({movie}){
    
//     let [isLoading, setIsLoading] = useState(true)
//     let [relatedMovies, setRelatedMovies] = useState([]);
    
//     let movieGenresIds =movie.genres.map((genre) => genre.id).join(',');
//     console.log(movieGenresIds);
//     useEffect (() => {
        
//         setIsLoading(true);
//         ApiService.get(`discover/movie/`, {'page': 1, })
//             .then((data) => {
//                 setRelatedMovies(data.results);

//                 setIsLoading(false);
//              });

//     }, []);
   
function SidebarVideoSection({ movie }) {
    let [isLoading, setIsLoading] = useState(true);
    let [relatedMovies, setRelatedMovies] = useState([]);

    useEffect(() => {
      if (movie && movie.genres && Array.isArray(movie.genres)) {
        let movieGenresIds = movie.genres.map((genre) => genre.id).join(',');
        console.log(movieGenresIds);
        setIsLoading(true);
        ApiService.get(`discover/movie/`, { page: 1 })
          .then((data) => {
            setRelatedMovies(data.results);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
          });
      } else {
        
      }
    }, [movie]);
  
    return (
        <>
            <div>
                {relatedMovies.map((relatedMovie, index) => (
                    <div className="d-sm-flex gap-3 mb-3" key={`movie-${index}`}>
                        <div>
                            <img className="rounded" src={`https://image.tmdb.org/t/p/original/${relatedMovie.poster_path}`} alt="Image" width="150" height="100" />
                        </div>

                        <div>
                            <div className="fw-bold">
                                <Link to={`/details/${relatedMovie.id}`} className="text-primary text-decoration-none">{relatedMovie.title}</Link>
                            </div>
                        <div className="card-meta">{relatedMovie.release_date}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default SidebarVideoSection;