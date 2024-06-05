import { Link } from "react-router-dom";

function Sidebar () {
    const closeMenu = () => document.querySelector('.sidebar').classList.remove('open')
    return (
        <>
        <aside>
                
                <div className="sidebar">
                    <button className=" btn menu-close-btn"
                        title="menu close"
                        onClick={closeMenu}

                    >
                        <i className="ph ph-x"></i>
                    </button>
                    <ul className="sidebar-menu overflow-y-scroll">
                        <li className="sidebar-menu-items">
                            <Link to="/" className="sidebar-menu-link active">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-house"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    Home
                                </div>
                            </Link>
                        </li>
                        <li className="sidebar-menu-items">
                            <Link to="/" className="sidebar-menu-link">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-flag-pennant"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    Sports
                                </div>
                            </Link>
                        </li>
                        <li className="sidebar-menu-items">
                            <Link to="/" className="sidebar-menu-link">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-subtitles"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    Supscription
                                </div>
                            </Link>
                        </li>
                        <li className="sidebar-menu-devider"></li>
                        <li className="sidebar-menu-items">
                            <Link to="/" className="sidebar-menu-link">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-book"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    Library
                                </div>
                            </Link>
                        </li>
                        <li className="sidebar-menu-items">
                            <Link to="/" className="sidebar-menu-link">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-clock-counter-clockwise"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    History
                                </div>
                            </Link>
                        </li>
                        <li className="sidebar-menu-items">
                            <Link to="/" className="sidebar-menu-link">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-video"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    Your vedios
                                </div>
                            </Link>
                        </li>
                        <li className="sidebar-menu-items">
                            <Link to="/" className="sidebar-menu-link">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-clock"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    Watch later
                                </div>
                            </Link>
                        </li>
                        <li className="sidebar-menu-items">
                            <Link to="/" className="sidebar-menu-link">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-thumbs-up"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    Liked vedios
                                </div>
                            </Link>
                        </li>
                        <li className="sidebar-menu-devider"></li>
                        <li className="sidebar-menu-heading">Subscription</li>
                        <li className="sidebar-menu-items">
                            <Link to="/" className="sidebar-menu-link">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-user-circle"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    Aleena Rais Live
                                </div>
                            </Link>
                        </li>
                        <li className="sidebar-menu-devider"></li>
                        <li className="sidebar-menu-heading">Explore</li>
                        <li className="sidebar-menu-items">
                            <Link to="/" className="sidebar-menu-link">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-trend-up"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    Trending
                                </div>
                            </Link>
                        </li>
                        <li className="sidebar-menu-items">
                            <Link to="/" className="sidebar-menu-link">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-music-note"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    Music
                                </div>
                            </Link>
                        </li>
                        <li className="sidebar-menu-items">
                            <Link to="/" className="sidebar-menu-link">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-game-controller"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    Gameing
                                </div>
                            </Link>
                        </li>
                        <li className="sidebar-menu-items">
                            <Link to="/" className="sidebar-menu-link">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-trophy"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    Sports
                                </div>
                            </Link>
                        </li>
                        <li className="sidebar-menu-devider"></li>
                    </ul>
                </div>
        </aside>
                
        
        </>
    );
}

export default Sidebar;