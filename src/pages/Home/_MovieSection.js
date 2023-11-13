import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

function Placeholder() {
    return(
        <>
            <div className="d-flex align-item-center justify-content-between placeholder-glow">
                {[1,2,3,4,5,6,7,8,9,10].map((item) =>
            <div className="placeholder py-3 col-1 rounded" key={`category-placeholder-${item}`}></div>)}
            </div>
        </>
    )
}

function Movies({movies}) {
    return(
        <>
            {movies.map((movie, index) => {
                return (
                    <div className="col-md-3" key={`movie-card-${index}`}>
                        <div className="card">
                            <div className="card-img">
                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Image" />
                            </div>

                            <div className="d-flex gap-3 mt-2">
                                <div className="card-user-logo">
                                    <img src="./asstes/images/user2.png" alt="Image" />
                                </div>

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

function MovieSection() {
    let [isLoading, setIsLoading] = useState(true)
    let [movies, setMovies] = useState([]);
    // let movies = [
    //     {
    //         title: 'Black Adam-Official trailer',
    //         sub_title: 'The world needed a hero.',
    //         image: './asstes/images/vedios/card1.jpg',
    //         user_image: './asstes/images/user2.png',
    //         published: '31M . 1 month ago',
    //     },
    //     {
    //         title: 'Black Adam-Official trailer',
    //         sub_title: 'The world needed a hero.',
    //         image: './asstes/images/vedios/card1.jpg',
    //         user_image: './asstes/images/user2.png',
    //         published: '31M . 1 month ago',
    //     },
    //     {
    //         title: 'Black Adam-Official trailer',
    //         sub_title: 'The world needed a hero.',
    //         image: './asstes/images/vedios/card1.jpg',
    //         user_image: './asstes/images/user2.png',
    //         published: '31M . 1 month ago',
    //     },
    //     {
    //         title: 'Black Adam-Official trailer',
    //         sub_title: 'The world needed a hero.',
    //         image: './asstes/images/vedios/card1.jpg',
    //         user_image: './asstes/images/user2.png',
    //         published: '31M . 1 month ago',
    //     },
    //     {
    //         title: 'Black Adam-Official trailer',
    //         sub_title: 'The world needed a hero.',
    //         image: './asstes/images/vedios/card1.jpg',
    //         user_image: './asstes/images/user2.png',
    //         published: '31M . 1 month ago',
    //     },
    //     {
    //         title: 'Black Adam-Official trailer',
    //         sub_title: 'The world needed a hero.',
    //         image: './asstes/images/vedios/card1.jpg',
    //         user_image: './asstes/images/user2.png',
    //         published: '31M . 1 month ago',
    //     },
    //     {
    //         title: 'Black Adam-Official trailer',
    //         sub_title: 'The world needed a hero.',
    //         image: './asstes/images/vedios/card1.jpg',
    //         user_image: './asstes/images/user2.png',
    //         published: '31M . 1 month ago',
    //     },
    //     {
    //         title: 'Black Adam-Official trailer',
    //         sub_title: 'The world needed a hero.',
    //         image: './asstes/images/vedios/card1.jpg',
    //         user_image: './asstes/images/user2.png',
    //         published: '31M . 1 month ago',
    //     },
    // ];

    useEffect (() => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=ab4ce24739fba632c712634a0ace856b')
            .then (res => res.json())
            .then((data) => {
                setTimeout(() => {
                    setMovies(data.results);
                    setIsLoading(false)
                }, 5000);
             });
    }, []);

    return (
        <>
            <section className="vedio-section px-5 mt-5">
                <div className="row g-3">
                    <div className="col-lg-12">
                        <div className="h3">Now Playing</div>
                    </div>
                    {isLoading ? <Placeholder /> : <Movies movies={movies}/>}
                </div>
            </section>
        </>
    );
}

export default MovieSection;