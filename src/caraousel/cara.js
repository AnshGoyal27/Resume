import '../caraousel/cara.css';
import '../css/other.css'
export const Carousel=()=>{
    return(
        <div id="Project">
            <div id='myCarousel' className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
                    <div className="container">
                    <div className="carousel-caption">
                        <h1>Music Player</h1>
                        <p>Search It. Add It. Play It. <br/>
                            A basic music player which retrieves song from iTunes api and plays it for 30 seconds. <br/>
                            You can also add multiple songs to queue and it plays on automatically.
                        </p>
                        <p><a className="btn btn-lg btn-dark gitbut" href="https://github.com/AnshGoyal27/Music-Player" ><i className="bi bi-github"></i></a></p>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>

                    <div className="container">
                    <div className="carousel-caption">
                        <h1>Bill Prototype</h1>
                        <p>A clone of simple Billing Machine at Malls. <br/>
                            Add items to it and the bill changes dynamically.
                        </p>
                        <p><a className="btn btn-lg btn-dark gitbut" href="https://github.com/AnshGoyal27/Bill-Prototype"><i className="bi bi-github"></i></a></p>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>

                    <div className="container">
                    <div className="carousel-caption">
                        <h1>Dictionary</h1>
                        <p>Search and Learn <br/>
                            Search a word and it retrieves it from Wordnik Api
                        </p>
                        <p><a className="btn btn-lg btn-dark gitbut" href="https://github.com/AnshGoyal27/Dictionary_API"><i className="bi bi-github"></i></a></p>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>

                    <div className="container">
                    <div className="carousel-caption">
                        <h1>ToDo</h1>
                        <p>Just JS <br/>
                            Tend to forget tasks? <br/> 
                            Add them. Sort them. Get Filtered. <br/>
                            And if you want Save It. <br/>
                        </p>
                        <p><a className="btn btn-lg btn-dark gitbut" href="https://github.com/AnshGoyal27/JavaScript_todo_app"><i className="bi bi-github"></i></a></p>
                    </div>
                    </div>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}