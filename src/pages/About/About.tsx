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
                            <Skill name="JAVA" imagePath="/images/java.png" />
                            <Skill name="GOLANG" imagePath="/images/golang.png" />
                            <Skill name="PYTHON" imagePath="/images/python.png" />
                        </div>
                        <div className="skill-row even-row">
                            <Skill name="NODE.JS" imagePath="/images/nodejs.svg" />
                            <Skill name="EXPRESS.JS" imagePath="/images/expressjs.png" />
                            <Skill name="POSTGRESQL" imagePath="/images/postgresql.png" />
                            <Skill name="GIT" imagePath="/images/git.png" />
                        </div>
                        <div className="skill-row odd-row">
                            <Skill name="REACT" imagePath="/images/react.png" />
                            <Skill name="TYPESCRIPT" imagePath="/images/typescript.png" />
                            <Skill name="CSS" imagePath="/images/css.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;