import Layout from "../../components/Layout/Layout";
import CategorySection from "../Home/_CategorySection";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ApiService from "../../services/ApiService";
import helpers from "../../helpers/helpers";
import MovieCard from "../../components/MovieCard";



function Placeholder() {
    return(
        <>
            {[1,2,3,4].map((item) =>
                <div className="col-lg-3" key={`category-placeholder-${item}`}>
                    <div className="card  placeholder-glow">
                        <div className="card-img">
                            <div className="placeholder py-3 rounded w-100" style={{height : 350}}></div>
                            <div className="d-flex gap-3 mt-2">
                                <div className="w-100">
                                    <div className="placeholder rounded w-100" style={{height : 30}}></div>
                                    <div className="placeholder rounded w-100" style={{height : 20}}></div>
                                    <div className="placeholder rounded w-100" style={{height : 10}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

function Movies({movies}) {
    return(
        <>
            {movies.map((movie, index) => {
                return (
                    <div className="col-lg-3" key={`movie-card-${index}`}>
                        <MovieCard movie={movie} />
                    </div>
                );
            })}
        </>
    );
}



function SearchMovieList() {
    let [isLoading, setIsLoading] = useState(true)
    let [movies, setMovies] = useState([]);
    let [page, setPage] = useState(1);
    let { search_slug } = useParams();

    // if( slug ==='now_playing' || slug ==='popular' || slug ==='top_rated' || slug ==='upcoming'){

    // } else {
    //     return redirect("/");
    // }

    useEffect (() => {
        setIsLoading(true);
        ApiService.get(`discover/movie/`, {'page': page, 'query': 'search_slug'})
            .then((data) => {
                setMovies(data.results);

                setIsLoading(false);
             });

    }, [page, search_slug]);

    function previous() {
        if (page === 0) {
            return;
        }

        setPage(page - 1);
    }

    function next() {
        setPage(page + 1);
    }

    

    return (
        <>
            <Layout>
                <CategorySection />
                    <section className="vedio-section px-3 py-3 mt-5">
                        <div className="row g-3">
                            <div className="col-lg-12">
                                <div className="d-flex align-item-center justify-content-between">
                                <div className="h3">{helpers.toTitleCase(search_slug)}</div>
                                <div className="fs-1">
                                    <Link to ={`/search/${search_slug}`} className="text-dark text-decoration-none">
                                        <i className="ph ph-dots-three-outline"></i>
                                    </Link>
                                </div>
                                </div>
                            </div>
                            {isLoading ? <Placeholder /> : <Movies movies={movies}/>}
                            <div className="row">
                                <div className="col-md-12 mt-5">
                                    <div className="d-flex justify-content-center gap-3">
                                        <button
                                            className="btn btn-primary"
                                            onClick={previous}
                                            disabled={page === 1}
                                        >
                                            Previous
                                        </button>

                                        <button
                                            className="btn btn-primary"
                                            onClick={next}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            </Layout>
        </>
    );
}

export default SearchMovieList;