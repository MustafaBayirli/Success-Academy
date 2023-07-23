import logo from './logo.svg';
import './App.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Chart } from "react-google-charts";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from "react-i18next";
import Carousel from 'react-bootstrap/Carousel';
import Collapse from 'react-bootstrap/Collapse';



export const data = [
  ["Task", "Hours per Day"],
  ['Antarctica', 0],
  ['Africa', 2400],
  ['Asia', 2750],
  ['Australia', 800],
  ['Europe', 3800],
  ['North America', 4500],
  ['South America', 1900]
];

export const options = {
  title: "Number of students enrolled from various continents",
};


function App() {

  const { t, i18n } = useTranslation();

  const handleLanguage = (e) => { 
    i18n.changeLanguage(e.target.value);
  }


  // useState hooks for the Quick Assessments section collapses
  const [openQuiz1, setOpenQuiz1] = useState(false);
  const [openQuiz2, setOpenQuiz2] = useState(false);
  const [openQuiz3, setOpenQuiz3] = useState(false);
  
  const [proceedQuiz1, setProceedQuiz1] = useState(false);
  const [proceedQuiz2, setProceedQuiz2] = useState(false);
  const [proceedQuiz3, setProceedQuiz3] = useState(false);

  const [reveal11, setReveal11] = useState(false);
  const [reveal12, setReveal12] = useState(false);
  const [reveal13, setReveal13] = useState(false);
  
  const [reveal21, setReveal21] = useState(false);
  const [reveal22, setReveal22] = useState(false);
  const [reveal23, setReveal23] = useState(false);
  
  const [reveal31, setReveal31] = useState(false);
  const [reveal32, setReveal32] = useState(false);
  const [reveal33, setReveal33] = useState(false);


  
  // modal for enrollment confirmation
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // modal for contact us message confirmation
  const [showMsg, setShowMsg] = useState(false);

  const handleCloseMsg = () => { {
    setShowMsg(false)
    window.location.reload()}};
  const handleShowMsg = () => setShowMsg(true);


  // State for search input value
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle Enter key press on search input
  const handleSearchKeyPress = (event) => {
    if (event.key === "Enter" && searchTerm.trim() !== "") {
      
      window.location.href = "/home";
    }
  };



  return (
    <div className="App">

      {/*     Navigation Bar    */}    
      <nav className="navbar fixed-top bg-light navbar-expand-md navbar-light pb-2">
        <div className="container-xxl border-bottom border-2 border-secondary">

          {/*  website logo */}
          <a className="navbar-brand" href="#home">
            <img src= {require('./assets/logo.jpeg')} alt="logo"  style={{maxHeight: '65px'}}/>
          </a>

          {/*  mobile nav display version --> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


    
          {/*    navbar menu links  */}
          <div className="collapse navbar-collapse justify-content-center" id="main-nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link bold-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link bold-link" href="#courses">Our Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link bold-link" href="#teachers">Our Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link bold-link" href="#contact">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link bold-link" href="#Assessments">Quick Assessments</a>
              </li>
              <li className="nav-item d-md-none">
                <a className="nav-link bold-link" href="#enroll">Enroll in a Course</a>
              </li>
              <li className="nav-item ms-2 d-none d-md-inline">
                <a className="btn btn-primary fw-bold"  href="#enroll" style={{color:"white"}}>Enroll in a Course</a>
              </li>

              {/*   Search input implementation   */}
              <li className="nav-item ms-2">
                <div className="input-group">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearchInputChange}
                  onKeyPress={handleSearchKeyPress}/>                 
                  <span className="input-group-text" style={{ cursor: "pointer" }}>
                    <i className="bi bi-search"></i>
                  </span>
                </div>
              </li>               
            </ul>
          </div>
          <span className="me-3 py-2 text-dark">
                        <select className="form-select form-select-sm language-switcher" onClick={handleLanguage}>
                            <option value="en">English</option>
                            <option value="fr">French</option>
                        </select>
          </span>
        </div>
      </nav>



      {/*  Home Page section  */}
      <section id="home">
        <div className="container-lg mt-4">
            <div className="row justify-content-center">
                <div className="col-xl-4 col-6 text-center">             
                    <div className="h1 text-primary mb-2">{t('academy_title')}</div> 
                    <div className="h4">{t('weclcoming')}</div>            
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row justify-content-center bg-secondary mx-5 rounded">
                <div className="col-md-5 px-2">
                    <p className="h4 ps-4 pt-4 ms-4 mt-4 text-light text-start">{t('home_intro')}</p>
                    <div className="text-center">  
                        <a href="#enroll" className="btn btn-primary btn-lg mt-3 fw-bold text-light">{t('enroll_now')}</a>
                    </div>
                    
                </div>
                <div className="col-md-5 ps-4 py-1">
                    <img className="img-fluid rounded-pill" src= {require("./assets/home.jpeg")} alt="Home Page" />
                </div>
            </div>
        </div>

        <div className="container-lg mt-4">
            <div className="row justify-content-center">
                <div className="col-3">
                    <div className="card">
                        <div className="card-header h5 bg-warning text-center text-light">{t('Quick_Assessments')}</div>
                        <div className="card-body">
                          <p className="card-text px-3 mb-2 text-start">{t('Quick_Assessments_text')}</p>
                          
                          <div className="text-center">  
                            <a href="#Assessments" className="btn btn-primary mt-3 fw-bold">{t('learn_more')}</a>
                          </div>
                        </div>
                        
                    </div>
                </div>    
                <div className="col-3">
                    <div className="card">
                        <div className="card-header h5 bg-success text-center text-light">{t('courses')}</div>
                        <div className="card-body">
                          <p className="card-text px-3 mb-2 text-start">{t('courses_text')} </p>

                            <div className="text-center">  
                                <a href="#courses" className="btn btn-primary mt-3 fw-bold">{t('learn_more')}</a>
                            </div>
                        </div>          
                    </div>
                </div>
            </div>
        </div>      
    </section>



    {/*   Courses section  */}
    <section id="courses" className="bg-light">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-7 text-start">
                    <div className="h1 text-primary text-center">Our Courses</div>
                    <p className="lead fw-normal text-center"> Success Academy offers a range of courses based on your learning needs!</p>
                </div>
                <div className="col-1"></div>
            </div>

            <div className="row justify-content-center">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="container mt-4">
                      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="">

                        {/*    English courses   */}
                        <Tab eventKey="home" title="English Courses" className="tabs tab1">
                          <div className="container p-3">
                            <div className="row justify-content-center mx-3">
                              <div className="col">
                                <Card className="card my-4">
                                <div className="text-center mt-4">
                                  <img src={require("./assets/EngSpeaking.webp")} alt="English Grammar"
                                    style={{ width: '200px', height: '200px', objectFit: 'contain', }} />
                                </div>
                                <Card.Body className=''>
                                  <div className="h5 text-center">English Speaking Course</div>
                                  <div className="h5 text-primary text-center">45 Hours</div>
                                  <div className="pb-2 text-center text-info">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                  </div>
                                  <p className="card-text ps-3 text-start"> Embark on an English speaking journey with our courses! Gain fluency, confidence, and effective communication skills. 
                                                                              Our experienced instructors will guide you through interactive lessons and engaging conversations. </p>
                                  <div className="text-info fs-6 text-center">
                                    <span className="lead fw-bold">$399.99</span>
                                    <i className="bi bi-tag-fill"></i>
                                  </div>
                                  <div className="text-center">  
                                    <a href="#enroll" className="btn btn-primary mt-3 fw-bold" style={{color:"white"}}>Enroll Now</a>
                                  </div>
                                </Card.Body>
                              </Card>
                            </div>

                            <div className="col">
                              <Card className="card my-4">
                                <div className="text-center mt-4">
                                  <img src={require("./assets/EngWriting.jpeg")} alt="English Grammar"
                                    style={{ width: '200px', height: '200px', objectFit: 'contain', }} /> </div>
                                <Card.Body className=''>
                                  <div className="h5 text-center">English Writing Course</div>
                                  <div className="h5 text-primary text-center">45 Hours</div>
                                  <div className="pb-2 text-center text-info">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                  </div>
                                  <p className="card-text ps-3 text-start">Enhance your writing skills with our courses! Our experienced instructors will guide you in developing
                                                                             effective communication through interactive lessons and personalized feedback.</p>
                                  <div className="text-info fs-6 text-center">
                                    <span className="lead fw-bold">$399.99</span>
                                    <i className="bi bi-tag-fill"></i>
                                  </div>
                                  <div className="text-center">  
                                    <a href="#enroll" className="btn btn-primary mt-3 fw-bold" style={{color:"white"}}>Enroll Now</a>
                                  </div>
                                </Card.Body>
                              </Card>
                            </div>

                            <div className="col">
                              <Card className="card my-4">
                              <div className="text-center mt-4">
                                <img src={require("./assets/EngGrammar.webp")} alt="English Grammar"
                                  style={{ width: '200px', height: '200px', objectFit: 'contain', }} /> </div>
                              <Card.Body className=''>
                                <div className="h5 text-center">English Grammar Course</div>
                                <div className="h5 text-primary text-center">45 Hours</div>
                                <div className="pb-2 text-center text-info">
                                  <i className="bi bi-star-fill"></i>
                                  <i className="bi bi-star-fill"></i>
                                  <i className="bi bi-star-fill"></i>
                                  <i className="bi bi-star-fill"></i>
                                  <i className="bi bi-star-fill"></i>
                                </div>
                                <p className="card-text ps-3 text-start"> Master English grammar with our courses! Our experienced instructors will guide you through interactive lessons
                                                                              and practical exercises to develop a deep understanding of grammar principles.</p>
                                <div className="text-info fs-6 text-center">
                                  <span className="lead fw-bold">$399.99</span>
                                  <i className="bi bi-tag-fill"></i>
                                </div>
                                  <div className="text-center">  
                                    <a href="#enroll" className="btn btn-primary mt-3 fw-bold" style={{color:"white"}}>Enroll Now</a>
                                  </div>
                              </Card.Body>
                            </Card>
                          </div>
                        </div>   
                      </div>                       
                    </Tab>



                        {/* Math Courses */}
                        <Tab eventKey="math" title="Math Courses" className="tabs tab2">
                        <div className="container p-3">
                            <div className="row justify-content-center mx-3">
                              <div className="col">
                                <Card className="card my-4">
                                <div className="text-center mt-4">
                                  <img src={require("./assets/CALCULUS.jpg")} alt="Intro to Calculus"
                                    style={{ width: '200px', height: '200px', objectFit: 'contain', }} /> </div>
                                  <Card.Body className=''>
                                    <div className="h5 text-center">Intro to Calculus Course</div>
                                    <div className="h5 text-primary text-center">40 Hours</div>
                                    <div className="pb-2 text-center text-info">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <p className="card-text ps-3 text-start">Review of elementary functions. Introduction to Limits. Geometric series. Introduction to differential and integral calculus in one variable with applications.
                                                                             Linear approximations. Finite difference approximations of derivatives. Analysis of functions via the first and the second derivatives.
                                                                             Applications to finding max-min. Concavity and points of inflection, and graph sketching, etc..</p>
                                    <div className="text-info fs-6 text-center">
                                      <span className="lead fw-bold">$449.99</span>
                                      <i className="bi bi-tag-fill"></i>
                                    </div>
                                    <div className="text-center">  
                                      <a href="#enroll" className="btn btn-primary mt-3 fw-bold" style={{color:"white"}}>Enroll Now</a>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>

                              <div className="col">
                                <Card className="card my-4">
                                <div className="text-center mt-4">
                                  <img src={require("./assets/LINEAR-ALGEBRA.jpg")} alt="Intro to Linear Algebra"
                                    style={{ width: '200px', height: '200px', objectFit: 'contain', }} /> </div>
                                  <Card.Body className=''>
                                    <div className="h5 text-center">Intro to Linear Algebra Course</div>
                                    <div className="h5 text-primary text-center">45 Hours</div>
                                    <div className="pb-2 text-center text-info">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <p className="card-text ps-3 text-start"> Review of complex numbers. The fundamental theorem of algebra. Review of vector and scalar products, projections. Introduction to vector spaces, 
                                                                              linear independence; function spaces. linear equations, determinants, eigenvalues 
                                                                              and eigenvectors. Gram Schmidt, orthogonal projections. Linear transformations, their standard matrices, etc..</p>
                                    <div className="text-info fs-6 text-center">
                                      <span className="lead fw-bold">$439.99</span>
                                      <i className="bi bi-tag-fill"></i>
                                    </div>
                                    <div className="text-center">  
                                      <a href="#enroll" className="btn btn-primary mt-3 fw-bold" style={{color:"white"}}>Enroll Now</a>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>

                              <div className="col">
                                <Card className="card my-4">
                                <div className="text-center mt-4">
                                  <img src={require("./assets/DISCRETE MATH.jpg")} alt="Discrete Math for Computing "
                                    style={{ width: '200px',  height: '200px', objectFit: 'contain', }} /> </div>
                                  <Card.Body className=''>
                                    <div className="h5 text-center">Discrete Math for Computing Course</div>
                                    <div className="h5 text-primary text-center">55 Hours</div>
                                    <div className="pb-2 text-center text-info">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </div>
                                    <p className="card-text ps-3 text-start"> Introduction to discrete structures as a foundation to computing. Propositional logic. Fundamental structures: functions, relations, sets.
                                                                              The basics of counting: counting arguments, the pigeonhole principle, permutations and combinations. Introduction to proofs: direct,
                                                                               by contradiction, by cases, induction. Topics in graph theory, etc.. </p>
                                    <div className="text-info fs-6 text-center">
                                      <span className="lead fw-bold">$449.99</span>
                                      <i className="bi bi-tag-fill"></i>
                                    </div>
                                    <div className="text-center">  
                                      <a href="#enroll" className="btn btn-primary mt-3 fw-bold" style={{color:"white"}}>Enroll Now</a>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>
                            </div>   
                          </div> 
                        </Tab>


                        {/* Science Courses */}
                        <Tab eventKey="science" title="Science Courses" className="tabs tab2">
                        <div className="container p-3">
                            <div className="row justify-content-center mx-3">
                              <div className="col">
                                <Card className="card my-4">
                                <div className="text-center mt-4">
                                  <img src={require("./assets/Organic Chemistry.jpg")} alt="Organic Chemistry"
                                    style={{ width: '200px', height: '200px', objectFit: 'contain', }} /> </div>
                                  <Card.Body className=''>
                                    <div className="h5 text-center">Organic Chemistry Course</div>
                                    <div className="h5 text-primary text-center">45 Hours</div>
                                    <div className="pb-2 text-center text-info">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <p className="card-text ps-3 text-start"> Classification, identification and structural characterization of organic compounds. Properties, preparation, and commercial significance of hydrocarbons,
                                                                              halogen derivatives, alcohols, ethers and selected polymers. Mechanisms of organic reactions, and basic principles of organic stereochemistry. etc..</p>
                                    <div className="text-info fs-6 text-center">
                                      <span className="lead fw-bold">$299.99</span>
                                      <i className="bi bi-tag-fill"></i>
                                    </div>
                                    <div className="text-center">  
                                      <a href="#enroll" className="btn btn-primary mt-3 fw-bold" style={{color:"white"}}>Enroll Now</a>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>

                              <div className="col">
                                <Card className="card my-4">
                                <div className="text-center mt-4">
                                  <img src={require("./assets/Physics.jpg")} alt="Electricity and Magnetism"
                                    style={{ width: '200px', height: '200px', objectFit: 'contain', }} /> </div>
                                  <Card.Body className=''>
                                    <div className="h5 text-center">Electricity and Magnetism Course</div>
                                    <div className="h5 text-primary text-center">45 Hours</div>
                                    <div className="pb-2 text-center text-info">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <p className="card-text ps-3 text-start"> Review of vector analysis: gradient, divergence and curl. Electrosta- tics: Coulomb's law, electric field, Gauss's law, energy and potential, 
                                                                              semiconductors and dielectrics, Poisson's and Laplace's equations. Steady electric currents. Magnetostatics. etc..</p>
                                    <div className="text-info fs-6 text-center">
                                      <span className="lead fw-bold">$399.99</span>
                                      <i className="bi bi-tag-fill"></i>
                                    </div>
                                    <div className="text-center">  
                                      <a href="#enroll" className="btn btn-primary mt-3 fw-bold" style={{color:"white"}}>Enroll Now</a>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>

                              <div className="col">
                                <Card className="card my-4">
                                <div className="text-center mt-4">
                                  <img src={require("./assets/Biology.jpg")} alt="Principles of Biology"
                                    style={{ width: '200px', height: '200px', objectFit: 'contain', }} /> </div>
                                  <Card.Body className=''>
                                    <div className="h5 text-center">Principles of Biology Course</div>
                                    <div className="h5 text-primary text-center">50 Hours</div>
                                    <div className="pb-2 text-center text-info">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </div>
                                    <p className="card-text ps-3 text-start"> An introduction to major biological concepts including: the cell; origins and chemistry of life; energy capture and its use in biological systems;
                                                                              heredity and genetics; biodiversity and its origins; evolution, and systematics of major groups of organisms and how they function and interact with each other. etc.. </p>
                                    <div className="text-info fs-6 text-center">
                                      <span className="lead fw-bold">$249.99</span>
                                      <i className="bi bi-tag-fill"></i>
                                    </div>
                                    <div className="text-center">  
                                      <a href="#enroll" className="btn btn-primary mt-3 fw-bold" style={{color:"white"}}>Enroll Now</a>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>
                            </div>   
                          </div> 
                        </Tab>


                        {/*    Test preperations Courses  */}
                        <Tab eventKey="test" title="Test Preperation" className="tabs tab2">
                        <div className="container p-3">
                            <div className="row justify-content-center mx-3">
                              <div className="col">
                                <Card className="card my-4">
                                <div className="text-center mt-4">
                                  <img src={require("./assets/IELTS.jpeg")} alt="IELTS Prep"
                                    style={{ width: '200px', height: '200px', objectFit: 'contain', }} /> </div>
                                  <Card.Body className=''>
                                    <div className="h5 text-center">IELTS Prep Course</div>
                                    <div className="h5 text-primary text-center">25 Hours</div>
                                    <div className="pb-2 text-center text-info">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <p className="card-text ps-3 text-start">Our IELTS courses provide opportunities to practice what you are learning and to receive insightful feedback from IELTS instructors
                                                                             on your language and test-taking skills.</p>
                                    <div className="text-info fs-6 text-center">
                                      <span className="lead fw-bold">$199.99</span>
                                      <i className="bi bi-tag-fill"></i>
                                    </div>
                                    <div className="text-center">  
                                      <a href="#enroll" className="btn btn-primary mt-3 fw-bold" style={{color:"white"}}>Enroll Now</a>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>

                              <div className="col">
                                <Card className="card my-4">
                                <div className="text-center mt-4">
                                  <img src={require("./assets/TOEFL.png")} alt="TOEFL Prep"
                                    style={{ width: '200px', height: '200px', objectFit: 'contain', }} /> </div>
                                  <Card.Body className=''>
                                    <div className="h5 text-center">TOEFL Prep Course</div>
                                    <div className="h5 text-primary text-center">25 Hours</div>
                                    <div className="pb-2 text-center text-info">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                    <p className="card-text ps-3 text-start"> A good TOEFL preparation program include lots of test-specific advice about how to approach various question types,
                                                                              how to pace yourself, note-taking strategies, etc..</p>
                                    <div className="text-info fs-6 text-center">
                                      <span className="lead fw-bold">$199.99</span>
                                      <i className="bi bi-tag-fill"></i>
                                    </div>
                                    <div className="text-center">  
                                      <a href="#enroll" className="btn btn-primary mt-3 fw-bold" style={{color:"white"}}>Enroll Now</a>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>

                              <div className="col">
                                <Card className="card my-4">
                                <div className="text-center mt-4">
                                  <img src={require("./assets/SAT.jpeg")} alt="SAT Prep"
                                    style={{ width: '200px', height: '200px', objectFit: 'contain', }} /> </div>
                                  <Card.Body className=''>
                                    <div className="h5 text-center">SAT Prep Course</div>
                                    <div className="h5 text-primary text-center">35 Hours</div>
                                    <div className="pb-2 text-center text-info">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </div>
                                    <p className="card-text ps-3 text-start"> Achieve your best possible SAT score with proven test prep methods, taught by a team of experts and personalized for your learning success.
                                                                              We do not just master SAT prep, we invented it. </p>
                                    <div className="text-info fs-6 text-center">
                                      <span className="lead fw-bold">$249.99</span>
                                      <i className="bi bi-tag-fill"></i>
                                    </div>
                                    <div className="text-center">  
                                      <a href="#enroll" className="btn btn-primary mt-3 fw-bold" style={{color:"white"}}>Enroll Now</a>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>
                            </div>   
                          </div> 
                        </Tab>
                        
                      </Tabs>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
      </div>
    </section>



    {/*    Our Team section   */}
    <section id="teachers">
        <div className="h1 text-primary mb-0 text-center">Our Team</div>
        <div className="container-md">
            <div className="row justify-content-center">
            <div className="col-3">
                    <div className="card my-4 px-4 rounded border-0 bg-secondary" style={{width: 'fluid'}}>
                        <img src={require("./assets/english.jpeg")} className="card-img-top rounded-circle mt-4 border border-5 border-light" alt="Dentist Picture"/>
                        <div className="card-body">
                            <div className="text-center my-3">
                                <div className="h4 text-light">Wilson Stone</div>
                            </div>
                        
                            <div className="row bg-primary rounded">
                                <p className="card-text mx-0 px-3 py-2 text-light text-start">Wilson has more than 15 years of English teaching experience. He is a certified language proficiency examiner, a university lecturer and teacher trainer in USA and Canada.</p>
                            </div>

                            <div className="pb-2 pt-4 text-center text-primary fs-5">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                            </div>
                            <div className="h6 text-light text-center">Student Reviews</div>                         
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="card my-4 px-4 rounded border-0 bg-secondary" style={{width: 'fluid'}}>
                        <img src={require("./assets/math.jpeg")} className="card-img-top rounded-circle mt-4 border border-5 border-light" alt="Dentist Picture"/>
                        <div className="card-body">
                            <div className="text-center my-3">
                                <div className="h4 text-light">Sarah Smith</div>
                            </div>
                       
                            <div className="row bg-primary rounded">
                                <p className="card-text mx-0 px-3 py-2 text-light text-start">Sarah has been teaching for 8 years.She graduated from the University of Ottawa in 2012. She has helped hundreds of students in different parts of the world to be successful in there studies.</p>
                            </div>

                            <div className="pb-2 pt-4 text-center text-primary fs-5">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                            </div>
                            <div className="h6 text-light text-center">Student Reviews</div>
                          
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="card my-4 px-4 rounded border-0 bg-secondary" style={{width: 'fluid'}}>
                        <img src={require("./assets/science.jpeg")} className="card-img-top rounded-circle mt-4 border border-5 border-light" alt="Dentist Picture"/>
                        <div className="card-body">
                            <div className="text-center my-3">
                                <div className="h4 text-light">Ahmad Ali</div>
                            </div>
                        
                            <div className="row bg-primary rounded">
                                <p className="card-text mx-0 px-3 py-2 text-light text-start"> Ahmad has been teaching for 10 years.He graduated from the University of Ottawa in 2010. He has helped students develop exploratory and hypotheses to explain natural events</p>
                            </div>

                            <div className="pb-2 pt-4 text-center text-primary fs-5">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                            </div>
                            <div className="h6 text-light text-center">Student Reviews</div>
                          
                        </div>
                    </div>
                    
                </div>

                <div className="col-3">
                    <div className="card my-4 px-4 rounded border-0 bg-secondary" style={{width: 'fluid'}}>
                        <img src={require("./assets/test.jpeg")} className="card-img-top rounded-circle mt-4 border border-5 border-light" alt="Dentist Picture"/>
                        <div className="card-body">
                            <div className="text-center my-3">
                                <div className="h4 text-light">Mary Silva</div>
                            </div>
                        
                            <div className="row bg-primary rounded">
                                <p className="card-text mx-0 px-3 py-2 text-light text-start">Mary is senior IELTS,TOEFL and SAT examiner in Canada and USA. She has over 14 years of experience in teaching test preparation courses and helped student all over the world.</p>
                            </div>

                            <div className="pb-2 pt-4 text-center text-primary fs-5">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                            </div>
                            <div className="h6 text-light text-center">Student Reviews</div>
                          
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>




    {/* Course Schedule section */}
    <section id="schedul" className="bg-light">
      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h2 className="text-center mt-5 mb-4" style={{ color: "#E48125" }}>Course Schedule</h2>
            <div className="table-responsive">
              <table className="table table-bordered table-hover rounded">
                <thead>
                  <tr className="table-primary">
                    <th>Course</th>
                    <th>Start Date</th>
                    <th>Duration</th>
                    <th>Day of the Week</th>
                    <th>Instructor</th>
                  </tr>
                </thead>
              <tbody>
                <tr>
                  <td>English Speaking Course</td>
                  <td>July 28, 2023</td>
                  <td>8 weeks</td>
                  <td> Monday and Wednesday</td>
                  <td>Wilson Stone</td>
                </tr>
                <tr>
                  <td>English Writing Course</td>
                  <td>September 1, 2023</td>
                  <td>9 weeks</td>
                  <td>Tuesday and Thursday </td>
                  <td>Wilson Stone</td>
                </tr>

                <tr>
                  <td>English Grammar Course</td>
                  <td>August 10, 2023</td>
                  <td>9 weeks</td>
                  <td>Wednesday and Friday </td>
                  <td>Wilson Stone</td>
                </tr>

                <tr>
                  <td>Intro to Calculus Course</td>
                  <td>July 25, 2023</td>
                  <td>12 weeks</td>
                  <td> Tuesday and Thursday</td>
                  <td>Sarah Smith</td>
                </tr>
                <tr>
                  <td>Intro to Linear Algebra Course</td>
                  <td>Augut 10, 2023</td>
                  <td>12 weeks</td>
                  <td>Wednesday and Friday </td>
                  <td>Sarah Smith</td>
                </tr>

                <tr>
                  <td>Discrete Math for Computing Course</td>
                  <td>September 4, 2023</td>
                  <td>12 weeks</td>
                  <td> Wednesday and Friday </td>
                  <td>Sarah Smith</td>
                </tr>

                <tr>
                  <td>Organic Chemistry Course</td>
                  <td>July 29, 2023</td>
                  <td>8 weeks</td>
                  <td> Tuesday and Thursday</td>
                  <td>Ahmad Ali</td>
                </tr>

                <tr>
                  <td>Electricity and Magnetism Course</td>
                  <td>August 1, 2023</td>
                  <td>12 weeks</td>
                  <td> Monday and Wednesday </td>
                  <td>Ahmad Ali</td>
                </tr>

                <tr>
                  <td>Principles of Biology Course</td>
                  <td>August 20, 2023</td>
                  <td>6 weeks</td>
                  <td>Wednesday and Friday </td>
                  <td>Ahmad Ali</td>
                </tr>

                <tr>
                  <td>IELTS Prep Course</td>
                  <td>August 1, 2023</td>
                  <td>6 weeks</td>
                  <td>Tuesday and Thursday </td>
                  <td>Mary Silva</td>
                </tr>

                <tr>
                  <td>TOEFL Prep Course</td>
                  <td>July 30, 2023</td>
                  <td>6 weeks</td>
                  <td> Wednesday and Friday</td>
                  <td>Mary Silva</td>
                </tr>

                <tr>
                  <td>SAT Prep Course</td>
                  <td>October 1, 2023</td>
                  <td>8 weeks</td>
                  <td> Monday and Wednesday </td>
                  <td>Sarah Smith</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>



    {/*  Dashboard Analyze section  */}
    <section id="dashboard" className="bg-light">    
        <div className="container-lg">
            <div className="row justify-content-center text-center mb-0 pb-0">
                <div className="h1 text-primary mb-4 text-center">Why Choose Success Academy?</div>

                <div className="col-2 bg-secondary py-2 mx-3 rounded">
                    <i className="bi bi-person-check-fill text-primary icon-large"></i>
                    <div className="h3 text-light">3,500+</div>
                    <div className="h5 text-light pb-3">Active Enrolled Students</div>
                </div>
                <div className="col-2 bg-secondary py-2 mx-3 rounded">
                    <i className="bi bi-emoji-smile-fill text-primary icon-large"></i>
                    <div className="h3 text-light">14,800+</div>
                    <div className="h5 text-light pb-3">Satisfied Students</div>
                </div>
                <div className="col-2 bg-secondary py-2 mx-3 rounded">
                    <i className="bi bi-journal-check text-primary icon-large"></i>
                    <div className="h3 text-light">16,500+</div>
                    <div className="h5 text-light pb-3">Total Enrollments</div>
                </div>
                <div className="col-2 bg-secondary py-2 mx-3 rounded">
                    <i className="bi bi-check-circle-fill text-primary icon-large"></i>
                    <div className="h3 text-light">94%</div>
                    <div className="h5 text-light pb-3">Course Completion Rate</div>
                </div>
                <div className="col-2 bg-secondary py-2 mx-3 rounded">
                    <i className="bi bi-globe2 text-primary icon-large"></i>
                    <div className="h3 text-light">25+</div>
                    <div className="h5 text-light pb-3">Countries Reached</div>
                </div>
            </div>

                {/*  pie chart  */}
                <div className="row justify-content-center my-0 py-0">
                    <div className="col-3"></div>
                    <div className="col-6 ps-4 pb-4 mt-4 bg-secondary rounded">
                        <div className="text-center">
                            <div className="h5 text-center text-light mt-4">Our learning services have reached students globally!</div>
                            <div id="chart_div" className="my-0 py-0">
                              <Chart
                                chartType="PieChart"
                                data={data}
                                options={options}
                                width={600}
                                height={400}
                              />
                            </div>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
        </div>
    </section>



     {/*  Contact Us section  */}
     <section id="contact">
      <div className="container-lg">
        <div className="row justify-content-center">

          <div className="col-md-5 me-4 pe-2 text-start">
            <div className="h1 text-primary mb-3">{t('FAQ')}</div>

            <Accordion alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>{t('FAQ1')}</Accordion.Header>
                <Accordion.Body>
                {t('Ans1')}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>{t('FAQ2')}</Accordion.Header>
                <Accordion.Body>
                {t('Ans2')}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>{t('FAQ3')}</Accordion.Header>
                <Accordion.Body>
                {t('Ans3')}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>{t('FAQ4')}</Accordion.Header>
                <Accordion.Body>
                {t('Ans4')}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          

          <div className="col-md-4 ms-1 ps-1 text-start">
            <div className="h1 text-primary mb-3 text-center">{t('contact_us')}</div>

            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">{t('your_name')}</label>
                <input type="text" className="form-control border border-primary border-3" id="exampleFormControlInput1" placeholder="Full Name"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput2" className="form-label">{t('phone')}</label>
                <input type="tel" className="form-control border border-primary border-3" id="exampleFormControlInput2" placeholder="e.g. +1123-456-7890"/>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput3" className="form-label">{t('email')}</label>
                <input type="email" className="form-control border border-primary border-3" id="exampleFormControlInput3" placeholder="e.g. name@example.com"/>
            </div>

            <label for="subject" className="form-label">{t('option')}</label>
            <select className="form-select border border-primary border-3 mb-3" id="subject">
                <option selected value="appointment">{t('enrollment')}</option>
                <option value="other">{t('other')}</option>
              </select>

            <div className="mb-4">
                <label for="exampleFormControlTextarea1" className="form-label">{t('msg')}</label>
                <textarea className="form-control border border-primary border-3" id="exampleFormControlTextarea1" rows="3" placeholder={t('msg_place')}></textarea>
            </div>

            <div className="mb-4 text-center">
                <a type="submit" className="btn btn-primary fw-bold" style={{color: "white"}} href="#contact" 
                onClick={handleShowMsg}>{t('send')}</a>
            </div>           
          </div>
        </div>
      </div>


          {/*   Message/Request Confirmation   */}                
            <Modal show={showMsg} onHide={handleCloseMsg}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <div className="h3 text-center ps-4 text-primary">
                    Request Confirmation
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                    <p class="lead fs-5 fw-bold">
                      Thank you for contacting us!
                      <br/> We have received your request and will be reaching out to you via email soon (usually within 2 business days).
                    </p>

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" className='fw-bold px-5' onClick={handleCloseMsg} style={{color:"white"}}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
    </section>




    {/*     Quick Assessments section     */}
    <section id="Assessments" className="bg-light">
        <div className="h1 text-primary text-center mb-2"> Quick Assessments </div> 
        <div className="h4 text-center">Enjoy Your Learning Journey!</div>

        {/* Carousel */}
        <Carousel interval={null}>
          <Carousel.Item>
          <div className="container-fluid my-3">
                    <div className="row justify-content-center bg-secondary mx-5 rounded">
                        <div className="col-md-5 px-2">
                            <p className="h3 ps-5 pt-5 ms-5 mt-5 text-light text-start"><br/> Watch the video and then take the quiz below.</p>

                            <div className="text-center">  
                                <a data-bs-toggle="collapse" className="btn btn-primary btn-lg mt-5 fw-bold" style={{color: "white"}} 
                                onClick={() => {
                                  if (proceedQuiz2) {
                                    setProceedQuiz2(!proceedQuiz2)
                                    setOpenQuiz2(!openQuiz2)
                                  }
                                  if (proceedQuiz3) {
                                    setProceedQuiz3(!proceedQuiz3)
                                    setOpenQuiz3(!openQuiz3)
                                  }
                                  setProceedQuiz1(!proceedQuiz1)
                                  setOpenQuiz1(!openQuiz1)}}>Take Quiz</a>
                            </div>

                            <Collapse in={proceedQuiz1}>
                              <div className="text-center" id="collapseQuiz">  
                                  <a href="#quizSection" className="btn btn-primary mt-3 fw-bold" style={{color: "white"}}>Proceeed to Quiz</a>
                              </div>
                            </Collapse>
                            
                        </div>
                        <div className="col-md-5 py-5">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/O9S70oJAivI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
          </Carousel.Item>

          <Carousel.Item>
          <div className="container-fluid my-3">
                    <div className="row justify-content-center bg-secondary mx-5 rounded">
                        <div className="col-md-5 px-2">
                            <p className="h3 ps-5 pt-5 ms-5 mt-5 text-light text-start"><br/> Watch the video and then take the quiz below.</p>

                            <div className="text-center">  
                                <a data-bs-toggle="collapse" className="btn btn-primary btn-lg mt-5 fw-bold" style={{color: "white"}} 
                                onClick={() => {
                                  if (proceedQuiz1) {
                                    setProceedQuiz1(!proceedQuiz1)
                                    setOpenQuiz1(!openQuiz1)
                                  }
                                  if (proceedQuiz3) {
                                    setProceedQuiz3(!proceedQuiz3)
                                    setOpenQuiz3(!openQuiz3)
                                  }
                                  setProceedQuiz2(!proceedQuiz2)
                                  setOpenQuiz2(!openQuiz2)}}>Take Quiz</a>
                            </div>

                            <Collapse in={proceedQuiz2}>
                              <div className="text-center" id="collapseQuiz">  
                                  <a href="#quiz2" className="btn btn-primary mt-3 fw-bold" style={{color: "white"}}>Proceeed to Quiz</a>
                              </div>
                            </Collapse>
                            
                        </div>
                        <div className="col-md-5 py-5">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/WsQQvHm4lSw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
          </Carousel.Item>

          <Carousel.Item>
          <div className="container-fluid my-3">
                    <div className="row justify-content-center bg-secondary mx-5 rounded">
                        <div className="col-md-5 px-2">
                            <p className="h3 ps-5 pt-5 ms-5 mt-5 text-light text-start"><br/> Watch the video and then take the quiz below.</p>

                            <div className="text-center">  
                                <a data-bs-toggle="collapse" className="btn btn-primary btn-lg mt-5 fw-bold" style={{color: "white"}} 
                                onClick={() => {
                                  if (proceedQuiz1) {
                                    setProceedQuiz1(!proceedQuiz1)
                                    setOpenQuiz1(!openQuiz1)
                                  }
                                  if (proceedQuiz2) {
                                    setProceedQuiz2(!proceedQuiz2)
                                    setOpenQuiz2(!openQuiz2)
                                  }
                                  setProceedQuiz3(!proceedQuiz3)
                                  setOpenQuiz3(!openQuiz3)}}>Take Quiz</a>
                            </div>

                            <Collapse in={proceedQuiz3}>
                              <div className="text-center" id="collapseQuiz">  
                                  <a href="#quiz3" className="btn btn-primary mt-3 fw-bold" style={{color: "white"}}>Proceeed to Quiz</a>
                              </div>
                            </Collapse>
                            
                        </div>
                        <div className="col-md-5 py-5">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/3lTQqEehEhI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
          </Carousel.Item>
        </Carousel>
        
          {/*   Quizzws questions and Answers */}
          <Collapse in={openQuiz1}>
          <div className="container-lg mt-4" id="quizSection" style={{paddingTop: "75px"}}>
            <div className="h2 text-primary text-center mb-2">Take the Quiz</div> 
              <div className="h3 text-center mb-2">Quiz 1</div>
                <div className="row justify-content-center">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card rounded my-3 text-start">
                            <div className="card-header h5 bg-warning text-light">Question 1</div>
                            <div className="card-body text-light bg-secondary">
                                <p className="card-text px-3 mb-3 lead fw-normal">They ............. him for a year.</p>

                                <div className="ps-5">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label" for="flexRadioDefault1">
                                        didn't see
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                        weren't see
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                                        <label className="form-check-label" for="flexRadioDefault3">
                                        haven't see
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="text-center">  
                                    <a className="btn btn-primary mt-3 fw-bold" style={{color: "white"}}
                                    onClick={() => setReveal11(!reveal11)}>Reveal Correct Answer</a>
                                </div>

                                <Collapse in={reveal11}>
                                  <div className="mt-3" style={{color: "black"}} id="collapseA1">
                                      <div className="card card-body">
                                        Correct Answer: "haven't see"
                                      </div>
                                  </div>
                                </Collapse>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card rounded my-3 text-start">
                            <div className="card-header h5 bg-warning text-light">Question 2</div>
                            <div className="card-body text-light bg-secondary">
                                <p className="card-text px-3 mb-3 lead fw-normal">The dogs ............. by Alex every day.</p>

                                <div className="ps-5">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDef" id="flexRadioDefault4"/>
                                        <label className="form-check-label" for="flexRadioDefault4">
                                        feed
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDef" id="flexRadioDefault5" />
                                        <label className="form-check-label" for="flexRadioDefault5">
                                        are fed
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDef" id="flexRadioDefault6"/>
                                        <label className="form-check-label" for="flexRadioDefault6">
                                        are feeding
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="text-center">  
                                    <a className="btn btn-primary mt-3 fw-bold" style={{color: "white"}}
                                    onClick={() => setReveal12(!reveal12)}>Reveal Correct Answer</a>
                                </div>

                                <Collapse in={reveal12}>
                                <div className="mt-3" style={{color: "black"}} id="collapseA2">
                                    <div className="card card-body">
                                      Correct Answer: "are fed"
                                    </div>
                                </div>
                                </Collapse>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card rounded my-3 text-start">
                            <div className="card-header h5 bg-warning text-light">Question 3</div>
                            <div className="card-body text-light bg-secondary">
                                <p className="card-text px-3 mb-3 lead fw-normal">The new teacher ............. tomorrow.</p>

                                <div className="ps-5">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioD" id="flexRadioDefault7"/>
                                        <label className="form-check-label" for="flexRadioDefault7">
                                        is coming
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioD" id="flexRadioDefault8" />
                                        <label className="form-check-label" for="flexRadioDefault8">
                                        will be come
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioD" id="flexRadioDefault9"/>
                                        <label className="form-check-label" for="flexRadioDefault9">
                                        will have come
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="text-center">  
                                    <a className="btn btn-primary mt-3 fw-bold" style={{color: "white"}}
                                    onClick={() => setReveal13(!reveal13)}>Reveal Correct Answer</a>
                                </div>

                                <Collapse in={reveal13}>
                                <div className="mt-3" style={{color: "black"}} id="collapseA3">
                                    <div className="card card-body">
                                      Correct Answer: "is coming"
                                    </div>
                                </div>
                                </Collapse>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
        </div>
        </Collapse>

        <Collapse in={openQuiz2}>
          <div className="container-lg mt-4" id="quiz2" style={{paddingTop: "75px"}}>
            <div className="h2 text-primary text-center mb-2">Take the Quiz</div> 
              <div className="h3 text-center mb-2">Quiz 2</div>
                <div className="row justify-content-center">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card rounded my-3 text-start">
                        <div className="card-header h5 bg-warning text-light">Question 1</div>
                            <div className="card-body text-light bg-secondary">
                                <p className="card-text px-3 mb-3 lead fw-normal"> The derivative of the following function f(x) = 5x^2 + 2x - 1 is:</p>

                                <div className="ps-5">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label" for="flexRadioDefault1">
                                        f'(x) = 10x
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                        f'(x) = 10x + 2
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                                        <label className="form-check-label" for="flexRadioDefault3">
                                        f'(x) = 10x - 2
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="text-center">  
                                    <a className="btn btn-primary mt-3 fw-bold" style={{color: "white"}}
                                    onClick={() => setReveal21(!reveal21)}>Reveal Correct Answer</a>
                                </div>

                                <Collapse in={reveal21}>
                                  <div className="mt-3" style={{color: "black"}} id="collapseA1">
                                      <div className="card card-body">
                                        Correct Answer: "f'(x) = 10x + 2"
                                      </div>
                                  </div>
                                </Collapse>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card rounded my-3 text-start">
                            <div className="card-header h5 bg-warning text-light">Question 2</div>
                            <div className="card-body text-light bg-secondary">
                                <p className="card-text px-3 mb-3 lead fw-normal">Solve the following equation and choose the correct answer: (2/3)x + 1 = (7/15)x + 3 </p>

                                <div className="ps-5">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDef" id="flexRadioDefault4"/>
                                        <label className="form-check-label" for="flexRadioDefault4">
                                        x = 9.5
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDef" id="flexRadioDefault5" />
                                        <label className="form-check-label" for="flexRadioDefault5">
                                        x = 3/2
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDef" id="flexRadioDefault6"/>
                                        <label className="form-check-label" for="flexRadioDefault6">
                                        x = 10
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="text-center">  
                                    <a className="btn btn-primary mt-3 fw-bold" style={{color: "white"}}
                                    onClick={() => setReveal22(!reveal22)}>Reveal Correct Answer</a>
                                </div>

                                <Collapse in={reveal22}>
                                <div className="mt-3" style={{color: "black"}} id="collapseA2">
                                    <div className="card card-body">
                                      Correct Answer: " x = 10"
                                    </div>
                                </div>
                                </Collapse>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card rounded my-3 text-start">
                            <div className="card-header h5 bg-warning text-light">Question 3</div>
                            <div className="card-body text-light bg-secondary">
                                <p className="card-text px-3 mb-3 lead fw-normal">Jeanne has $17 in her piggy bank. How much money does she need to buy a game that costs $68 ?</p>

                                <div className="ps-5">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioD" id="flexRadioDefault7"/>
                                        <label className="form-check-label" for="flexRadioDefault7">
                                        Jeanne needs $85 to buy the game
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioD" id="flexRadioDefault8" />
                                        <label className="form-check-label" for="flexRadioDefault8">
                                        Jeanne needs $51 to buy the game.
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioD" id="flexRadioDefault9"/>
                                        <label className="form-check-label" for="flexRadioDefault9">
                                        Jeanne needs $4 to buy the game
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="text-center">  
                                    <a className="btn btn-primary mt-3 fw-bold" style={{color: "white"}}
                                    onClick={() => setReveal23(!reveal23)}>Reveal Correct Answer</a>
                                </div>

                                <Collapse in={reveal23}>
                                <div className="mt-3" style={{color: "black"}} id="collapseA3">
                                    <div className="card card-body">
                                      Correct Answer: "Jeanne needs $51 to buy the game"
                                    </div>
                                </div>
                                </Collapse>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
        </div>
        </Collapse>

        <Collapse in={openQuiz3}>
          <div className="container-lg mt-4" id="quiz3" style={{paddingTop: "75px"}}>
            <div className="h2 text-primary text-center mb-2" id="collapseQuiz">Take the Quiz</div>
              <div className="h3 text-center mb-2">Quiz 3</div>
                <div className="row justify-content-center">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card rounded my-3 text-start">
                        <div className="card-header h5 bg-warning text-light">Question 1</div>
                            <div className="card-body text-light bg-secondary">
                                <p className="card-text px-3 mb-3 lead fw-normal">Which one of the following remains constant while throwing a ball upward?</p>

                                <div className="ps-5">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                        <label className="form-check-label" for="flexRadioDefault1">
                                        Displacement
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                        Acceleration
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                                        <label className="form-check-label" for="flexRadioDefault3">
                                        Velocity
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="text-center">  
                                    <a className="btn btn-primary mt-3 fw-bold" style={{color: "white"}}
                                    onClick={() => setReveal31(!reveal31)}>Reveal Correct Answer</a>
                                </div>

                                <Collapse in={reveal31}>
                                  <div className="mt-3" style={{color: "black"}} id="collapseA1">
                                      <div className="card card-body">
                                        Correct Answer: "Acceleration"
                                      </div>
                                  </div>
                                </Collapse>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card rounded my-3 text-start">
                            <div className="card-header h5 bg-warning text-light">Question 2</div>
                            <div className="card-body text-light bg-secondary">
                                <p className="card-text px-3 mb-3 lead fw-normal">Find the maximum velocity for the overturn of a car moving on a circular track of radius 100m. The co-efficient of friction between the road and tyre is 0.2.</p>

                                <div className="ps-5">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDef" id="flexRadioDefault4"/>
                                        <label className="form-check-label" for="flexRadioDefault4">
                                        140 m/s
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDef" id="flexRadioDefault5" />
                                        <label className="form-check-label" for="flexRadioDefault5">
                                        1.4 m/s
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDef" id="flexRadioDefault6"/>
                                        <label className="form-check-label" for="flexRadioDefault6">
                                        14 m/s
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="text-center">  
                                    <a className="btn btn-primary mt-3 fw-bold" style={{color: "white"}}
                                    onClick={() => setReveal32(!reveal32)}>Reveal Correct Answer</a>
                                </div>

                                <Collapse in={reveal32}>
                                <div className="mt-3" style={{color: "black"}} id="collapseA2">
                                    <div className="card card-body">
                                      Correct Answer: "14 m/s"
                                    </div>
                                </div>
                                </Collapse>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card rounded my-3 text-start">
                            <div className="card-header h5 bg-warning text-light">Question 3</div>
                            <div className="card-body text-light bg-secondary">
                                <p className="card-text px-3 mb-3 lead fw-normal"> Which gas in the atmosphere saves us from the ultra violet rays of the sun?</p>

                                <div className="ps-5">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioD" id="flexRadioDefault7"/>
                                        <label className="form-check-label" for="flexRadioDefault7">
                                        Ozone
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioD" id="flexRadioDefault8" />
                                        <label className="form-check-label" for="flexRadioDefault8">
                                        Nitrogen
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioD" id="flexRadioDefault9"/>
                                        <label className="form-check-label" for="flexRadioDefault9">
                                        Oxygen
                                        </label>
                                    </div>
                                </div>
                                
                                <div className="text-center">  
                                    <a className="btn btn-primary mt-3 fw-bold" style={{color: "white"}}
                                    onClick={() => setReveal33(!reveal33)}>Reveal Correct Answer</a>
                                </div>

                                <Collapse in={reveal33}>
                                <div className="mt-3" style={{color: "black"}} id="collapseA3">
                                    <div className="card card-body">
                                      Correct Answer: "Ozone"
                                    </div>
                                </div>
                                </Collapse>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
        </div>
      </Collapse>     
    </section>



     {/*    Enroll in a Course section   */}
    <section id="enroll">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4">

                    <div className="h1 text-primary mb-4 text-center">Enroll in a Course</div>

                    <div className="text-start">
                      <label for="service list" className="form-label">Select a Course</label>
                      <select className="form-select border border-primary border-3 mb-3" id="service list">
                          <option selected value="select course">Please select an option...</option>
                          <option value="English Speaking Course">English Speaking Course</option>
                          <option value="English Writing Course">English Writing Course</option>
                          <option value="English Grammar Course">English Grammar Course</option>
                          <option value="Intro to Calculus Course">Intro to Calculus Course</option>
                          <option value="Intro to Linear Algebra Course">Intro to Linear Algebra Course</option>
                          <option value="Discrete Math for Computing Course">Discrete Math for Computing Course</option>
                          <option value="Organic Chemistry Course">Organic Chemistry Course</option>
                          <option value="Electricity and Magnetism Course">Electricity and Magnetism Course</option>
                          <option value="Principles of Biology Course">Principles of Biology Course</option>
                          <option value="IELTS Prep Course">IELTS Prep Course</option>
                          <option value="TOEFL Prep Course">TOEFL Prep Course</option>
                          <option value="SAT Prep Course">SAT Prep Course</option>
                                   
                      </select>
                    </div>

                    <div className="h3 text-center mt-4" id="contact-info">Your Contact Informations</div>
    
                    <div className="mb-3 text-start">
                        <label for="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" className="form-control border border-primary border-3 mb-3" id="exampleFormControlInput1" placeholder="First Name"/>
                        <input type="text" className="form-control border border-primary border-3" id="exampleFormControlInput1" placeholder="Last Name"/>
                    </div>
                    <div className="mb-3 text-start">
                        <label for="exampleFormControlInput2" className="form-label">Phone Number</label>
                        <input type="tel" className="form-control border border-primary border-3" id="exampleFormControlInput2" placeholder="e.g. +1123-456-7890"/>
                    </div>
                    <div className="mb-3 text-start">
                        <label for="exampleFormControlInput3" className="form-label">Email address</label>
                        <input type="email" className="form-control border border-primary border-3" id="exampleFormControlInput3" placeholder="e.g. name@example.com"/>
                    </div>
            
                    <div className="row justify-content-center my-4 text-center">
                        <div className="col-4">
                            <a type="submit" className="btn btn-outline-danger px-5 ms-2 fw-bold" href="#booking" onClick={() => window.location.reload()}>Cancel</a>
                        </div>
                        <div className="col-6">
                            <a type="submit" className="btn btn-primary fw-bold px-5 ms-2" style={{color: "white"}} onClick={handleShow} role="button">
                                Enroll
                              </a>
                        </div>        
                    </div>
                </div>


                {/*   Booking Confirmation section   */}            
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      <div className="h3 text-center ps-4 text-primary">
                        Course Enrollment Confirmation
                      </div>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div class="h4 ms-5">Your Enrollment Details</div>
                      <div class="container mb-1 px-5">
                        <div class="row mx-0 p-0" style={{borderStyle: "solid", borderWidth: "3.5px", borderColor: "#666666"}}>
                            <div class="col m-0 p-1" style={{color: "white", backgroundColor: "#E48125"}}>Selected Course:</div>
                            <div class="col m-0 p-1" style={{backgroundColor: "white"}}>English Writing Course</div>
                        </div>

                        <div class="row my-2 mx-0 p-0" style={{borderStyle: "solid", borderWidth: "3.5px", borderColor: "#666666"}}>
                            <div class="col m-0 p-1" style={{color: "white", backgroundColor: "#E48125"}}>Teacher's Name:</div>
                            <div class="col m-0 p-1" style={{backgroundColor: "white"}}> Wilson Stone </div>
                        </div>

                        <div class="row my-2 mx-0 p-0" style={{borderStyle: "solid", borderWidth: "3.5px", borderColor: "#666666"}}>
                            <div class="col m-0 p-1" style={{color: "white", backgroundColor: "#E48125"}}>Date of Booking:</div>
                            <div class="col m-0 p-1" style={{backgroundColor: "white"}}>Monday, July 25th, 2023</div>
                        </div>

                        <div class="row my-2 mx-0 p-0" style={{borderStyle: "solid", borderWidth: "3.5px", borderColor: "#666666"}}>
                            <div class="col m-0 p-1" style={{color: "white", backgroundColor: "#E48125"}}>Duration of Course:</div>
                            <div class="col m-0 p-1" style={{backgroundColor: "white"}}> 9 weeks, Access Valid Until December 31th, 2023</div>
                        </div>

                        <p class="lead fs-5 fw-bold mt-5">
                          A confirmation email was sent to you with your course enrollment details. <br/> Thank you for choosing Success Academy!
                        </p>
                    </div>

                  </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" className='fw-bold px-5' onClick={handleClose} style={{color:"white"}}>
                  Close
                </Button>
                </Modal.Footer>
              </Modal>

            </div>
        </div>
      </section>
    </div>
  );
}

export default App;
