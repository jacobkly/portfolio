import './home.css';

function Home() {
    return (
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
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="down-arrow"
                        >
                            <path d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Home;