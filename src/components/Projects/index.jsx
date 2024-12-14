import { PROJECTS } from "../../constants";
import { motion } from 'framer-motion';
import Section from '../../Section';
import ProjectsCard from '../../common/ProjectsCard';
import styles from './styles.module.css';

const Projects = () => {
    return (
        <Section>
            <motion.h1
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className={styles.title}
            >
                Projects
            </motion.h1>
            <div>
                {PROJECTS.map((project) => (
                    <ProjectsCard key={project.id} project={project} />
                ))}
            </div>
        </Section>
    );
};

export default Projects;