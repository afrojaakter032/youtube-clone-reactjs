
function App() {
  return (
        <>
           {/* <!-- header section start from here --> */}
            <header className="header ">
                <div className="container-fluid">
                <div className="row justify-content-between px-3">
                    <div className="col">
                        <div className="d-flex align-items-center gap-3">
                            <div className="menu-open-btn">
                                <i className="ph ph-list"></i>
                            </div>
                            <div className="logo">
                                <a href="home.html">
                                    <img src="./asstes/images/logo.png" alt="logo" />
                                </a>
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
            {/* <!-- header section end here --> */}
            <aside>
                {/* <!-- sidebar section start from here --> */}
                <div className="sidebar">
                    <button className=" btn menu-close-btn">
                        <i className="ph ph-x"></i>
                    </button>
                    <ul className="sidebar-menu overflow-y-scroll">
                        <li className="sidebar-menu-items">
                            <a href="#" className="sidebar-menu-link active">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-house"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    Home
                                </div>
                            </a>
                        </li>
                        <li className="sidebar-menu-items">
                            <a href="#" className="sidebar-menu-link">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-flag-pennant"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    Sports
                                </div>
                            </a>
                        </li>
                        <li className="sidebar-menu-items">
                            <a href="#" className="sidebar-menu-link">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-subtitles"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    Supscription
                                </div>
                            </a>
                        </li>
                        <li className="sidebar-menu-devider"></li>
                        <li className="sidebar-menu-items">
                            <a href="#" className="sidebar-menu-link">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-book"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    Library
                                </div>
                            </a>
                        </li>
                        <li className="sidebar-menu-items">
                            <a href="#" className="sidebar-menu-link">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-clock-counter-clockwise"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    History
                                </div>
                            </a>
                        </li>
                        <li className="sidebar-menu-items">
                            <a href="#" className="sidebar-menu-link">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-video"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    Your vedios
                                </div>
                            </a>
                        </li>
                        <li className="sidebar-menu-items">
                            <a href="#" className="sidebar-menu-link">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-clock"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    Watch later
                                </div>
                            </a>
                        </li>
                        <li className="sidebar-menu-items">
                            <a href="#" className="sidebar-menu-link">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-thumbs-up"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    Liked vedios
                                </div>
                            </a>
                        </li>
                        <li className="sidebar-menu-devider"></li>
                        <li className="sidebar-menu-heading">Subscription</li>
                        <li className="sidebar-menu-items">
                            <a href="#" className="sidebar-menu-link">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-user-circle"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    Aleena Rais Live
                                </div>
                            </a>
                        </li>
                        <li className="sidebar-menu-devider"></li>
                        <li className="sidebar-menu-heading">Explore</li>
                        <li className="sidebar-menu-items">
                            <a href="#" className="sidebar-menu-link">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-trend-up"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    Trending
                                </div>
                            </a>
                        </li>
                        <li className="sidebar-menu-items">
                            <a href="#" className="sidebar-menu-link">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-music-note"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    Music
                                </div>
                            </a>
                        </li>
                        <li className="sidebar-menu-items">
                            <a href="#" className="sidebar-menu-link">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-game-controller"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    Gameing
                                </div>
                            </a>
                        </li>
                        <li className="sidebar-menu-items">
                            <a href="#" className="sidebar-menu-link">
                                <div className="sidebar-menu-icon">
                                    <i className="ph ph-trophy"></i>
                                </div>
                                <div className="sidebar-menu-text" >
                                    Sports
                                </div>
                            </a>
                        </li>
                        <li className="sidebar-menu-devider"></li>
                    </ul>
                </div>
            </aside>
            {/* <!-- sidebar section ends here --> */}
            <main className="main">
                {/* <!-- category section start from here --> */}
                <section className="categories-section py-3">
                    <div className="d-flex align-item-center gap-3 overflow-x-scroll">
                        <a href="#" className="btn btn-secondary active">All</a>
                        <a href="#" className="btn btn-secondary">Movie</a>
                        <a href="#" className="btn btn-secondary">Mixes</a>
                        <a href="#" className="btn btn-secondary">Music</a>
                        <a href="#" className="btn btn-secondary">Reservation</a>
                        <a href="#" className="btn btn-secondary">Lo-fi</a>
                        <a href="#" className="btn btn-secondary">Filmi</a>
                        <a href="#" className="btn btn-secondary">Natok</a>
                        <a href="#" className="btn btn-secondary">Javascript</a>
                        <a href="#" className="btn btn-secondary">Podcasts</a>
                        <a href="#" className="btn btn-secondary">Database</a>
                        <a href="#" className="btn btn-secondary">Storytelling</a>
                        <a href="#" className="btn btn-secondary">Lectures</a>

                    </div>

                </section>


                {/* <!-- category section ends here --> */}
                {/* <!-- vedio section start from here --> */}
                <section className="vedio-section px-3 mt-5">
                    <div className="row g-3">
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-img">
                                    <img src="./asstes/images/vedios/card1.jpg" alt="image" />

                                </div>
                                <div className="d-flex gap-3">
                                    <div className="card-user-logo">
                                        <img src="./asstes/images/user2.png" alt="user" />
                                    </div>
                                    <div>
                                        <div className="card-title">Black Adam-Official trailer</div>
                                        <div className="card-sub-title">The world needed a hero.</div>
                                        <div className="card-meta">31M . 1 month ago</div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="col-md-3">   
                            <div className="card">
                                <div className="card-img">
                                    <img src="./asstes/images/vedios/card1.jpg" alt="image" />

                                </div>
                                <div className="d-flex gap-3">
                                    <div className="card-user-logo">
                                        <img src="./asstes/images/user2.png" alt="user" />


                                    </div>
                                    <div>
                                        <div className="card-title">Black Adam-Official trailer</div>
                                        <div className="card-sub-title">The world needed a hero.</div>
                                        <div className="card-meta">31M . 1 month ago</div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-img">
                                    <img src="./asstes/images/vedios/card1.jpg" alt="image" />

                                </div>
                                <div className="d-flex gap-3">
                                    <div className="card-user-logo">
                                        <img src="./asstes/images/user2.png" alt="user" />


                                    </div>
                                    <div>
                                        <div className="card-title">Black Adam-Official trailer</div>
                                        <div className="card-sub-title">The world needed a hero.</div>
                                        <div className="card-meta">31M . 1 month ago</div>
                                    </div>

                                </div>

                            </div>
                        </div> 
                        <div className="col-md-3">  
                            <div className="card">
                                <div className="card-img">
                                    <img src="./asstes/images/vedios/card1.jpg" alt="image" />

                                </div>
                                <div className="d-flex gap-3">
                                    <div className="card-user-logo">
                                        <img src="./asstes/images/user2.png" alt="user" />


                                    </div>
                                    <div>
                                        <div className="card-title">Black Adam-Official trailer</div>
                                        <div className="card-sub-title">The world needed a hero.</div>
                                        <div className="card-meta">31M . 1 month ago</div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="col-md-3">     
                            <div className="card">
                                <div className="card-img">
                                    <img src="./asstes/images/vedios/card1.jpg" alt="image" />

                                </div>
                                <div className="d-flex gap-3">
                                    <div className="card-user-logo">
                                        <img src="./asstes/images/user2.png" alt="user" />


                                    </div>
                                    <div>
                                        <div className="card-title">Black Adam-Official trailer</div>
                                        <div className="card-sub-title">The world needed a hero.</div>
                                        <div className="card-meta">31M . 1 month ago</div>
                                    </div>

                                </div>

                            </div>
                        </div> 
                        <div className="col-md-3">   
                            <div className="card">
                                <div className="card-img">
                                    <img src="./asstes/images/vedios/card1.jpg" alt="image" />

                                </div>
                                <div className="d-flex gap-3">
                                    <div className="card-user-logo">
                                        <img src="./asstes/images/user2.png" alt="user" />


                                    </div>
                                    <div>
                                        <div className="card-title">Black Adam-Official trailer</div>
                                        <div className="card-sub-title">The world needed a hero.</div>
                                        <div className="card-meta">31M . 1 month ago</div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-img">
                                    <img src="./asstes/images/vedios/card1.jpg" alt="image" />

                                </div>
                                <div className="d-flex gap-3">
                                    <div className="card-user-logo">
                                        <img src="./asstes/images/user2.png" alt="user" />


                                    </div>
                                    <div>
                                        <div className="card-title">Black Adam-Official trailer</div>
                                        <div className="card-sub-title">The world needed a hero.</div>
                                        <div className="card-meta">31M . 1 month ago</div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-img">
                                    <img src="./asstes/images/vedios/card1.jpg" alt="image" />

                                </div>
                                <div className="d-flex gap-3">
                                    <div className="card-user-logo">
                                        <img src="./asstes/images/user2.png" alt="user" />


                                    </div>
                                    <div>
                                        <div className="card-title">Black Adam-Official trailer</div>
                                        <div className="card-sub-title">The world needed a hero.</div>
                                        <div className="card-meta">31M . 1 month ago</div>
                                    </div>

                                </div>

                            </div>
                        </div>    


                        </div>

                </section>

                {/* <!-- vedio section ends here --> */}

            </main>
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

export default App;
