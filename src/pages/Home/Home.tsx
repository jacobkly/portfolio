import './home.css';

const Home: React.FC = () => {
    return (
        <div id="home">
            <div id="home-container">
                <p id="line-one" className="barlow-extralight">Hello, I'm
                    <span id="name" className="barlow-extralight"> Jacob</span>.
                </p>
                <p id="line-two" className="barlow-extralight">I'm a full stack developer.</p>
                <div id="link-container">
                    <p id="link-text">
                        <a href="#about" className="barlow-regular">
                            View my work
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="down-arrow"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                                />
                            </svg>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;