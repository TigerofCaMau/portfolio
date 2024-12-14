import { motion } from 'framer-motion';
import styles from '../components/Projects/styles.module.css';

const ProjectsDetails = ({ title, description, technologies }) => {
    return (
        <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1 }}
            className={styles.detailsColumn}
        >
            <h6 className={styles.projectTitle}>{title}</h6>
            <p className={styles.projectDescription}>{description}</p>
            {technologies.map((tech, index) => (
                <span
                    key={index}
                    className={styles.technologyTag}
                >
                    {tech}
                </span>
            ))}
        </motion.div>
    );
};

export default ProjectsDetails;