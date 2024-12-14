import ProjectsImage from './ProjectsImage';
import ProjectsDetails from './ProjectsDetails';
import styles from '../components/Projects/styles.module.css';

const ProjectsCard = ({ project: { image, title, description, technologies } }) => {
    return (
        <div className={styles.projectsContainer}>
            <ProjectsImage image={image} alt={title} />
            <ProjectsDetails
                title={title}
                description={description}
                technologies={technologies}
            />
        </div>
    );
};

export default ProjectsCard;