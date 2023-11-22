import Layout from "../../components/Layout/Layout";
import CategorySection from "../Home/_CategorySection";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ApiService from "../../services/ApiService";



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
                        <div className="card">
                            <div className="card-img">
                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Image" />
                            </div>

                            <div className="d-flex gap-3 mt-2">
                                <div>
                                    <div>
                                        <Link to="/details" className="card-title">{movie.original_title}</Link>
                                    </div>
                                    <div className="card-sub-title my-1">{movie.overview.substring(0,40)}...</div>
                                    <div className="card-meta">{movie.release_date}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}



function MovieList() {
    let [isLoading, setIsLoading] = useState(true)
    let [movies, setMovies] = useState([]);
    let [page, setPage] = useState(1);
    let { slug } = useParams();

    // if( slug ==='now_playing' || slug ==='popular' || slug ==='top_rated' || slug ==='upcoming'){

    // } else {
    //     return redirect("/");
    // }

    useEffect (() => {
        setIsLoading(true);
        ApiService.get(`movie/${slug}`, {'page': page, 'language': 'en'})
            .then((data) => {
                setMovies(data.results);

                setIsLoading(false);
             });

    }, [slug, page]);

    function previous() {
        if (page === 0) {
            return;
        }

        setPage(page - 1);
    }

    function next() {
        setPage(page + 1);
    }

    function toTitleCase(str) {
        return str
         .split('_')
         .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
         .join(' ');
      }

    return (
        <>
            <Layout>
                <CategorySection />
                    <section className="vedio-section px-3 py-3 mt-5">
                        <div className="row g-3">
                            <div className="col-lg-12">
                                <div className="d-flex align-item-center justify-content-between">
                                <div className="h3">{toTitleCase(slug)}</div>
                                <div className="fs-1">
                                    <Link to ={`/list/${slug}`} className="text-dark text-decoration-none">
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

export default MovieList;