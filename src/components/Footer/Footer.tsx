import './footer.css';

const Footer: React.FC = () => {
    return (
        <div id="footer">
            <div id="content-container">
                <p>&copy; 2024 Jacob Klymenko. All rights reserved. This site is not finished and never will be.</p>
                <div id="social-icons">
                    <a href="https://github.com/jacobkly" target="_blank" rel="noopener noreferrer">
                        <img src="/images/github.png" alt="GitHub" className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/jacob-kly" target="_blank" rel="noopener noreferrer">
                        <img src="/images/linkedin.png" alt="LinkedIn" className="social-icon linkedin" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;