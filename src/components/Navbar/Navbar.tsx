import './navbar.css';

const Navbar: React.FC = () => {
    return (
        <div id="navbar">
            {/* <img src="logo.png" alt="Logo" className="logo"> */}
            <div id="nav-links">
                <ul>
                    <li><a href="#home" className="barlow-regular">Home</a></li>
                    <li><a href="#about" className="barlow-regular">About</a></li>
                    <li><a href="#projects" className="barlow-regular">Projects</a></li>
                    <li><a href="#contact" >Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;