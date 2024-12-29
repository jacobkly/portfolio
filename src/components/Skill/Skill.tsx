import './skill.css';

interface Props {
    name: string;
    imagePath: string;
    webLink: string;
}

const Skill: React.FC<Props> = ({ name, imagePath, webLink }) => {
    const altText = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    return (
        <a href={webLink} target="_blank" rel="noopener noreferrer">
            <div className="skill-container">
                <img className="skill-image" src={imagePath} alt={altText} />
                <p className="skill-text barlow-regular">{name}</p>
            </div>
        </a>
    );
}

export default Skill;