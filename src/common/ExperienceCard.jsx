import { motion } from 'framer-motion';
import styles from '../components/Experience/styles.module.css';

const ExperienceCard = ({ year, role, company, description, technologies }) => {
    return (
        <div className={styles.content}>
            <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                className={styles.yearColumn}
            >
                <p>{year}</p>
            </motion.div>
            <motion.div
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 1 }}
                className={styles.detailsColumn}
            >
                <h6 className={styles.roleTitle}>
                    {role} -{" "}
                    <span className={styles.companyName}>
                        {company}
                    </span>
                </h6>
                <p className={styles.roleDescription}>{description}</p>
                {technologies.map((tech, index) => (
                    <span key={index} className={styles.technologyTag}>
                        {tech}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default ExperienceCard;