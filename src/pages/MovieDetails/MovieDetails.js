import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";




function MovieDetails () {
    let movies = [
        {
            title: 'Black Adam-Official trailer',
            sub_title: 'The world needed a hero.',
            image: './asstes/images/vedios/card1.jpg',
            user_image: './asstes/images/user2.png',
            published: '31M . 1 month ago',
        },

    ];

    let movie = movies[0];
    return (
         <>
         <Layout>
            <h1>MovieDetails</h1>
            <section className="vedio-section px-5 mt-5">
                <div className="row g-3">
                    {movies.map((movie, index) => {
                        return (
                            <div className="col-md-3" key={`movie-card-${index}`}>
                                <div className="card">
                                    <div className="card-img">
                                        <img src={movie.image} alt="Image" />
                                    </div>

                                    <div className="d-flex gap-3">
                                        <div className="card-user-logo">
                                            <img src={movie.user_image} alt="Image" />
                                        </div>

                                        <div>
                                            <div>
                                                <Link to="/details" className="card-title">{movie.title}</Link>
                                            </div>
                                            <div className="card-sub-title">{movie.sub_title}</div>
                                            <div className="card-meta">{movie.published}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
         </Layout>
         

        </>

    );
}

export default MovieDetails;