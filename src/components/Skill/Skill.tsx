import './skill.css';

interface Props {
    name: string;
    imagePath: string;
}

const Skill: React.FC<Props> = ({ name, imagePath }) => {
    const altText = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    return (
        <div className="skill-container">
            <img className="skill-image" src={imagePath} alt={altText} />
            <p className="skill-text barlow-regular">{name}</p>
        </div>
    );
}

export default Skill;