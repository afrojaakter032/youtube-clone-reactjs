import Layout from "../../components/Layout/Layout";
import CategorySection from "./_CategorySection";
import SliderMovieSection from "./_SliderMovieSection";


function Home() {
    return (
        <>
            <Layout>
                <CategorySection />
                {['now-playing', 'popular', 'top-rated', 'upcoming'].map(type =>(
                    <SliderMovieSection key={`slider-movie-section-${type}`} type={type} />
                ))};
            </Layout>
        </>
    );
}

export default Home;