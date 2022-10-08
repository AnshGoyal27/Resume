import '../css/other.css'
export const Navbar=()=>{
    function collapse(){
        document.getElementById('navbutton').ariaExpanded='false';
        document.getElementById('navbutton').className='navbar-toggler collapsed';
        document.getElementById('navbarCollapse').className='collapse navbar-collapse';

    }
    return(
        <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                <a className="navbar-brand" href="#root">Ansh Goyal</a>
                <button id='navbutton' className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <a className="nav-link active navtext" href="#Profile" onClick={collapse}>Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active navtext" href="#Tech" onClick={collapse}>Tech</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active navtext" href="#Experience" onClick={collapse}>Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active navtext" href="#Project" onClick={collapse}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active navtext" href='#College' onClick={collapse}>College</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active navtext" href='#School' onClick={collapse}>School</a>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    )
}