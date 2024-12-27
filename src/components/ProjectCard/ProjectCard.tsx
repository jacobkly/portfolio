import { useInView } from 'react-intersection-observer';
import './project-card.css';

interface Props {
    title: string;
    subtitle: string;
    description: string;
    imagePath: string;
    alignment: string;
    liveAppLink?: string;
    repoLink?: string;
}

const ProjectCard: React.FC<Props> = ({ title, subtitle, description, imagePath, alignment, liveAppLink, repoLink }) => {
    const isLeft: boolean = alignment === "left";

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div
            ref={ref}
            className={
                `project-container ${isLeft ? "project-left" : "project-right"} ${inView ? "visible" : ''}`
            }>
            <div className="project-backdrop" />
            <div className="content-container">
                {isLeft ? (
                    <>
                        <img className="project-image" src={imagePath} alt={`${title} Application Image`} />
                        <TextContainer
                            title={title}
                            subtitle={subtitle}
                            description={description}
                            liveAppLink={liveAppLink}
                            repoLink={repoLink}
                        />
                    </>
                ) : (
                    <>
                        <TextContainer
                            title={title}
                            subtitle={subtitle}
                            description={description}
                            liveAppLink={liveAppLink}
                            repoLink={repoLink}
                        />
                        <img className="project-image" src={imagePath} alt={`${title} Application Image`} />
                    </>
                )}
            </div>
        </div>
    );
};

const TextContainer: React.FC<Omit<Props, 'imagePath' | 'alignment'>> =
    ({ title, subtitle, description, liveAppLink, repoLink }) => {
        return (
            <div className="text-container">
                <h1 className="barlow-medium">{title}</h1>
                <h2 className="barlow-regular">{subtitle}</h2>
                <p className="barlow-light">{description}</p>
                <div className="actions-container">
                    {liveAppLink && (
                        <a href={liveAppLink} className="action-link barlow-medium" target="_blank" rel="noopener noreferrer">
                            LIVE APP
                        </a>
                    )}
                    {repoLink && (
                        <a href={repoLink} className="action-link barlow-medium" target="_blank" rel="noopener noreferrer">
                            REPOSITORY
                        </a>
                    )}
                </div>
            </div>
        );
    };

export default ProjectCard;