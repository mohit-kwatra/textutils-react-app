import {Link} from 'react-router-dom';
import sun from '../icons/clipart90410.png';
import moon from '../icons/moon.png';

function Navbar(props) {
    
    return (
        <nav className={`navbar navbar-expand-md navbar-${props.theme} bg-${props.theme}`} style={{boxShadow: props.theme === "light"? "0 0 25px rgba(0,0,0,0.2)":"0 0 25px rgba(255,255,255,0.2)"}}>
        <div className="container-fluid justify-content-between">
            <div className="navbar-brand-container d-flex justify-content-start">
                <Link to="/" className="navbar-brand">TextUtils</Link>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#hide-me" aria-controls="hide-me" aria-expanded="false" aria-label="Toggle Navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between align-items-center" id="hide-me">
                <div className="form-check form-switch">
                    <input type="checkbox" id='switchBtn' className='form-check-input' role="switch" onClick={() => {
                        props.changeTheme()
                    }} />
                    <label htmlFor="switchBtn" className="form-check-label">
                        <img src={props.theme === "light" ? `${sun}` : `${moon}`} alt="" height="25px" title={(props.theme === "light" ? "Light Mode" : "Dark Mode") +" Enabled"}/>
                    </label>
                </div>
                <ul className="navbar-nav mb-2 mb-md-0">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                </ul>                
            </div>
        </div>
        </nav>
    );
}

export default Navbar;