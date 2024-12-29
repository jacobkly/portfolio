import Header from '../../components/Header/Header';
import Skill from '../../components/Skill/Skill';
import { useInView } from 'react-intersection-observer';
import './about.css';

const About: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div id="about">
            <div id="header"><Header section="About" left={34} /></div>
            <div ref={ref} className={`animated-section ${inView ? "visible" : ''}`}>
                <div id="about-container">
                    <div id="bio-container">
                        <img id="picture" src="/images/profile-pic.jpg" alt="Jacob's Picture" />
                        <div id="text-container">
                            <p className="barlow-light">
                                I’m a student at the University of Washington with a deep passion for
                                becoming a full-stack developer. I’m excited by the challenge of creating
                                software that solves real-world problems, and I love working with
                                technologies like TypeScript, React, and Golang to build scalable,
                                efficient systems. My journey as a developer is fueled by a constant
                                drive to learn and grow, whether I’m tackling complex projects or exploring
                                new tools and frameworks. When I’m not coding, I enjoy playing guitar and jazz
                                saxophone, where creativity and problem-solving come to life in
                                different ways.
                            </p>
                        </div>
                    </div>
                    <div id="skills-container">
                        <div className="skill-row odd-row">
                            <Skill name="JAVA" imagePath="/images/java.png" webLink="https://www.java.com/en/" />
                            <Skill name="GOLANG" imagePath="/images/golang.png" webLink="https://go.dev/" />
                            <Skill name="PYTHON" imagePath="/images/python.png" webLink="https://www.python.org/" />
                        </div>
                        <div className="skill-row even-row">
                            <Skill name="NODE.JS" imagePath="/images/nodejs.svg" webLink="https://nodejs.org/en" />
                            <Skill name="EXPRESS.JS" imagePath="/images/expressjs.png" webLink="https://expressjs.com/" />
                            <Skill name="POSTGRESQL" imagePath="/images/postgresql.png" webLink="https://www.postgresql.org/" />
                            <Skill name="GIT" imagePath="/images/git.png" webLink="https://git-scm.com/" />
                        </div>
                        <div className="skill-row odd-row">
                            <Skill name="REACT" imagePath="/images/react.png" webLink="https://react.dev/" />
                            <Skill name="TYPESCRIPT" imagePath="/images/typescript.png" webLink="https://www.typescriptlang.org/" />
                            <Skill name="CSS" imagePath="/images/css.png" webLink="https://www.w3.org/Style/CSS/Overview.en.html" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;