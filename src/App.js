
function App() {
  return (
        <>
           {/* <!-- header section start from here --> */}
            <header class="header ">
                <div class="container-fluid">
                <div class="row justify-content-between px-3">
                    <div class="col">
                        <div class="d-flex align-items-center gap-3">
                            <div class="menu-open-btn">
                                <i class="ph ph-list"></i>
                            </div>
                            <div class="logo">
                                <a href="home.html">
                                    <img src="./asstes/images/logo.png" alt="logo">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col search-bar d-none d-lg-block">
                        <div class="d-flex align-items-center justify-content-center gap-3">
                            <div class="search-input-group">
                                <input type="text" class="search-input" id="search" placeholder="Search">
                                <button class=" btn search-btn">
                                    <i class="ph ph-magnifying-glass"></i>
                                </button>
                            </div>
                            <div class="d-block d-lg-none">
                                <button class="btn btn-circle" title="Close" onclick="document.querySelector('.search-bar').classList.remove('show')">
                                    <i class="ph ph-x"></i>
                                </button>
                            </div>
                            <div>
                            <button class=" btn btn-circle" title="voice">
                                <i class="ph ph-microphone"></i>
                            </button>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="d-flex align-item-center justify-content-end gap-3">
                            <div class="d-block d-lg-none ">
                                <button class=" btn btn-circle bg-transparent" title="search"  onclick="document.querySelector('.search-bar').classList.add('show')">
                                    <i class=" btn ph ph-magnifying-glass"></i>
                                </button>
                            </div>
                        <div class="d-none d-sm-block">
                            <button class=" btn btn-circle bg-transparent" title="vedio">
                                <i  class=" btn ph ph-video-camera"></i>
                            </button>
                        </div>
                            <div class="d-none d-sm-block">
                                <button class=" btn btn-circle bg-transparent" title="notification">
                                    <i class="ph ph-bell"></i>
                                </button>
                            </div>
                            <div class="dropdown">
                                <button class="dropbtn btn btn-circle bg-transparent">
                                    <i class="ph ph-user"></i>
                                </button>
                                <ul class="dropdown-menu">
                                    <li class="dropdown-item">
                                        <a class="dropdown-link" href="#">Log in</a>
                                        <li class="dropdown-item">
                                            <a class="dropdown-link" href="#">Register</a>
                                        </li>
                                        <li class="dropdown-item d-block d-sm-none">
                                            <a class="dropdown-link" href="#">Vedio creator</a>
                                        </li>
                                        <li class="dropdown-item d-block d-sm-none">
                                            <a class="dropdown-link" href="#">Notification</a>
                                        </li>
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
                <div class="sidebar">
                    <button class=" btn menu-close-btn">
                        <i class="ph ph-x"></i>
                    </button>
                    <ul class="sidebar-menu overflow-y-scroll">
                        <li class="sidebar-menu-items">
                            <a href="#" class="sidebar-menu-link active">
                                <div class="sidebar-menu-icon">
                                    <i class="ph ph-house"></i>
                                </div>
                                <div class="sidebar-menu-text" >
                                    Home
                                </div>
                            </a>
                        </li>
                        <li class="sidebar-menu-items">
                            <a href="#" class="sidebar-menu-link">
                                <div class="sidebar-menu-icon">
                                    <i class="ph ph-flag-pennant"></i>
                                </div>
                                <div class="sidebar-menu-text" >
                                    Sports
                                </div>
                            </a>
                        </li>
                        <li class="sidebar-menu-items">
                            <a href="#" class="sidebar-menu-link">
                                <div class="sidebar-menu-icon">
                                    <i class="ph ph-subtitles"></i>
                                </div>
                                <div class="sidebar-menu-text" >
                                    Supscription
                                </div>
                            </a>
                        </li>
                        <li class="sidebar-menu-devider"></li>
                        <li class="sidebar-menu-items">
                            <a href="#" class="sidebar-menu-link">
                                <div class="sidebar-menu-icon">
                                    <i class="ph ph-book"></i>
                                </div>
                                <div class="sidebar-menu-text" >
                                    Library
                                </div>
                            </a>
                        </li>
                        <li class="sidebar-menu-items">
                            <a href="#" class="sidebar-menu-link">
                                <div class="sidebar-menu-icon">
                                    <i class="ph ph-clock-counter-clockwise"></i>
                                </div>
                                <div class="sidebar-menu-text" >
                                    History
                                </div>
                            </a>
                        </li>
                        <li class="sidebar-menu-items">
                            <a href="#" class="sidebar-menu-link">
                                <div class="sidebar-menu-icon">
                                    <i class="ph ph-video"></i>
                                </div>
                                <div class="sidebar-menu-text" >
                                    Your vedios
                                </div>
                            </a>
                        </li>
                        <li class="sidebar-menu-items">
                            <a href="#" class="sidebar-menu-link">
                                <div class="sidebar-menu-icon">
                                    <i class="ph ph-clock"></i>
                                </div>
                                <div class="sidebar-menu-text" >
                                    Watch later
                                </div>
                            </a>
                        </li>
                        <li class="sidebar-menu-items">
                            <a href="#" class="sidebar-menu-link">
                                <div class="sidebar-menu-icon">
                                    <i class="ph ph-thumbs-up"></i>
                                </div>
                                <div class="sidebar-menu-text" >
                                    Liked vedios
                                </div>
                            </a>
                        </li>
                        <li class="sidebar-menu-devider"></li>
                        <li class="sidebar-menu-heading">Subscription</li>
                        <li class="sidebar-menu-items">
                            <a href="#" class="sidebar-menu-link">
                                <div class="sidebar-menu-icon">
                                    <i class="ph ph-user-circle"></i>
                                </div>
                                <div class="sidebar-menu-text" >
                                    Aleena Rais Live
                                </div>
                            </a>
                        </li>
                        <li class="sidebar-menu-devider"></li>
                        <li class="sidebar-menu-heading">Explore</li>
                        <li class="sidebar-menu-items">
                            <a href="#" class="sidebar-menu-link">
                                <div class="sidebar-menu-icon">
                                    <i class="ph ph-trend-up"></i>
                                </div>
                                <div class="sidebar-menu-text" >
                                    Trending
                                </div>
                            </a>
                        </li>
                        <li class="sidebar-menu-items">
                            <a href="#" class="sidebar-menu-link">
                                <div class="sidebar-menu-icon">
                                    <i class="ph ph-music-note"></i>
                                </div>
                                <div class="sidebar-menu-text" >
                                    Music
                                </div>
                            </a>
                        </li>
                        <li class="sidebar-menu-items">
                            <a href="#" class="sidebar-menu-link">
                                <div class="sidebar-menu-icon">
                                    <i class="ph ph-game-controller"></i>
                                </div>
                                <div class="sidebar-menu-text" >
                                    Gameing
                                </div>
                            </a>
                        </li>
                        <li class="sidebar-menu-items">
                            <a href="#" class="sidebar-menu-link">
                                <div class="sidebar-menu-icon">
                                    <i class="ph ph-trophy"></i>
                                </div>
                                <div class="sidebar-menu-text" >
                                    Sports
                                </div>
                            </a>
                        </li>
                        <li class="sidebar-menu-devider"></li>
                    </ul>
                </div>
            </aside>
            {/* <!-- sidebar section ends here --> */}
            <main class="main">
                {/* <!-- category section start from here --> */}
                <section class="categories-section py-3">
                    <div class="d-flex align-item-center gap-3 overflow-x-scroll">
                        <a href="#" class="btn btn-secondary active">All</a>
                        <a href="#" class="btn btn-secondary">Movie</a>
                        <a href="#" class="btn btn-secondary">Mixes</a>
                        <a href="#" class="btn btn-secondary">Music</a>
                        <a href="#" class="btn btn-secondary">Reservation</a>
                        <a href="#" class="btn btn-secondary">Lo-fi</a>
                        <a href="#" class="btn btn-secondary">Filmi</a>
                        <a href="#" class="btn btn-secondary">Natok</a>
                        <a href="#" class="btn btn-secondary">Javascript</a>
                        <a href="#" class="btn btn-secondary">Podcasts</a>
                        <a href="#" class="btn btn-secondary">Database</a>
                        <a href="#" class="btn btn-secondary">Storytelling</a>
                        <a href="#" class="btn btn-secondary">Lectures</a>

                    </div>

                </section>


                {/* <!-- category section ends here --> */}
                {/* <!-- vedio section start from here --> */}
                <section class="vedio-section px-3 mt-5">
                    <div class="row g-3">
                        <div class="col-md-3">
                            <div class="card">
                                <div class="card-img">
                                    <img src="./asstes/images/vedios/card1.jpg" alt="image">

                                </div>
                                <div class="d-flex gap-3">
                                    <div class="card-user-logo">
                                        <img src="./asstes/images/user2.png" alt="user">
                                    </div>
                                    <div>
                                        <div class="card-title">Black Adam-Official trailer</div>
                                        <div class="card-sub-title">The world needed a hero.</div>
                                        <div class="card-meta">31M . 1 month ago</div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="col-md-3">   
                            <div class="card">
                                <div class="card-img">
                                    <img src="./asstes/images/vedios/card1.jpg" alt="image">

                                </div>
                                <div class="d-flex gap-3">
                                    <div class="card-user-logo">
                                        <img src="./asstes/images/user2.png" alt="user">


                                    </div>
                                    <div>
                                        <div class="card-title">Black Adam-Official trailer</div>
                                        <div class="card-sub-title">The world needed a hero.</div>
                                        <div class="card-meta">31M . 1 month ago</div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card">
                                <div class="card-img">
                                    <img src="./asstes/images/vedios/card1.jpg" alt="image">

                                </div>
                                <div class="d-flex gap-3">
                                    <div class="card-user-logo">
                                        <img src="./asstes/images/user2.png" alt="user">


                                    </div>
                                    <div>
                                        <div class="card-title">Black Adam-Official trailer</div>
                                        <div class="card-sub-title">The world needed a hero.</div>
                                        <div class="card-meta">31M . 1 month ago</div>
                                    </div>

                                </div>

                            </div>
                        </div> 
                        <div class="col-md-3">  
                            <div class="card">
                                <div class="card-img">
                                    <img src="./asstes/images/vedios/card1.jpg" alt="image">

                                </div>
                                <div class="d-flex gap-3">
                                    <div class="card-user-logo">
                                        <img src="./asstes/images/user2.png" alt="user">


                                    </div>
                                    <div>
                                        <div class="card-title">Black Adam-Official trailer</div>
                                        <div class="card-sub-title">The world needed a hero.</div>
                                        <div class="card-meta">31M . 1 month ago</div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="col-md-3">     
                            <div class="card">
                                <div class="card-img">
                                    <img src="./asstes/images/vedios/card1.jpg" alt="image">

                                </div>
                                <div class="d-flex gap-3">
                                    <div class="card-user-logo">
                                        <img src="./asstes/images/user2.png" alt="user">


                                    </div>
                                    <div>
                                        <div class="card-title">Black Adam-Official trailer</div>
                                        <div class="card-sub-title">The world needed a hero.</div>
                                        <div class="card-meta">31M . 1 month ago</div>
                                    </div>

                                </div>

                            </div>
                        </div> 
                        <div class="col-md-3">   
                            <div class="card">
                                <div class="card-img">
                                    <img src="./asstes/images/vedios/card1.jpg" alt="image">

                                </div>
                                <div class="d-flex gap-3">
                                    <div class="card-user-logo">
                                        <img src="./asstes/images/user2.png" alt="user">


                                    </div>
                                    <div>
                                        <div class="card-title">Black Adam-Official trailer</div>
                                        <div class="card-sub-title">The world needed a hero.</div>
                                        <div class="card-meta">31M . 1 month ago</div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card">
                                <div class="card-img">
                                    <img src="./asstes/images/vedios/card1.jpg" alt="image">

                                </div>
                                <div class="d-flex gap-3">
                                    <div class="card-user-logo">
                                        <img src="./asstes/images/user2.png" alt="user">


                                    </div>
                                    <div>
                                        <div class="card-title">Black Adam-Official trailer</div>
                                        <div class="card-sub-title">The world needed a hero.</div>
                                        <div class="card-meta">31M . 1 month ago</div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card">
                                <div class="card-img">
                                    <img src="./asstes/images/vedios/card1.jpg" alt="image">

                                </div>
                                <div class="d-flex gap-3">
                                    <div class="card-user-logo">
                                        <img src="./asstes/images/user2.png" alt="user">


                                    </div>
                                    <div>
                                        <div class="card-title">Black Adam-Official trailer</div>
                                        <div class="card-sub-title">The world needed a hero.</div>
                                        <div class="card-meta">31M . 1 month ago</div>
                                    </div>

                                </div>

                            </div>
                        </div>    


                        </div>

                </section>

                {/* <!-- vedio section ends here --> */}

            </main>
            <footer class="footer">
                <div class="px-3 my-5">
                    <div class="card border py-5 px-3">
                        <div class="row">
                            <div class="col-xl-7">
                                <ul class="nav footer-menu justify-content-center justify-content-xl-start">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link text-dark py-0 ps-0">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link text-dark py-0">Terms and Conditions</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link text-dark py-0">Privicy Policy</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link text-dark py-0">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-xl-5 text-center text-xl-end" >
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
