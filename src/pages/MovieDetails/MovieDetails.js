import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useEffect, useState } from "react";
import VideoSection from "./_VideoSection";
import DescriptionSection from "./_DescriptionSection";
import CommentSection from "./_CommentSection";
import SidebarVideoSection from "./_SidebarVideoSection";
import ApiService from "../../services/ApiService";
import CategorySection from "../Home/_CategorySection";

function MovieDetails() {
    // let movieIndex = 0;
    let [isLoading, setIsLoading] = useState(true)
    let [movie, setMovie] = useState([0]);
    // let [movieIndex, setMovieIndex] = useState(0);
    let { movie_id } = useParams();

    // let movies = [
    //     {
    //         title: 'Card Title 1',
    //         sub_title: 'Card Sub Title',
    //         image: './asstes/images/vedios/card1.jpg',
    //         user_image: './assets/images/user-icon.png',
    //         views: '1m',
    //         published: '1 month ago',
    //     },
    //     {
    //         title: 'Card Title 2',
    //         sub_title: 'Card Sub Title',
    //         image: './asstes/images/vedios/card1.jpg',
    //         user_image: './asstes/images/user2.png',
    //         views: '1m',
    //         published: '1 month ago',
    //     },
    //     {
    //         title: 'Card Title 3',
    //         sub_title: 'Card Sub Title',
    //         image: './asstes/images/vedios/card1.jpg',
    //         user_image: './asstes/images/user2.png',
    //         views: '1m',
    //         published: '1 month ago',
    //     },
    //     {
    //         title: 'Card Title 4',
    //         sub_title: 'Card Sub Title',
    //         image: './asstes/images/vedios/card1.jpg',
    //         user_image: './asstes/images/user2.png',
    //         views: '1m',
    //         published: '1 month ago',
    //     },
    //     {
    //         title: 'Card Title 5',
    //         sub_title: 'Card Sub Title',
    //         image: './asstes/images/vedios/card1.jpg',
    //         user_image: './assets/images/user-icon.png',
    //         views: '1m',
    //         published: '1 month ago',
    //     },
    //     {
    //         title: 'Card Title 6',
    //         sub_title: 'Card Sub Title',
    //         image: './asstes/images/vedios/card1.jpg',
    //         user_image: './assets/images/user-icon.png',
    //         views: '1m',
    //         published: '1 month ago',
    //     },
    //     {
    //         title: 'Card Title 7',
    //         sub_title: 'Card Sub Title',
    //         image: './asstes/images/vedios/card1.jpg',
    //         user_image: './assets/images/user-icon.png',
    //         views: '1m',
    //         published: '1 month ago',
    //     },
    //     {
    //         title: 'Card Title 8',
    //         sub_title: 'Card Sub Title',
    //         image: './asstes/images/vedios/card1.jpg',
    //         user_image: './assets/images/user-icon.png',
    //         views: '1m',
    //         published: '1 month ago',
    //     },
    // ];


    useEffect (() => {
        setIsLoading(true);
        ApiService.get(`movie/`+movie_id)
            .then((data) => {
                setMovie(data);

                setIsLoading(false);
             });

    }, [movie_id]);

    // let movie = movies[movieIndex];

    // function previous() {
    //     if (movieIndex === 0) {
    //         return;
    //     }

    //     setMovieIndex(movieIndex - 1);
    // }

    // function next() {
    //     if (movieIndex === (movies.length - 1)) {
    //         return;
    //     }

    //     setMovieIndex(movieIndex + 1);
    // }

    return (
        <>
            <Layout>
                <CategorySection />
                <section className="video-details-section px-3 mt-5">
                     {isLoading ?
                        <>
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </> :
                    <>
                        <div className="row">
                            <div className="col-md-8">
                                <VideoSection movie={movie} />
                                <DescriptionSection movie={movie} />
                                <CommentSection />
                            </div>

                            <div className="col-md-4">
                                <SidebarVideoSection movie={movie} />
                            </div>
                        </div>

                        {/* <div className="row">
                            <div className="col-md-12 mt-5">
                                <div className="d-flex justify-content-center gap-3">
                                    <button
                                        className="btn btn-primary"
                                        onClick={previous}
                                        disabled={movieIndex === 0}
                                    >
                                        Previous
                                    </button>

                                    <button
                                        className="btn btn-primary"
                                        onClick={next}
                                        disabled={movieIndex === (movies.length - 1)}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div> */}

                    </>
                }
                </section>
            </Layout>
        </>
    );
}

export default MovieDetails;
