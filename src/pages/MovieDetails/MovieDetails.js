import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import VideoSection from "./_VideoSection";
import DescriptionSection from "./_DescriptionSection";

function MovieDetails() {
    // let movieIndex = 0;
    let [movieIndex, setMovieIndex] = useState(0);

    let [showMore, setShowMore] = useState(false);

    let movies = [
        {
            title: 'Card Title 1',
            sub_title: 'Card Sub Title',
            image: './asstes/images/vedios/card1.jpg',
            user_image: './assets/images/user-icon.png',
            views: '1m',
            published: '1 month ago',
        },
        {
            title: 'Card Title 2',
            sub_title: 'Card Sub Title',
            image: './asstes/images/vedios/card1.jpg',
            user_image: './asstes/images/user2.png',
            views: '1m',
            published: '1 month ago',
        },
        {
            title: 'Card Title 3',
            sub_title: 'Card Sub Title',
            image: './asstes/images/vedios/card1.jpg',
            user_image: './asstes/images/user2.png',
            views: '1m',
            published: '1 month ago',
        },
        {
            title: 'Card Title 4',
            sub_title: 'Card Sub Title',
            image: './asstes/images/vedios/card1.jpg',
            user_image: './asstes/images/user2.png',
            views: '1m',
            published: '1 month ago',
        },
        {
            title: 'Card Title 5',
            sub_title: 'Card Sub Title',
            image: './asstes/images/vedios/card1.jpg',
            user_image: './assets/images/user-icon.png',
            views: '1m',
            published: '1 month ago',
        },
        {
            title: 'Card Title 6',
            sub_title: 'Card Sub Title',
            image: './asstes/images/vedios/card1.jpg',
            user_image: './assets/images/user-icon.png',
            views: '1m',
            published: '1 month ago',
        },
        {
            title: 'Card Title 7',
            sub_title: 'Card Sub Title',
            image: './asstes/images/vedios/card1.jpg',
            user_image: './assets/images/user-icon.png',
            views: '1m',
            published: '1 month ago',
        },
        {
            title: 'Card Title 8',
            sub_title: 'Card Sub Title',
            image: './asstes/images/vedios/card1.jpg',
            user_image: './assets/images/user-icon.png',
            views: '1m',
            published: '1 month ago',
        },
    ];

    let movie = movies[movieIndex];

    function previous() {
        if (movieIndex == 0) {
            return;
        }

        setMovieIndex(movieIndex - 1);
    }

    function next() {
        if (movieIndex == (movies.length - 1)) {
            return;
        }

        setMovieIndex(movieIndex + 1);
    }

    return (
        <>
            <Layout>
                <section className="video-details-section px-3">
                    <div className="row">
                        <div className="col-md-8">
                            
                        <VideoSection movie={{ title: 'Card Title 6' }} />

                        <DescriptionSection />

                            {/* <div className="bg-light p-3 rounded">
                                <div>
                                    <div className="d-flex flex-wrap gap-3"><b>951,486 views</b>  <b>Jul 28, 2022</b></div>

                                    <div className="d-flex flex-wrap gap-3">
                                        <a href="#">#MattLeBlanc</a>
                                        <a href="#">#JenniferAniston</a>
                                        <a href="#">#LisaKudrow</a>
                                    </div>

                                    <p>
                                        Ross becomes fixated with completing the Name All Fifty States game before he allows himself to eat any of Thanksgiving dinner.
                                        <br />Chandler wants to make Monica happy and goes over to Ross’ place to bring the dog back, and when it’s not there he thinks the dog escaped.
                                        <br />But Phoebe and Monica have already snuck the dog back to the apartment.
                                        <br /> Joey accidentally reveals Rachel’s crush on Tag. Later on Tag returns his feelings for Rachel and they share a kiss in the hall. Watch more Friends on TBS.
                                    </p>

                                    {showMore && (
                                        <>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                        </>
                                    )}

                                    <button className="btn btn-link p-0" onClick={() => setShowMore(showMore ? false : true)}>
                                        {showMore ? 'Show Less...' : 'Show More...'}
                                    </button>
                                </div>
                            </div> */}

                            <div>
                                <div className="mt-3">
                                    <div className="fw-bold">1,442 Comments</div>
                                </div>

                                <div className="d-flex gap-3 mt-2">
                                    <label className="display-4" for="comment">
                                        <i className="ph ph-user-circle"></i>
                                    </label>

                                    <textarea name="comment" id="comment" className="form-control" placeholder="Add a comment"></textarea>
                                </div>

                                <div className="mt-3">
                                    {[1, 2, 3, 4, 5].map(() => (
                                        <div className="d-flex gap-3 mb-3">
                                            <div className="display-6"><i className="ph ph-user-circle"></i></div>

                                            <div>
                                                <div className="d-flex gap-3">
                                                    <div className="fw-bold">@Chandler Bing</div>
                                                    <div className="text-muted">2 months ago</div>
                                                </div>

                                                <div>
                                                    <small>
                                                        Such an ear warming song it is💜 that era was something phenomenal. It feels like we are living this song... Every broken person can relate to each line of this song.💔 We get separated From the person we love... They leave us.. We move on.. But still it hurts when we remember the time we had w them. Nd then we start missing them.  We start craving for their love, Affection, care, touch... Nd the even more saddest part is knowing that they'd never come back
                                                    </small>
                                                </div>

                                                <div className="d-flex align-items-center gap-3 mt-2">
                                                    <div><i className="ph ph-thumbs-up"></i></div>

                                                    <div>5</div>

                                                    <div><i className="ph ph-thumbs-down"></i></div>

                                                    <button className="btn btn-secondary">Reply</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div>
                                {[1, 2, 3, 4, 5].map(() => (
                                    <div className="d-sm-flex gap-3 mb-3">
                                        <div>
                                            <img className="rounded" src="./asstes/images/vedios/card1.jpg" width="150" height="100" />
                                        </div>

                                        <div>
                                            <div className="fw-bold">
                                                <Link to="/details" className="text-black">
                                                    Joey and Chandler sandwich fight
                                                </Link>
                                            </div>

                                            <div><small>Friends</small></div>

                                            <div>
                                                <small>20 Views . 1 week ago</small>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 mt-5">
                            <div className="d-flex justify-content-center gap-3">
                                <button
                                    className="btn btn-primary"
                                    onClick={previous}
                                    disabled={movieIndex == 0}
                                >
                                    Previous
                                </button>

                                <button
                                    className="btn btn-primary"
                                    onClick={next}
                                    disabled={movieIndex == (movies.length - 1)}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default MovieDetails;
