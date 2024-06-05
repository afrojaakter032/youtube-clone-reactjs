import { Link } from "react-router-dom";


function Footer () {
    return (
        <>
        <footer className="footer">
                <div className="px-3 my-5">
                    <div className="card border py-5 px-3">
                        <div className="row">
                            <div className="col-xl-7">
                                <ul className="nav footer-menu justify-content-center justify-content-xl-start">
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link text-dark py-0 ps-0">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/terms" className="nav-link text-dark py-0">Terms and Conditions</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/privicy" className="nav-link text-dark py-0">Privicy Policy</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact" className="nav-link text-dark py-0">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-5 text-center text-xl-end" >
                                copyright &copy; 2023 <Link to="/">youtube-clone.com.</Link>All rights reserved
                            </div>
                        </div>

                    </div>
                </div>
        </footer>
        </>
    );
}

export default Footer;