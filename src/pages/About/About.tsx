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
                                As a senior at the University of Washington, majoring in Computer
                                Science and Systems with a 3.91 GPA, I’m passionate about building software
                                that makes a difference. Being a full-stack developer, I enjoy creating secure,
                                scalable systems and writing efficient code to solve challenging problems. I’ve
                                led teams on exciting projects, developed tools to simplify daily tasks, and
                                continuously seek new ways to learn and grow. Outside of coding, I love playing
                                jazz saxophone and guitar, spending time wih family and friends, and exploring
                                creative solutions through programming.
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