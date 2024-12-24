import './skill.css';

interface Props {
    name: string;
    imagePath: string;
}

const Skill: React.FC<Props> = ({ name, imagePath }) => {
    const altText = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    return (
        <div id="skill-container">
            <img id="skill-image" src={imagePath} alt={altText} />
            <p id="skill-text" className="barlow-regular">{name}</p>
        </div>
    );
}

export default Skill;