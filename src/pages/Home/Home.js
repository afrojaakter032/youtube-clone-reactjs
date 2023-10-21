import Layout from "../../components/Layout/Layout";
import CategorySection from "./_CategorySection";
import MovieSection from "./_MovieSection";

function Home() {
    return (
        <>
            <Layout>
                <CategorySection />

                <MovieSection />
            </Layout>
        </>
    );
}

export default Home;