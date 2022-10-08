import MAIT from '../samples/MAIT.jpeg'
export const Featurette=()=>{
    return(
        <div>
            <hr className="featurette-divider" id='Profile'/>
            <div className="row featurette">
                <div className="col-md-7">
                    <h1 className="display-1">Profile</h1><h3><span className="display-5 text-muted"> Get to know me</span></h3>
                    <span className="lead">
                        <ul>
                            <li><b><b>Name:</b></b> Ansh Goyal</li>
                            <li><b><b>DOB:</b></b> 27th October 2003</li>
                            <li><b><b>Address:</b></b> Lok Vihar, Pitampura, New Delhi - 110034</li>
                            <li>
                                <b><b>Contacts:</b></b>
                                <ul>
                                    <li><i className="bi bi-phone"></i> 9582821205</li>
                                    <li><a href="https://www.linkedin.com/in/ansh-goyal-211623228" className='linktext'><i className="bi bi-linkedin"></i> Ansh Goyal</a></li>
                                    <li><a href="https://instagram.com/anshgoyal27?igshid=YmMyMTA2M2Y=" className='linktext'><i className="bi bi-instagram"></i> @anshgoyal27</a></li>
                                    <li><a href="https://github.com/AnshGoyal27" className='linktext'><i className="bi bi-github"></i> AnshGoyal27</a></li>
                                    <li><a href="mailto:anshgoyal.cse@gmail.com" className='linktext'><i className="fa-brands fa-google"></i> anshgoyal.cse@gmail.com</a></li>
                                    <li><i className="fa-brands fa-playstation"></i> AayGee27</li>
                                </ul>
                            </li>
                            <li>
                                <b><b>Languages Known:</b></b>
                                <ul>
                                    <li>Hindi</li>
                                    <li>English</li>
                                </ul>
                            </li>
                            <li>
                                <b><b>Soft Skills:</b></b>
                                <ul>
                                    <li>Leadership</li>
                                    <li>Communication</li>
                                    <li>Time Management</li>
                                    <li>Decision Making</li>
                                    <li>Adaptability</li>
                                </ul>
                            </li>
                            <li>
                                <b><b>Weaknesses:</b></b>
                                <ul>
                                    <li>Overly Analytical</li>
                                    <li>Self-critical</li>
                                    <li>Trouble saying “no”</li>
                                    <li>Foreign languages</li>
                                    <li>Being too honest</li>
                                </ul>
                            </li>
                        </ul>
                    </span>
                </div>
                <div className="col-md-5">
                    {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="/Users/anishgoyal/Desktop/photos/WhatsApp Image 2022-08-01 at 7.12.43 PM.jpeg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt='' src="https://avatars.githubusercontent.com/u/110151117?v=4"></img>
                </div>
            </div>

            <hr className="featurette-divider" id='Tech'/>

            <div className="row featurette" >
                <div className="col-md-7 order-md-2">
                    <h1 className="display-1">Tech Stack</h1><h3><span className="display-5 text-muted"> What do I do to try and get a Job</span></h3>
                    <span className="lead">
                        <ul>
                            <li>
                                <b><b>Languages Known:</b></b>
                                <ul>
                                    <li><i className="fa-brands fa-python"></i> Python
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width:'60%',backgroundColor:'grey'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </li>
                                    <li><i className="fa-solid fa-c"></i> C
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width:'80%',backgroundColor:'grey'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </li>
                                    <li><i className="fa-brands fa-js"></i> JavaScript
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width:'90%',backgroundColor:'grey'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </li>
                                    <li><i className="fa-brands fa-html5"></i> HTML
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width:'70%',backgroundColor:'grey'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li><b><b>Technologies Worked on:</b></b>
                                <ul>
                                    <li><i className="fa-solid fa-database"></i><b> MONGO DB</b> -Document Database
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width:'60%',backgroundColor:'grey'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </li>
                                    <li><i className="fa-brands fa-js"></i><b> EXPRESS(.js)</b> -Node.js Web Framework
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width:'80%',backgroundColor:'grey'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </li>
                                    <li><i className="fa-brands fa-react"></i><b> REACT(.js)</b> -Client Side JavaScript Framework
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width:'90%',backgroundColor:'grey'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </li>
                                    <li><i className="fa-brands fa-node-js"></i><b> NODE(.js)</b> -Premier JavaScript Web Server
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width:'80%',backgroundColor:'grey'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </li>
                                    <li><i className="fa-brands fa-bootstrap"></i><b> BOOTSTRAP</b> -Premier JavaScript Web Server
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width:'90%',backgroundColor:'grey'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <b><b>Performance on Code Hubs:</b></b>
                                <ul>
                                    <li>
                                        <a href='https://www.hackerrank.com/anshgoyal27' className='linktext'><i className="fa-brands fa-hackerrank"></i><b> HackerRank</b></a>
                                        <ul>
                                            <li>Python <i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i></li>
                                            <li>C <i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href='http://www.codechef.com/users/ag_27' className='linktext'><img alt='' src='https://img.icons8.com/ios/344/codechef.png' height='25' width='25'></img><b> CodeChef </b></a><i className="fa-regular fa-star"></i><i className="fa-regular fa-star"></i>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </span>
                </div>
                <div className="col-md-5 order-md-1">
                    {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="https://mae.mait.ac.in/images/logo_small_trans.png" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt='' src='https://media.istockphoto.com/vectors/web-design-icon-vector-id1245658116?k=20&m=1245658116&s=612x612&w=0&h=ZpwZhpL1KAwBZVVg36MUWiHF3zQHkZYfdjy8284YGjQ=' width='500' height='500'></img>

                </div>
            </div>

            <hr className="featurette-divider" id='Experience'/>

            <div className="row featurette" >
                <div className="col-md-7">
                    <h1 className="display-1">EXPERIENCE</h1><h3><span className="display-5 text-muted"> Learned from Real Life</span></h3>
                    <span className="lead">
                        <ul>
                            <li>
                                <b><b>TRAININGS:</b></b>
                                <ul>
                                    <li><b>MERN Stack</b> -Brain Mentors</li>
                                </ul>
                            </li>
                            <li>
                                <b><b>INTERNSHIPS</b></b>
                            </li>
                        </ul>
                    </span>
                </div>
                <div className="col-md-5">
                    {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="https://mae.mait.ac.in/images/logo_small_trans.png" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                    <img 
                    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                    alt=''
                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAACMjIwiIiLs7Ow8PDxPT09SUlImJibPz89/f3/7+/tBQUHV1dWysrLn5+f09PRtbW3Dw8OampqsrKyfn58zMzPx8fHZ2dljY2O3t7cdHR0RERF5eXmPj4/h4eFISEhgYGAXFxeDg4N6enpZWVlxcXGlpaU2NjYzyHkYAAAKAklEQVR4nO2da5eqOgyGAW8gXkBUEBVQZnT+/y88gLLl1pJCKuWsvh/3ckOeAUKaJkFRpKSkpKSkpKSkpKSkxJS59R3tcbODYBNaQxuDL8t/TNSPLvZmOrRJqNpqZ7Wqy084tFl4imt4L9n/k5t1R+BLtRnaOAwtKYCqehr9ZTQXVEBVXW2HNrGnVi2AiccZNaIZtQImGvONakMA1Zk5tJ2ddQABqurP0IZ2VQgEVNXd0KZ2FOghzKQPbWo30d70VR2GNraTdAZCdWhju8hgAVT3Q5vbQScmwuPQ5rLLvTARquNbSrH4mVTPoQ1mFmlNSNLv0AYz65eRcHQPonVkJFTHtsSYsgKq3tAmM2rLTGgMbTKjJKEkFF/snmY9tMmMsphWFqlGF7a1ZRGr0keXrLkyEs6HNphZrJH3+Fb5U8bV09hCGoU19J4MbW4Hsd2m47tJE91ZCEfnSVP5DIDB0MZ2E3yJeB/p5gw8nzjarWANCHga2tDumoMAz2hu5pDERi7WwUByJ+18iBkaK3XfMdbRYIJENnjRTLYoXaIdDnjS1lUUYriWBRk+3vFgsujR2wyz+MtJjzjASvpJAdRQz/STHPEyRL3clrQNtUD+e6elLX+4h4TKaCrKWGDv3pvpUb+8/zE1DOP1Lpgeyi7nHODnZab49z1Vpn/Lvck+Czvd3dOOZrPZynZ2XB6WzJV+r6xjn1aUzp21560PKzX4xuroq650m1aa/IbK2rleHUMJb984c/awf2mV4qXnOij797N3dpLFIv83cXrXXLifJdM6xfLNQl2i7hr8Eb/nSjPAQCmXdm/DCed0WlZk5vA9R+FMf8pNLWtnxnzdzdeiUjfj8esLfN5vqqwS8htp1yw7czGrlzDRim/ImMWGXM9QOI8amXVAlXPRTOq4v1DkGLxQYsL+4Zzfa9FKF9s2t8PnyhPdATHPFvN6JWcenLsrdXOOgFwffOFkxXdc6b+q4JNLJEwYuTyO2fPBu+zos5rXlRkFMYno8HN+mYvjHJUW6y88h0qoqkvsN1caI0bIx6yquHX/MFvziPMN5oXM8pYPxAM2aFOy34PsWth469XMtfHdwqr4lru5aWKq6bTBeXayvTy+C/yfiulH8AZipCFkNbJdIK41OfUXoD71gIgp5WO/7uXq0wX+nWvg21AhdFlb9HdGVcf59bkzOjV6m+mZImSmkpr9yr5278J0mazm88X15zqfnxzQw2Wl/w0vKg0dTXPK7zNCj9OJuXKoQRNALIa7wH9fr+LWNJFD91y21pJG2a3Zgcxxo7nS9503K/wTZYMpYCrKIOjWZlMWlaKFScsa4Zpm3TEE9pLS1HYDpjfKBS0PVCdsIYiVkM2pNqglwktjNryWjRpha0HwxVc2zCW1ZbWUhaU/wXOlNcKg3cCHYh4YqxXLWlBNyh4TvGVnjRBgYHp2q21FRdORGgfgutIaIeSV936MnvUZJ0DRd6+RF/hVQkAl6cfb7+D9zyVNqK4mixnRAKuEkMaD4iPixV0uZEQ1Kf0FYvdbhXAPsK98A1k79jiHWuqUrU2v3AgBfQfH2rvY2sBq3v6JGq9kcSRimXGZENL/0/ym8m347Up/12Ev8MuEkKiT+KZaP2+gSKAlIMssQsxrlQkfAANpXVtW+Ly2+ddJy4sgixoRdydLhCbkTmvNn1jhJrCJV7O13HAN+RGDSoSQXAy4p8k1/L1zXaz0UoB3/F3M6VrYe9Q0W4kQEomtWM/QvPtIE27dbIkQ0hrDXCBBXW82KuJHCDk9c7KdvQMVd2u0SAhKibIn21lXIcgz0YqEoNT96DpiioSg8RflhhFPG0YM3rZICMq/lI7N7kWwBJ/yUyQEHbpE2Geh30/wRtwCIWxgWSksHRkhLGdfSnaOjBC2C1qqaBsZIaw7rfQ6ho4axBc8tCoQ3kCHLuU6zfaBn5wEjwoKhLDE2az8/93pdOoi7LoB9WdNM4H5SoSwRthJQzaXbWBdH83qJ4cTWqD+wsYV8EgIoWuAhizGSAihE0obEn0jIYSWkzSs3oQmfO9yH+GEDZOChSZ8p/FjBjPrrlpoQmVzfpfBgs2M/d3aK2GKTZhuVaw6mXlZ2cFhY7hm/l/1CU91J5wnhGavC+G/FsL0veu+soYk3LwI54rBsTR7KgDhQkmO5PBq5RGDMNus0A9cmr4EIkwUcCizRyDsnjerEap3/G4QBEL27DuZEHUj/iUEQoZBSQBC9Ek8GISda0cbCbH7JTAIYbk2MCHy8HkMQvYxpXTChhB9YMLOtymJEHVCEAohQ0sFiBC1+wyFsOtFJBJiDlDEIez4SiQSYk6fxyEEFe4xEGK2gSIRgoqiGAgRC2OwCJk/g0AnRPSmaIRdEMmEEQ5dKjxC5s910AgRx14jErL3b5EJEdskMQkVEzrJs50QL6eBSqgorvNXM7aU2tOLg4UphHifEOhBuGiuN9zur7+z4/EYnbTdNt2ULP8V0p3KMPTWu31wNciEeANpOxP6cWLWZFlXrGmxnegRazFJyzeAQSTEm5vRlbBvqcGjhRBvFlFXws6Zi7de/T1kQrx0TVfCvq2E9xZCvFRGV8K+JT+v7VKRCZUNpcQxeFkckH/xTm8LTUjVq0eo/XdkQrycIh/CeW/C1r5tsCRhN0nCXGRCvMYCUQlF96WSMJckxJCohMOvLeiShLlEXgHT1Z8Qb5dUVEIB8jRU9SfEG1MrCbupP6EQGWGK+hMKkdWnqD8h3hapoIRnvPkWghKKsbtGUW9CRIMEJYzwbBGUEPEbHIISItYnCkqIOIBBUELEAkxBCcWoGKJIEuYiEiK2lwhKiFglLCghoi1iEmJ+VowPYdSTkHkuGEX4hOY6eM97dLy2FQKJELOrBJnQ8h9Fa3V7Ry1KJxFizpTCJAyfTfM8oid5vU4ixOwpwSK0jPiuknTWjOZLSSLE7GBDIQz37e0Ip33DpSQRYn7UqzehaWjQsceruGo5iVCQjhIldSynxgnkkTMNGrnvJ79oPYkQgyxXH8KwaWqp/tjkQaW3aZxGqn9yoQRCzIaSXoTVT4+cF9qu+rBtd/GiOr/ms4AnEKIOIMQiPD6eHinH6XrPR7Fas5UQ9Ws/fQivb4NWgT9ti15M19fyt+WnVqaZELU5rxfhq/tgAU/emi/v81neNhLquC3rvXzpq4y2PomcIPN1q0aff8kJi8GCjvxFvT6E+XcAoXvueTfGZ4Lii3Cu+B9EG3voQB/CvBL6D/j7/Dn8pHtzQsV6Zjfw/Yr/idI+hP/+8LCfW7k/jf790z/CROZ2bfIYjNGH8Pa2GDpfJu9uq/pS+LDGLupDmA/EgKb+8s6vT8dPWCHmIbPyZDDJYXI0+cd2iqNadz/Lpcb5u6HGMjlHVwftabeAxTestVPwjY9mS0lJSUlJSUlJSUlJfVP/AeyZlZ8OPwCkAAAAAElFTkSuQmCC' 
                    width='500' height='500'></img>
                </div>
            </div>

            <hr className="featurette-divider" id='College'/>

            <div className="row featurette" >
                <div className="col-md-7 order-md-2">
                    <h1 className="display-1">Maharaja Agrasen Institute of Technology</h1><h3><span className="display-5 text-muted"> Bachelor of Technology 2021-25</span></h3>
                    <span className="lead">
                        <ul>
                            <li>
                                <b><b>CGPA's:</b></b>
                                <ul>
                                    <li><b>Semester 1:</b> 9.880</li>
                                </ul>
                            </li>
                            <li>
                                <b><b>Societies:</b></b>
                                <ul>
                                    <li><b>TechCOM:</b> Core Team Member</li>
                                    <li><b>Google Developer Student Club:</b> Social Media Manager</li>
                                    <li><b>CodeChef Chapter MAIT:</b> Event Handling Team</li>
                                </ul>
                            </li>
                            <li>
                                <b><b>Organisational Work:</b></b>
                                <ul>
                                    <li><b>Smart Cities Challenges, Technologies and Trends (SCCTT-2022)</b> -Symposium</li>
                                </ul>
                            </li>
                        </ul>
                    </span>
                </div>
                <div className="col-md-5 order-md-1">
                    {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="https://mae.mait.ac.in/images/logo_small_trans.png" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt='' src={MAIT} width='500' height='500'></img>

                </div>
            </div>

            <hr className="featurette-divider" id='School'/>

            <div className="row featurette" >
                <div className="col-md-7">
                <h1 className="display-1">Apeejay School, Pitampura</h1><h3><span className="display-5 text-muted"></span></h3>
                    <span className="lead">
                        <ul>
                            <li><b><b>Dignitary Positions:</b></b> 2x Virtue House Prefect</li>
                            <li>
                                <b><b>Board Results:</b></b>
                                <ul>
                                    <li><b>Class 12:</b>
                                        <ul>
                                            <li><b>Percentage:</b> 94.3</li>
                                            <li><b>English Core:</b> 95</li>
                                            <li><b>Mathematics:</b> 93</li>
                                            <li><b>Physics:</b> 92</li>
                                            <li><b>Chemistry:</b> 94</li>
                                            <li><b>Computer Science:</b> 97</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Class 10:</b>
                                        <ul>
                                            <li><b>Percentage:</b> 91.4</li>
                                            <li><b>English Comm.:</b> 88</li>
                                            <li><b>Mathematics:</b> 95</li>
                                            <li><b>Hindi Course-B:</b> 93</li>
                                            <li><b>Social Science:</b> 93</li>
                                            <li><b>Science:</b> 88</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </span>
                </div>
                <div className="col-md-5">
                    {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}
                    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" alt='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_nfO0Xjt7f2QZiTFiWmV0MikvAIsD8fDKxA&usqp=CAU" width='500' height='500'></img>
                </div>
            </div>

            <hr className="featurette-divider"/>


        </div>
    )
}