import {Link} from "react-router-dom"
function Header () {
    const openMenu = () => document.querySelector('.sidebar').classList.add('open')
    return(
        <>
        
        <header className="header ">
                <div className="container-fluid">
                <div className="row justify-content-between px-3">
                    <div className="col">
                        <div className="d-flex align-items-center gap-3">
                            <div>
                                <button className="menu-open-btn btn"
                                    title="menu open"
                                    onClick={openMenu}
                                >
                                    <i className="ph ph-list"></i>
                                </button>
                            </div>
                            <div className="logo">
                                <Link to="/">
                                    <img src="./asstes/images/logo.png" alt="logo" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col search-bar d-none d-lg-block">
                        <div className="d-flex align-items-center justify-content-center gap-3">
                            <div className="search-input-group">
                                <input type="text" className="search-input" id="search" placeholder="Search" />
                                <button className=" btn search-btn">
                                    <i className="ph ph-magnifying-glass"></i>
                                </button>
                            </div>
                            <div className="d-block d-lg-none">
                                <button className="btn btn-circle" title="Close" onClick={() => document.querySelector('.search-bar').classList.remove('show')}>
                                    <i className="ph ph-x"></i>
                                </button>
                            </div>
                            <div>
                            <button className=" btn btn-circle" title="voice">
                                <i className="ph ph-microphone"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex align-item-center justify-content-end gap-3">
                            <div className="d-block d-lg-none ">
                                <button className=" btn btn-circle bg-transparent" title="search"  onClick= {() => document.querySelector('.search-bar').classList.add('show')}>
                                    <i className=" btn ph ph-magnifying-glass"></i>
                                </button>
                            </div>
                        <div className="d-none d-sm-block">
                            <button className=" btn btn-circle bg-transparent" title="vedio">
                                <i  className=" btn ph ph-video-camera"></i>
                            </button>
                        </div>
                            <div className="d-none d-sm-block">
                                <button className=" btn btn-circle bg-transparent" title="notification">
                                    <i className="ph ph-bell"></i>
                                </button>
                            </div>
                            <div className="dropdown">
                                <button className="dropbtn btn btn-circle bg-transparent">
                                    <i className="ph ph-user"></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="#">Log in</a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a className="dropdown-link" href="#">Register</a>
                                    </li>
                                    <li className="dropdown-item d-block d-sm-none">
                                        <a className="dropdown-link" href="#">Video creator</a>
                                    </li>
                                    <li className="dropdown-item d-block d-sm-none">
                                        <a className="dropdown-link" href="#">Notification</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
        
        
        </>
    );
}

export default Header;