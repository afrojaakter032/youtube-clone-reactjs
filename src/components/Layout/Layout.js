import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
function Layout (props) {
    return (
        <>
            < Header />
            <Sidebar />

            
            <main className="main">
                {props.children}

            </main>
            < Footer />
                
        
        </>
    );
}

export default Layout;