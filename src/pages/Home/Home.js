import Layout from "../../components/Layout/Layout";
import CategorySection from "./_CategorySection";
import NowPlayingMovie from "./_NowPlayingMovie";

function Home() {
    return (
        <>
            <Layout>
                <CategorySection />

                <NowPlayingMovie />
            </Layout>
        </>
    );
}

export default Home;