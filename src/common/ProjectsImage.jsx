import { motion } from 'framer-motion';
import styles from '../components/Projects/styles.module.css';

const ProjectsImage = ({ image, alt }) => {
    return (
        <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            className={styles.imageWrapper}
            >
                <img
                    src={image}
                    alt={alt}
                    width={150}
                    height={150}
                    className={styles.image}
                />    
        </motion.div>
    );
};

export default ProjectsImage;