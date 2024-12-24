import { useEffect, useState } from 'react';
import './header.css';

interface Props {
    section: string;
    left: number; // pixel offset from the left
}

const Header: React.FC<Props> = ({ section, left }) => {
    const [underlineStyle, setUnderlineStyle] = useState<{ left: number }>({ left: 0 });
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        let updatedLeft: number = left;

        // smallest to largest to cover all window width sizes
        if (windowWidth <= 480) {
            updatedLeft = left - 16;
        } else if (windowWidth <= 768) {
            updatedLeft = left - 11;
        } else if (windowWidth <= 1024) {
            updatedLeft = left - 6;
        }

        setUnderlineStyle({ left: updatedLeft });
    }, [section, left, windowWidth]);

    return (
        <div id="header-container">
            <p id="header-text" className="barlow-semibold">
                {section}
            </p>
            <div id="underline" style={{ left: underlineStyle.left }} />
        </div>
    );
}

export default Header;