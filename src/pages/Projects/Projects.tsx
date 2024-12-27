import Header from '../../components/Header/Header';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projectContents from '../../assets/data/projectContents.json';
import './projects.css';

const Projects: React.FC = () => {
    const count: number = projectContents.projects.length;

    return (
        <div id="projects">
            <div id="projects-header">
                <Header section="Projects" left={29} />
            </div>
            <div id="projects-container">
                {Array.from({ length: count }, (_, index) => {
                    const project = projectContents.projects[index];

                    return (
                        <ProjectCard
                            title={project.title}
                            subtitle={project.subtitle}
                            description={project.description}
                            imagePath={project.imagePath}
                            alignment={index % 2 === 0 ? "left" : "right"}
                            liveAppLink={project.liveAppLink}
                            repoLink={project.repoLink}
                        />
                    );
                })}
            </div>
            <div id="spacer" />
        </div>
    );
}

export default Projects;