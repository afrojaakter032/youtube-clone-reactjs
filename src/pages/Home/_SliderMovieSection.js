import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import ApiService from "../../services/ApiService";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import toTitleCase from "../TitleCaseUtility/toTitleCase";

function Placeholder() {
    return(
        <>
            <Swiper
                spaceBetween={20}
                slidesPerView={5}
            >
            {[1,2,3,4,5].map((item) =>
                <SwiperSlide key={`category-placeholder-${item}`}>
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
                </SwiperSlide>
            )}
            </Swiper>
        </>
    )
}

function Movies({movies}) {
    return(
        <>
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={5}
                navigation
            >
                {movies.map((movie, index) => {
                    return (
                        <SwiperSlide key={`movie-card-${index}`}>
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
                        </SwiperSlide>
                    );
                })}
            </Swiper>

        </>
    );
}

function SliderMovieSection({type}) {
    let [isLoading, setIsLoading] = useState(true)
    let [movies, setMovies] = useState([]);

    useEffect (() => {
        ApiService.get(`movie/${type}`)
            .then((data) => {
                setMovies(data.results);

                setIsLoading(false)
             });
    }, []);

    

    return (
        <>
            <section className="vedio-section px-3 py-3 mt-5">
                <div className="row g-3">
                    <div className="col-lg-12">
                        <div className="d-flex align-item-center justify-content-between">
                        <div className="h3">{toTitleCase(type)}</div>
                        <div className="fs-1">
                            <Link to ={`/list/${type}`} className="text-dark text-decoration-none">
                                <i className="ph ph-dots-three-outline"></i>
                            </Link>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-12">{isLoading ? <Placeholder /> : <Movies movies={movies}/>}</div>
                </div>
            </section>
        </>
    );
}

export default SliderMovieSection;