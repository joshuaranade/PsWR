import "./Navbar.css"
import "./Home.tsx"

function Navbar(){
    return (
        <div> 
            <nav className="navbar bg-light navbar-expand-lg fixed-top">
                <div className ="bar d-flex container-xs">
                    <a className ="navbar-brand long-logo" href="home">
                        <img src="src/assets/fulllogo.png" alt="Logo" width="150" height="50" className="d-none d-lg-block align-text-top"/>
                    </a>
                    <a className ="navbar-brand short-logo" href="home">
                        <img src="src/assets/bwlogo.png" alt="Logo" width="47" height="47" className="d-lg-none align-text-top"/>
                    </a>
                    <div className="r-header d-flex justify-content-end align-items-center d-none d-lg-block navbar-expand-lg">
                        <ul className="navbar-nav ul-order">
                            <li className="nav-item">
                                <a href="#" className="td-none rm lm">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="td-none rm">ABOUT US</a>
                            </li>
                            <li className="nav-item">
                                <a href="#services" className="td-none rm">OUR SERVICES</a>
                            </li>
                            <li className="nav-item">
                                <a href="#vision" className="td-none rm ">OUR VISION</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="td-none">CONTACT US</a>
                            </li>
                        </ul>
                    </div>
                    <div className="menu-icon-container" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <div className="menu-icon d-lg-none">
                            <span className="top-line"></span>
                            <span className="bottom-line"></span>
                        </div>
                    </div>
                    {/* <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="offcanvas offcanvas-end bg-light" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h2 className="offcanvas-title ps-purple txt-bold" id="offcanvasNavbarLabel">PARNASOFT</h2>
                            <div className="close-icon-container" data-bs-dismiss="offcanvas" aria-controls="Close">
                                <div className="close-icon">
                                    <span className="x1-line"></span>
                                    <span className="x2-line"></span>
                                </div>
                            </div>
                            {/* <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 d-lg-none">
                                <li className="nav-item">
                                    <a href="#" className="td-none rm txt-bold">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#about" className="td-none rm txt-bold">ABOUT US</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#services" className="td-none rm txt-bold">OUR SERVICES</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#vision" className="td-none rm txt-bold">OUR VISION</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#contact" className="td-none txt-bold">CONTACT US</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;