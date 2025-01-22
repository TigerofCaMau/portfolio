import ProjectsImage from './ProjectsImage';
import ProjectsDetails from './ProjectsDetails';
import styles from '../components/Projects/styles.module.css';

const ProjectsCard = ({ project: { image, title, description, technologies, url } }) => {
    return (
        <div className={styles.projectsContainer}>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <ProjectsImage image={image} alt={title} />
            </a>
            <ProjectsDetails
                title={title}
                description={description}
                technologies={technologies}
            />
        </div>
    );
};

export default ProjectsCard;