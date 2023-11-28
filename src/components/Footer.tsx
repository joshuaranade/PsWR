import "./Footer.css"
function Footer(){
    return (
        <div>
            <div className="container-footer d-flex">
                <div className="footer d-flex justify-content-between align-items-center">
                    <p className="ps-purple font-size-sm">©<b> ParnaSoft Technologies</b>, Private Limited. All Rights Reserved.</p>
                    <a className="loc ml f-up" href="#start">
                        <img src="src/assets/DA.png"/>
                    </a>
                </div>
            </div>
        </div>

    )
}
export default Footer;