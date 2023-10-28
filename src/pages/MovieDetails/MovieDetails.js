import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";
import { useState } from "react";



function MovieDetails () {
    // let movieIndex = 0;
    let [movieIndex, setMovieIndex] = useState(0);
    let [showMore, setShowMore] = useState(false);
    let movies = [
        {
            title: 'Black Adam-Official trailer1',
            sub_title: 'The world needed a hero.',
            video: 'https://www.youtube.com/embed/kjl_fuwxchw?si=S2WqeBgm7e8hD1Vs',
            user_image: './asstes/images/user2.png',
            published: '31M . 1 month ago',
        },
        {
            title: 'Black Adam-Official trailer2',
            sub_title: 'The world needed a hero.',
            video: 'https://www.youtube.com/embed/3w_IecL1FRk?si=vZrdEvvvv2e6xG1g',
            user_image: './asstes/images/user2.png',
            published: '31M . 1 month ago',
        },
        {
            title: 'Black Adam-Official trailer3',
            sub_title: 'The world needed a hero.',
            video: 'https://www.youtube.com/embed/kjl_fuwxchw?si=S2WqeBgm7e8hD1Vs',
            user_image: './asstes/images/user2.png',
            published: '31M . 1 month ago',
        },
        {
            title: 'Black Adam-Official trailer4',
            sub_title: 'The world needed a hero.',
            video: 'https://www.youtube.com/embed/kjl_fuwxchw?si=S2WqeBgm7e8hD1Vs',
            user_image: './asstes/images/user2.png',
            published: '31M . 1 month ago',
        },
        {
            title: 'Black Adam-Official trailer5',
            sub_title: 'The world needed a hero.',
            video: 'https://www.youtube.com/embed/kjl_fuwxchw?si=S2WqeBgm7e8hD1Vs',
            user_image: './asstes/images/user2.png',
            published: '31M . 1 month ago',
        },
        {
            title: 'Black Adam-Official trailer6',
            sub_title: 'The world needed a hero.',
            video: 'https://www.youtube.com/embed/kjl_fuwxchw?si=S2WqeBgm7e8hD1Vs',
            user_image: './asstes/images/user2.png',
            published: '31M . 1 month ago',
        },
        {
            title: 'Black Adam-Official trailer7',
            sub_title: 'The world needed a hero.',
            video: 'https://www.youtube.com/embed/kjl_fuwxchw?si=S2WqeBgm7e8hD1Vs',
            user_image: './asstes/images/user2.png',
            published: '31M . 1 month ago',
        },
        {
            title: 'Black Adam-Official trailer8',
            sub_title: 'The world needed a hero.',
            video: 'https://www.youtube.com/embed/kjl_fuwxchw?si=S2WqeBgm7e8hD1Vs',
            user_image: './asstes/images/user2.png',
            published: '31M . 1 month ago',
        },

    ];

    let movie = movies[movieIndex];

    function previous() {
        if (movieIndex === 0) {
            return;
        }

        setMovieIndex(movieIndex - 1);
    }

    function next() {
        if (movieIndex === (movies.length - 1)) {
            return;
        }

        setMovieIndex(movieIndex + 1);
    }
    return (
        <>
        <Layout>
            <section className="video-section px-5">
                <div className="h1">MovieDetails</div>
                    <div className="row g-3">
                            <div className="col-md-8" >
                                <div className="card">
                                    <div className="card-img">
                                        {/* <img src={movie.vedio} width="100%" height="400" alt="Image"  /> */}
                                        <iframe width="560" height="315" src={movie.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                                <div className="d-flex gap-3">
                                <div>
                                    <div>
                                        <Link to="/details" className="card-title h3">
                                            {movie.title}
                                        </Link>
                                    </div>
                                    <div className="card-sub-title h4">{movie.sub_title}</div>
                                    <div>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <a href="#" onClick={() => setShowMore(showMore ? false : true)}>
                                                {showMore ? 'show less' : 'show more...'}
                                                </a>

                                        </p>
                                        {showMore && (
                                            <>
                                                <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                        </p>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                        </p>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                        </p>

                                            </>
                                        )}
                                    </div>
                                    <div className="card-meta text-muted">{movie.published}</div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-3">
                                    <div className=" d-flex justify-content-center gap-3">
                                        <button className="btn btn-primary"
                                            onClick={previous}
                                            disabled={movieIndex === 0}
                                        >
                                            Previous
                                        </ button>

                                        <button
                                            className="btn btn-primary"
                                            onClick={next}
                                            disabled={movieIndex === (movies.length - 1)}
                                        >
                                            Next
                                        </button>

                                    </div>
                                </div>
                            </div>
                        <div className="col-md-4">
                        </div>
                    </div>
            </section>
        </Layout>
    </>
);
}

export default MovieDetails;