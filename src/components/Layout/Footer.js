

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
                                        <a href="#" className="nav-link text-dark py-0 ps-0">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-dark py-0">Terms and Conditions</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-dark py-0">Privicy Policy</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-dark py-0">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-5 text-center text-xl-end" >
                                copyright &copy; 2023 <a href="#">youtube-clone.com.</a>All rights reserved
                            </div>
                        </div>

                    </div>
                </div>
        </footer>
        </>
    );
}

export default Footer;