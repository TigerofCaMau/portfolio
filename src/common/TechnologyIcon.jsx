import { motion } from 'framer-motion';
import styles from '../components/Technologies/styles.module.css';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        },
    },
});

const TechnologyIcon = ({ icon: Icon, customClass, duration }) => {
    return (
        <motion.div
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            className={styles.iconWrapper}
        >
            <Icon className={`${styles.icon} ${customClass || ''}`} />
        </motion.div>
    );
};

export default TechnologyIcon;