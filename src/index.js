import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './bootstrap.min.css'

function App(){
    return(
        <section>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Profile/>
                    </div>
                    <div className="col-md-8">
                        <About/>
                        <Skills/>
                        <Experience/>
                        <Education/>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </section>
    );
}

function Navbar(props){
    return(
        <nav className='bg-primary'>
        <div className='container'>
            <div className='nav-wrapper'>
                <h1 className="text-white d-flex justify-content-center py-2">
                    Resume
                </h1>
            </div>
        </div>
      </nav>
    );

}

function Profile(props){
    return(
        <div className="card my-3">
            <img className="p-3" src="waleed.jpg"/>
            <h2 className="d-flex justify-content-center">Waleed Rafique</h2>
            <p className="d-flex justify-content-center">Hi! I am Waleed and I am a CSE Student</p>
        </div>
    );
}

function About(props){
    return(
        <div className="card p-3 my-3">
            <h3>About Me</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum itaque possimus excepturi accusantium sapiente quisquam labore debitis vitae, accusamus et. Minus quod hic neque vel?</p>
            <h3>Personal Information</h3>
            <p><span className="fw-bold">Address:</span> Road no.8, Paharika R/A, Baizid, Chattagram.</p>
            <p><span className="fw-bold">Phone Number:</span> 01622159259</p>
            <p><span className="fw-bold">Email Address:</span> waleedrafiquekazi@gmail.com</p>
        </div>
    );
}

function Skills(props){
    return(
        <div className="card my-3 p-3">
            <h3 className="my-3">Professional Skills</h3>
            <div className="row">
                <div className="col-md-6">
                    <h6>HTML and CSS</h6>
                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar w-100"></div>
                        </div>
                    <h6>Javascript</h6>
                    <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar w-75"></div>
                        </div>
                        
                    <h6>SQL</h6>
                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar w-50"></div>
                        </div>
                </div>
                <div className="col-md-6">
                    <h6>Java</h6>
                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar w-50"></div>
                        </div>
                    
                    <h6>Python</h6>
                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar w-75"></div>
                        </div>

                    <h6>Flutter</h6>
                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar w-75"></div>
                        </div>
                </div>

            </div>

        </div>
    );

}

function Experience(props){
    return(
        <div className="card my-3 p-3">
            <h3 className="my-3">Experience</h3>
            <div className="row">
                <div className="col-md-4 col-sm-6">
                    <p className="bg-primary text-white my-5">
                        Jan 
                         <strong> 2019</strong> - March 
                         <strong> 2021</strong>
                    </p>

                    <p className="bg-primary text-white my-5" >
                        Jan 
                         <strong> 2022</strong> - March 
                         <strong> 2024</strong>
                    </p>

                </div>
                <div className="col-md-8 col-sm-6">
                    <h6>Web Development</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum itaque possimus excepturi accusantium sapiente quisquam labore debitis vitae, accusamus et. Minus quod hic neque vel?</p>

                    <h6>App Development</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum itaque possimus excepturi accusantium sapiente quisquam labore debitis vitae, accusamus et. Minus quod hic neque vel?</p>
                </div>
            </div>
        </div>
    );
}

function Education(props){
    return(
        <div className="card my-3 p-3">
            <h3 className="my-3">Education</h3>
            <div className="row">
                <div className="col-md-4">
                    <h6 className="text-center"><strong>Bachelor of Science(Computer Science and Engineering)</strong></h6>
                    <p className="py-3">Chittagong Institute of Engineering and Technology(Session 2019 2020).<br/> Affiliated by University of Chittagong, Bangladesh. </p>
                </div>
                <div className="col-md-4">
                <h6 className="text-center"><strong>IAL Advanced Level</strong></h6>
                <p className="pt-5 text-center"><strong>Passing Year:</strong> 2019</p>
                <p className="text-center"><strong>Examining Board:</strong> Edexcel 
                International, Oxford. </p>
                </div>
                <div className="col-md-4">
                <h6 className="text-center"><strong>IGCSE Ordinary Level</strong></h6>
                <p className="pt-5 text-center"><strong>Passing Year:</strong> 2016</p>
                <p className="text-center"><strong>Examining Board:</strong> Edexcel 
                International, Oxford. </p>
                </div>
            </div>
        </div>
    );
}

function Footer(props){
    return(
        <footer className="footer">
      </footer>
    );
}


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);