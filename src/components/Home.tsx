import "./Home.css";

function Home(){
    return (
        <div className="home">
            <div className="container" id="start">

                <div className="main-line row mt-5 mb-5">
                    <h1 className="tag-line font-cl col-md-12">Innovate. Transform. Excel.<br/><span className="ps-purple">ParnaSoft Technologies.</span></h1>
                    <div className="extra-info d-flex">
                            <p className="sec-line font-var font-cl">Explore Further!</p>
                            <a className="loc" href="#services">
                                <img src="/src/assets/DA.png"/>
                            </a>
                            <a className="loc ml" id="about" href="https://maps.app.goo.gl/WuqzCmQmhqSU2Dqi7" target="_blank">
                                <img src="/src/assets/loc.png"/>
                            </a>
                    </div>
                </div>
                <hr className="line-break"/>
                <div className="abt-line my-5">
                    <div className="abt-line row">
                        <h1 className="tag-line font-cl col-md-6 ps-purple">About Us</h1>
                        <h1 className="tag-line font-cl col-md-6"></h1>
                    </div>
                    <p className="in-info font-cl big-font  pt-5">
                             <b>ParnaSoft</b> excels in Software Engineering, specializing in Architecture, Development, Testing, and Automation for desktop, web, and mobile. Our precision extends to GIS, Asset Management, Industrial Automation, and Exam Automation.<br></br>
                    </p>
                    <div className="abt-extra-info d-flex">
                            <p className="in-info font-cl col-md-6 mr">
                             <b>Our Expertise:</b> <br></br>
                             GIS Solutions: Precision in Geographic Information Systems.
                             Asset Management: Strategic handling of valuable assets.<br></br>
                             Industrial Automation: Streamlining industrial processes with cutting-edge technology.<br></br>
                             Exam Automation System: Enhancing efficiency in examination processes.<br></br>
                            </p>
                            <p className="in-info font-cl col-6 ml pr" id="services"> <b>Our Team:</b> <br></br>
                             Comprising highly skilled Engineers with over 15 years of experience, we bring a wealth of knowledge across diverse domains, ensuring the highest quality in our services.
                             </p>
                    </div>
                </div>
                <hr className="line-break-new"/>
                <div className="serv-line row my-5" >
                    <h1 className="tag-line font-cl ps-purple">Services We Provide.</h1>
                    <div className="serv-extra-info d-flex py-5">
                        <div className="img-container col-md-3 d-flex flex-column align-items-center">
                            <img src="src/assets/IA.png" className="in-img"></img>
                            <p className="in-info font-cl text-center">INDUSTRIAL AUTOMATION</p>
                        </div>
                        <div className="img-container col-md-3 d-flex flex-column align-items-center">
                            <img src="src/assets/ES.png" className="in-img"></img>
                            <p className="in-info font-cl text-center">EDUCATIONAL SERVICES</p>
                        </div>
                        <div className="img-container col-md-3 d-flex flex-column align-items-center">
                            <img src="src/assets/WDS.png" className="in-img"></img>
                            <p className="in-info font-cl text-center">WEB DEVELOPMENT SERVICES</p>
                        </div>
                        <div className="img-container col-md-3 d-flex flex-column align-items-center">
                            <img src="src/assets/GIS.png" className="in-img h-adj"></img>
                            <p className="in-info font-cl text-center">GIS SOLUTIONS AND APPLICATION DEVELOPMENT</p>
                        </div>
                    </div>
                    <div className="serv-extra-info d-flex pb-5">
                        <div className="img-container col-md-3 d-flex flex-column align-items-center">
                            <img src="src/assets/CAD.png" className="in-img"></img>
                            <p className="in-info font-cl text-center">CUSTOM APPLICATION DEVELOPMENT</p>
                        </div>
                        <div className="img-container col-md-3 d-flex flex-column align-items-center">
                            <img src="src/assets/STS.png" className="in-img"></img>
                            <p className="in-info font-cl text-center">SOFTWARE TESTING AND QA SERVICES</p>
                        </div>
                        <div className="img-container col-md-3 d-flex flex-column align-items-center">
                            <img src="src/assets/MAD.png" className="in-img"></img>
                            <p className="in-info font-cl text-center">MOBILE APPLICATION DEVELOPMENT</p>
                        </div>
                        <div className="img-container col-md-3 d-flex flex-column align-items-center">
                            <img src="src/assets/SCS.png" className="in-img"></img>
                            <p className="in-info font-cl text-center" id="vision">SOFTWARE CONSULTING AND TRAINING SERVICES</p>
                        </div>
                    </div>
                </div>
                <hr className="line-break-new"/>

                <div className="vs-line my-5">
                    <div className="vs-line row">
                        <h1 className="tag-line font-cl col-md-12 ps-purple">Our Vision</h1>
                    </div>
                    <div className=" py-5">
                        <p className="in-info font-cl big-font mb">
                         "To serve as a trusted partner to our clients, we deliver the highest-quality IT professionals through an optimized global delivery model. Our commitment to excellence ensures competitive pricing, providing superior value to our clients and industry-leading profitability to our shareholders. We prioritize the professional growth of our employees, fostering continued opportunities within our organization."
                        </p>
                    </div>
                </div>
                <hr className="line-break-new" id="contact"/>
                <div className="ct-line mt-5">
                    <div className="vs-line row">
                        <h1 className="tag-line font-cl col-md-12 ps-purple">Contact Us!</h1>
                    </div>
                    <div className="py-5 d-flex">
                        <div className="img-container col-md-4 d-flex flex-column align-items-center">
                            <img src="src/assets/add.png" className="in-img"></img>
                            <p className="in-info font-cl text-center">4-51-5<br></br>Lawsons Bay Colony, <br></br>Post Office Road,<br></br>Visakhapatnam-530017</p>
                        </div>
                        <div className="img-container col-md-4 d-flex flex-column align-items-center">
                            <img src="src/assets/PHN.png" className="in-img"></img>
                            <p className="in-info font-cl text-center">+91 6742915301</p>
                        </div>
                        <div className="img-container col-md-4 d-flex flex-column align-items-center">
                            <img src="src/assets/MAIL.png" className="in-img"></img>
                            <p className="in-info font-cl text-center">hr@ParnaSoft.tech</p>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}
export default Home;