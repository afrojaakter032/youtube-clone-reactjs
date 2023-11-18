import Layout from "../../components/Layout/Layout";
import TopRatedSection from "./_TopRatedSection";
import CategorySection from "./_CategorySection";
import NowPlayingMovie from "./_NowPlayingMovie";
import PopularMovieSection from "./_PopularMovieSection";
import UpcomingMovieSection from "./_UpcomingMovieSection";


function Home() {
    return (
        <>
            <Layout>
                <CategorySection />

                <NowPlayingMovie />

                <PopularMovieSection />

                <TopRatedSection />

                <UpcomingMovieSection />

            </Layout>
        </>
    );
}

export default Home;