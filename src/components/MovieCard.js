import Link from "next/link";


function MovieCard ({movie}) {
    return (
        <>
            <div className="card">
                <div className="card-img">
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="Image" />
                </div>

                <div className="d-flex gap-3 mt-2">
                    <div>
                        <div>
                            <Link href={`/details/${movie.id}`} className="card-title text-primary text-decoration-none">{movie.original_title}</Link>
                        </div>
                        <div className="card-sub-title my-1">{movie.overview.substring(0,40)}...</div>
                        <div className="card-meta">{movie.release_date}</div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default MovieCard;